const express = require('express')
const faker = require("faker")
const app = express();
const bodyparser = require("body-parser")

var users = [];
for(let i =0 ; i<5 ; i++){
    users.push({
        name : faker.name.findName(),
        email:faker.internet.email()
    })
 }

app.set('views', './views');
app.set("view engine" , 'ejs');
app.use(bodyparser.urlencoded({
    extended: false
}))

app.get("/", (req, res) =>{
    res.render("index" , {users})
})

app.get("/form", (req, res) =>{
    res.render("form")
})

app.post( "/user/add" , (req, res) =>{
    //console.log(req.query);
    users.push({
        name : req.body.name,
        email : req.body.email
    })
    res.redirect("/")
})

app.listen(3000,  () => console.log("server is listening"))
