const app = require("./src/app");
const connectToDb = require("./src/config/database.js");



app.listen(3000, (req, res)=>{
  console.log("server is listening");
  connectToDb()
  
})