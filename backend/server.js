const app = require("./src/app");
const connectToDb = require("./src/config/database.js");

//thudi i dthr 

app.listen(3000, ()=>{
  console.log("server is listening");
  connectToDb()
  
})