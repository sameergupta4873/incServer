const bcrypt = require("bcryptjs")
const users = [
    {name: "admin" , email: "admin@strall.com" , password:bcrypt.hashSync('123456' ,10 )  , isAdmin:true},
    {name : "sameer gupta" , email : "sameer@strall.com" , password:bcrypt.hashSync('123456', 10)},
    {name : "user" , email : "user@user.com" , password:bcrypt.hashSync('123456', 10)},
    {name : "user1",email : "user1@user.com" , password:bcrypt.hashSync('123456',10)}
]

module.exports = users