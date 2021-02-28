const {
    listMessagesFromChannel,
    createNewMessage,
    updateMessage,
    deleteMessage,
} = require('../models/messages');

exports.index = async (req, res) => {
    const messages = await listMessagesFromChannel();
    return res.status(200).json(messages);
};

exports.create = async (req, res) => {
    const {body} = req; //on destructure req pour récuperer le body
    const channelId = req.params.channelId;
    const messages = await createNewMessage(channelId, body);

    console.log(messages);

    if(! messages) 
    {
        return res.status(400).json({
            content: 'Error : Content required'
        });
    }
    else if(messages == "error") 
    {
        return res.status(400).json("Error : specified channel is not known");
    }
    else
    {
        return res.status(201).json(messages); //Code 201 pour une création : https://fr.wikipedia.org/wiki/Liste_des_codes_HTTP
    }

};

exports.update = async (req, res) => {
    //TODO update channel
    //Poser l'algo par écrit avant (ACD)

    const {body} = req;
    const channelId = req.params.channelId;
    const messageId = req.params.messageId;

    const messages = await updateMessage(channelId, messageId, body);
    
    if(! messages) 
    {
        return res.status(400).json('Error : content required.');
    }
    else if(messages == "error") 
    {
        return res.status(400).json("Error : specified channel is not known");
    }
    else
    {
        return res.status(200).json(messages);
    }
};

exports.delete = async (req, res) => {
    
    const channelId = req.params.channelId;
    const messageId = req.params.messageId;
    const messages = await deleteMessage(channelId, messageId);

    console.log(messages);

    if(! messages) {
        return res.status(400).json('Error : deletion failed');
    }
    else if(messages == "error") {
        return res.status(400).json("Error : specified user is not known");
    }
    else{
        return res.status(200).json("User successfully deleted");
    }

};
