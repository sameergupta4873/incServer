const app = require("./app");

const dotenv = require("dotenv");
const connectDatabase = require("./config/database")

dotenv.config({path:"server/config/config.env"})


connectDatabase();

app.listen(4000,()=>{
  console.log("Server working on http://localhost:",process.env.PORT)
})