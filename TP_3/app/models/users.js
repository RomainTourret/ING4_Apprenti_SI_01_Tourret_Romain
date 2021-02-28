const {v4: uuid} = require('uuid');
const db = require('../../db_config');

const listAllUsers = async () => {
    return new Promise((resolve, reject) => {
        const users = [];

        const options = {
            gt: 'users:',
            lte: "users" + String.fromCharCode(":".charCodeAt(0) + 1),
        };

        //https://github.com/Level/level#createReadStream
        db.createReadStream(options)
            .on('data', ({key, value}) => {
                users.push(JSON.parse(value));
            })
            .on('error', (err) => {
                reject(err)
            })
            .on('end', () => {
                resolve(users);
            });
    })

};

const createNewUser = body => {
    if(!body.name) {
        return null //ne pas oublier les blindages !
    }
    if(!body.email) {
        return null //ne pas oublier les blindages !
    }
    if(!body.password) {
        return null //ne pas oublier les blindages !
    }

    //on créé un objet user
    const user = {
        id: uuid(),
        name: body.name,
        email: body.email,
        password: body.password,
    };

    return new Promise(((resolve, reject) => {
        //https://github.com/Level/level#put
        // on insère en base de données
        db.put(`users:${user.id}`, JSON.stringify(user), (err) => {
            if(err) {
                //TODO blindage erreur
                if (err.notFound){
                    return
                }
                return reject(err);
            }
            resolve(user);//On a "jsonifié" notre user lorsque on l'a créé ligne 24. Il faut faire l'opération inverse
        })
    }));
};

const showUserInfo = userId => {
    //on a un code asynchrone, on va donc utiliser les promesses pour nous simplifier la vie...
    //https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise
    //https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Utiliser_les_promesses
    return new Promise(((resolve, reject) => {
        db.get(`users:${userId}`, (err, value) => {
            if(err) {
                let user = "error";
                resolve(user)
            }
            console.log(value);

            resolve(JSON.parse(value));//On a "jsonifié" notre user lorsque on l'a créé ligne 24. Il faut faire l'opération inverse
        });
    }));
};

const updateUserInfo = async (userId, body) => {
    if(!body.name) {
        return null //ne pas oublier les blindages !
    }
    if(!body.email) {
        return null //ne pas oublier les blindages !
    }
    if(!body.password) {
        return null //ne pas oublier les blindages !
    }

    return new Promise(((resolve, reject) => {
        db.get(`users:${userId}`, (err, value) => {
            if(err) {             
                let user = "error";
                resolve(user);
            }
            else{
                let user = JSON.parse(value);
                user.name = body.name;
                user.email = body.email;
                user.password = body.password;
                
                db.put(`users:${user.id}`, JSON.stringify(user), (err) => {
                    if(err) {
                        //TODO blindage erreur
                        return reject(err);
                        }
                    else{ 
                        resolve(user);
                        }
        
                    })
                };
        })
    }))
};


const deleteUser = async userId => {
    return new Promise(((resolve, reject) => {
        db.get(`users:${userId}`, (err, value) => {
            if(err) {             
                let user = "errorID";
                resolve(user);
            }
            else{
                db.del(`users:${userId}`, (err) => {
                    if(err) {             
                        let user = "error";
                        resolve(user);
                    }
                    else{
                        let user = "OK";
                        resolve(user);
                    }
            })};
        })
    }))
};

module.exports = {
    listAllUsers,
    createNewUser,
    showUserInfo,
    updateUserInfo,
    deleteUser,
};
