const express = require("express");
const app = express();
const users = require("./users");



const PORT = 5050;
    app.get("/api/articles", (request, response) => {
        if (request.query.email){
            const filteredUsers = users.filter(user => user.email.includes(reques.query.email) &&
            user);

        response.json(users);
    };
    
   


app.listen(PORT, () => console.log('Listening on PORT'));