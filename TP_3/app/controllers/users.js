const {
    listAllUsers,
    createNewUser,
    showUserInfo,
    updateUserInfo,
    deleteUser,
} = require('../models/users');

exports.index = async (req, res) => {
    const users = await listAllUsers();
    return res.status(200).json(users);
};

exports.create = async (req, res) => {
    const {body} = req; //on destructure req pour récuperer le body
    const user = await createNewUser(body);

    if(! user) 
    {
        return res.status(400).json('Name, email or password required.');
    }

    return res.status(201).json(user); //Code 201 pour une création : https://fr.wikipedia.org/wiki/Liste_des_codes_HTTP
};

exports.show = async (req, res) => {

    
    const userId = req.params.userId;
    const user = await showUserInfo(userId);

    if(user == "error")
    {
        return res.status(400).json("Error : specified user is unknown");

    }

    return res.status(200).json(user); //je n'ai pas blindé volontairement channel, à vous de le faire ;)
};

exports.update = async (req, res) => {
    //TODO update channel
    //Poser l'algo par écrit avant (ACD)

    const {body} = req;
    const userId = req.params.userId;

    const user = await updateUserInfo(userId, body);
    
    if(! user) 
    {
        return res.status(400).json('Error : name required.');
    }
    else if(user == "error") 
    {
        return res.status(400).json("Error : specified user is unknown");
    }
    else
    {
        return res.status(200).json(user);
    }
};

exports.delete = async (req, res) => {

    const userId = req.params.userId;
    const user = await deleteUser(userId);

    console.log(user);

    if(user == "error") 
    {
        return res.status(400).json('Error : deletion failed');
    }
    else if(user == "errorID") 
    {
        return res.status(400).json("Error : specified user is unknown");
    }
    else
    {
        return res.status(200).json("User successfully deleted");
    }

};
