const app = require('../app');
const db = require('../db_config');
const {v4: uuid} = require('uuid');
const request = require('supertest');

describe('users api tests', () => {
	beforeEach(async () => {
		await db.clear(); //on va clean la base de données
	});

	it('list empty', async () => {
		// Return an empty channel list by default
		await request(app)
			.get('/api/v1/users')
			.expect(200, []);
	});

	it('list one element', async () => {
		// Create a channel
		const user = {
			id: '123',
			name: 'name',
            email: 'email',
            password: 'password'
		};
		await db.put(`users:${user.id}`, JSON.stringify(user));

		// Ensure we list the channels correctly
		await request(app)
			.get('/api/v1/users/123')
			.expect(200, {
				id: '123',
				name: 'name',
                email: 'email',
                password: 'password'
			});
	});

	it('create new user with name, email or password not given', async () => {
        const user = {
			id: '123',
			name: 'name',
            email: 'email',
            password: 'password'
		};
		await db.put(`users:${user.id}`, JSON.stringify(user));

		const {body} = await request(app)
			.post('/api/v1/users')
			.expect(400);

        body.should.match("Name, email or password is required.");

	});

	it('create new user', async () => {
		const {body} = await request(app)
			.post('/api/v1/users')
			.send({name: 'name',
                   email: 'email',
                   password: 'password'})
			.expect(201);

		body.should.match({
			id: /^\w+-\w+-\w+-\w+-\w+$/, //on utilise une regex pour dire que notre id correspond bien à un uui
			name: 'name',
            email: 'email',
            password: 'password'
		});
	});

	it('show user with bad userId', async () => {
		await request(app)
			.get('/api/v1/users/1365498745654')
			.expect(400, '"Error : this user doesn\'t event exist wtf."');
	});

	//TODO show channel with id who does not exist
	
	it('show channel invalid id', async () => {
		
		await request(app)
			.get('/api/v1/channels/123456')
			.expect(400);
	});
	//TODO update channel with all cases
	it('update channel', async () => {
		// Create a channel
		const channel = {
			id: 12345,
			name: 'name',
		};
		await db.put(`channels:${channel.id}`, JSON.stringify(channel));

		const {body} = await request(app)
			.put('/api/v1/channels/12345')
			.send({name: 'nameModified'})
			.expect(200);

		body.should.match({
			id: 12345, //on utilise une regex pour dire que notre id correspond bien à un uui
			name: 'nameModified'
		});
	});

	it('update channel without name', async () => {
		// Create a channel
		const channel = {
			id: 12345,
			name: 'name',
		};
		await db.put(`channels:${channel.id}`, JSON.stringify(channel));

		const {body} = await request(app)
			.put('/api/v1/channels/12345')
			.send({})
			.expect(400);

		body.should.match("Error : name is required.");
	});

	it('update channel without valid channelId', async () => {
		// Create a channel
		const channel = {
			id: 12345,
			name: 'name',
		};
		await db.put(`channels:${channel.id}`, JSON.stringify(channel));

		const {body} = await request(app)
			.put('/api/v1/channels/123456')
			.send({name: 'nameModified'})
			.expect(400);

		body.should.match("Error : this user doesn't event exist wtf.");
	});

	//TODO delete channel with all cases

	it('delete a channel', async () => {
		// delete a channel
		const channel = {
			id: 123456789,
			name: 'name',
		};
		await db.put(`channels:${channel.id}`, JSON.stringify(channel));

		const {body} = await request(app)
			.del('/api/v1/channels/123456789')
			.send({})
			.expect(200);

		body.should.match("Suppression du channel effectuée");
	});

	it('delete a channel with invalid channelId', async () => {
		// delete a channel
		const channel = {
			id: 123456789,
			name: 'name',
		};
		await db.put(`channels:${channel.id}`, JSON.stringify(channel));

		const {body} = await request(app)
			.del('/api/v1/channels/1234567890')
			.send({})
			.expect(400);

		body.should.match("Error : this channel doesn't event exist wtf.");
	});
});
