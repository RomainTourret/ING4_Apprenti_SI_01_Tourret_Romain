   module.exports = function(app){
    const bodyParser = require('body-parser');
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    //Déclaration d'une table users (constante sauf modification)
    let users = [
        {
            id : '1234',
            name : 'user1',
        },
        {
            id : '1235',
            name : 'user2',
        },
    ];

    //Page d'accueil ==> affiche Hello World
    app.get('/',(req,res) => {
        const response = {
            message: 'Hello World!',
        };

        res.send(JSON.stringify(response));
    });

    //Page retournant tous les users
    app.get('users', function(req,res){
        return res.status(201).json(users);
    });

    //http://localhost:8080/users/1234 (URL d'exemple)
    //La fonction retourne les informations relatives à un user
    //Ici on retourne un user en fonction de l'ID
    app.get('/users/:id', function(req,res){
        const userId = req.params.id;
        const user = users.find(user => user.id == userId);

        if(user){
            return res.status(200).json(user);
        } 
        else{
            return res.status(404).json("Aucune correspondance");
        }
    });
    //http://localhost:8080/users/?name=robert&id=3456 
    app.post('/users', function(req,res){
        const body = req.body;

        users.push(body);

        return res.status(201).json(body);
    });
    
    app.put('/users/:id', function(req,res){
        let found = users.find(function(item){
            return item.id === req.params.id;
        });

        if(found){
            let updated = {
                id : found.id,
                name : req.body.name,
            };
            let foundedIdex = users.indexOf(found);
            console.log("Before update : ", users[foundedIdex])
            
            users.splice(foundedIdex,1,updated);
            console.log("After update", users[foundedIdex])
            res.sendStatus(201);
        }
        else{
            res.sendStatus(404).json("Aucune correspondance");
        }
    });

    app.delete('/users/:id', (req,res) =>{
        let found = users.find(function(item){
            return item.id === req.params.id;
        });
        if(found){
            let foundedIdex = users.indexOf(found);
            console.log("Before : ", users[foundedIdex])

            users.splice(foundedIdex, 1);
            console.log("After : ", users[foundedIdex])
            res.sendStatus(204);
        } 
        else{
            res.sendStatus(404);
        }
    });
   }
