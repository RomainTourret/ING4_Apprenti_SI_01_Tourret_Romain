const {
    listAllChannels,
    createNewChannel,
    showChannel,
    updateChannel,
    deleteChannel,
} = require('../models/channel');

exports.index = async (req, res) => {
    const channels = await listAllChannels();

    return res.status(200).json(channels);
};

exports.create = async (req, res) => {
    const {body} = req; //on destructure req pour récuperer le body

    const channel = await createNewChannel(body);

    if(! channel) 
    {
        return res.status(400).json({
            name: 'Name required'
        });
    }

    return res.status(201).json(channel); //Code 201 pour une création : https://fr.wikipedia.org/wiki/Liste_des_codes_HTTP
};

exports.show = async (req, res) => {

    
    const channelId = req.params.channelId;

    const channel = await showChannel(channelId);

    if(channel == "error") 
    {
        return res.status(400).json("Error : specified channel is not known");
    }
    else
    {
        return res.status(200).json(channel);
    }
};

exports.update = async (req, res) => {
    //TODO update channel
    //Poser l'algo par écrit avant (ACD)

    const {body} = req;
    
    const channelId = req.params.channelId;

    const channel = await updateChannel(channelId, body);
    if(! channel) 
    {
        return res.status(400).json('Error : name required');
    }
    else if(channel == "error") 
    {
        return res.status(400).json("Error : specified channel is not known");
    }
    else
    {
        return res.status(200).json(channel);
    }
    //updateChannel
};

exports.delete = async (req, res) => {
    //TODO delete channel

    const channelId = req.params.channelId;
    const channel = await deleteChannel(channelId);

    if(channel == "error") 
    {
        return res.status(400).json('Error : deletion failed');
    }
    else if(channel == "errorID") 
    {
        return res.status(400).json("Error :specified channel is not known");
    }
    else
    {
        return res.status(200).json("Channel's deletion successful");
    }

};
