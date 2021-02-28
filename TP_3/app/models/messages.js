const {v4: uuid} = require('uuid');
const db = require('../../db_config');

const listMessagesFromChannel = async () => {
    return new Promise((resolve, reject) => {
        const messages = [];

        const options = {
            gt: 'messages:',
            lte: "messages" + String.fromCharCode(":".charCodeAt(0) + 1),
        };

        //https://github.com/Level/level#createReadStream
        db.createReadStream(options)
            .on('data', ({key, value}) => {
                messages.push(JSON.parse(value));
            })
            .on('error', (err) => {
                reject(err)
            })
            .on('end', () => {
                resolve(messages);
            });
    })

};

const createNewMessage = (channelId, body) => {
    if(!body.content) {
        return null //ne pas oublier les blindages !
    }
    
    return new Promise(((resolve, reject) => {

    db.get(`channels:${channelId}`, (err, value) => {
        if(err) {             
            let channel = "error";
            resolve(channel);
        }
        else{
    //on créé un objet message
            const messages = {
                id: uuid(),
                content: body.content,
                created_at: channelId,
            };

                //https://github.com/Level/level#put
                // on insère en base de données
                db.put(`messages:${messages.id}`, JSON.stringify(messages), (err) => {
                    if(err) {
                        //TODO blindage erreur
                        let message = "error";
                        return reject(message);
                    }
                    else{
                        //const result = "oui dans le model";
                        //console.log(result);
                        let message = "OK";
                        resolve(message); //On a "jsonifié" notre user lorsque on l'a créé ligne 24. Il faut faire l'opération inverse
                    }})
            }})}));
        };


const updateMessage = (channelId, messageId, body) => {
    if(!body.content) {
        return null //ne pas oublier les blindages !
    }

    return new Promise(((resolve, reject) => {

        db.get(`channels:${channelId}`, (err, value) => {
            if(err) {             
                let channel = "error";
                resolve(channel);
            }
        else{
            db.get(`messages:${messageId}`, (err, value) => {
                if(err) {             
                    let message = "error";
                    resolve(message);
                }
                else{
                
                    let message = JSON.parse(value);
                    message.content = body.content;
                    
                    db.put(`messages:${message.id}`, JSON.stringify(message), (err) => {
                        if(err) {
                            //TODO blindage erreur
                            return reject(err);
                            }
                        else{ 
                            resolve(message);
                            }
            
                        })
                    };
            })
        }})})
        )
};


const deleteMessage = (channelId, messageId) => {
    return new Promise(((resolve, reject) => {
        db.get(`channels:${channelId}`, (err, value) => {
            if(err) {             
                let channel = "error";
                resolve(channel);
            }
            else{
                db.del(`messages:${messageId}`, (err) => {
                    if(err) {             
                        let message = "error";
                        resolve(message);
                    }
                    else{
                        let message = "OK";
                        resolve(message);
                    }
            })};
        })
    }))
};

module.exports = {
    listMessagesFromChannel,
    createNewMessage,
    updateMessage,
    deleteMessage,
};
