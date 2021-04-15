import React, {useState} from 'react';
import Messages from '../message/Messages';
import MessageForm from '../message/MessageForm';

const styles = {
	channel: {
		height: '100%',
		flex: '1 1 auto',
		display: 'flex',
		flexDirection: 'column',
		overflow: 'hidden'
	},
	messages: {
		flex: '1 1 auto',
		height: '100%',
		overflow: 'auto',
		'& ul': {
			'margin': 0,
			'padding': 0,
			'textIndent': 0,
			'listStyleType': 0
		}
	},
};

const Channel = ({channel}) => {
	const [messages, setMessages] = useState([
		{
			author: 'sergei',
			creation: 1602831101929,
			content: `Mornin' Boiz`
		},
		{
			author: 'david',
			creation: 1602832138892,
			content: `Howdy partner`
		},
		{
			author: 'sergei',
			creation: 1602840139202,
			content: `So what's up ?`
		},
		{
			author: 'david',
			creation: 1602844139200,
			content: `Nada`
		},
	]);

	const addMessage = newMessage => {
		setMessages([
			...messages,
			newMessage
		]);
	};

	return (
		<div style={styles.channel}>
			<div style={styles.messages}>
				<h1>Messages for {channel.name}</h1>
				<Messages messages={messages} />
			</div>
			<MessageForm addMessage={addMessage} />
		</div>
	);
};

export default Channel;
