
# ECE WebTech Chat

This is a chat application we wrote to learn the basics and the not so basics features of backend and frontend web programing. It leverages Node.js and React as well as complementary technologies such as unit testing with Mocha and Should.js, embeded storage with LevelDB, REST APIs.

## Dependencies :
-   body-parser : 1.19
-   cross-env   : 7.0.3
-   express     : 4.17.1
-   leveldb     : 6.0.1
-   nodemon     : 2.0.7
-   uuid        : 8.3.2
-   mocha       : 8.1.3
-   should      : 13.2.3
-   supertest   : 4.0.2


## Usage

Start the web application:

```bash
./bin/server.js 
Chat is waiting for you at http://localhost:8000
```

Run the tests with mocha:

```bash
npm run test
```

## To fool around :

### Use Postman in order to interact with the webapp.
#### Messages :
    - Creation :
    POST  http://localhost:8000/api/v1/$ChannelID
    ```bash
    {
        "channelID" = "$ChannelIDYouInterestedIn",
        "content" = "$TheContentWanted"
    }
    ```
    - Retrieve :
    GET  http://localhost:8000/api/v1/$ChannelID
    - Modification :
    PUT http://localhost:8000/api/v1/$ChannelID/$MessageID
    ```bash
    {
        "channelID" = "$ChannelIDYouInterestedIn",
        "MessageID" = "$MessageID",
         "content" = "$TheContentWanted"
    }
    ```
    - Deletion :
    DELETE http://localhost:8000/api/v1/$ChannelID/$MessageID


#### User :
    - Retrieve all users
    GET http://localhost:8000/api/v1/users
    - Retrieve one user
    GET http://localhost:8000/api/v1/$UserID
    - Create one user
    POST http://localhost:8000/api/v1/users
    ```bash
    {
        "name" = "$GiveHimAName",
        "email" = "$JustARegularMail",
        "password" = "$PlzNotAzerty12345"
    }
    ```
    - Change one user
    PUT http://localhost:8000/api/v1/$UserID
    ```bash
    {
        "name" = "$GiveHimAName",
        "email" = "$JustARegularMail",
        "password" = "$PlzNotAzerty12345"
    }
    ```
    - Delete one user
    DELETE http://localhost:8000/api/v1/$UserID


#### Channel :
    - Creation :
    POST http://localhost:8000/api/v1/channels/
    ```bash
    {
        "name" = "$TheNameYouWant"
    }
    ```
    - Modification :
    PUT http://localhost:8000/api/v1/channels/$TheChannelID
    ```bash
    {
        "name" = "$TheNewName"
    }
    ```
    - Deletion :
    DELETE  http://localhost:8000/api/v1/channels/$TheChannelID
    - Retrieve :
    GET http://localhost:8000/api/v1/channels/$TheChannelID
    - Retrieve all :
    GET http://localhost:8000/api/v1/channels/



### You can use URLs to directly check the app's content.
http://localhost:8000                           : Welcome page
http://localhost:8000/api/v1/users              : Check about the users
http://localhost:8000/api/v1/channels           : Check about the channels


## Thanks
- Thomas Desseaux : ami et soutien de la première heure