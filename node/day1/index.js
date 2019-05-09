const express = require("express");
const app = express();
const users = require("./users");

    //console.log(users);

    function getAllUsers(){
        return users;
        

    function getUser(id){
        const user = users.find(user => user.id ===
            id);
    }
    }

    function getUserByEmail(){
        const user = user.find(user => user.email ===
            email);

    }

    function getGoogleUsers(){
        return users.filter(user => user.email.includes("google"));

    }
 
    //console.log(getAllUsers)

    app.get("/api/users", (request, response) => {
        if (request.query.email){
            const filteredUsers = users.filter(user => user.email.includes(reques.query.email) &&
            user);

        response.json(users);
    });

    // app.get("/api/users/:id", (request, response) => {
    //     console.log(request.params);
    //     const user = users.find(user => user.id ===
    //         +request.params.id);
    //         response.json(user);
    // });

    app.get("/api/users/:email", (request, response) => {
        console.log(request.params);
        const user = users.find(user => user.email ===
            request.params.email);
            response.json(user);
    });

   


    app.listen(5050, () => console.log('Listening on 5050'));