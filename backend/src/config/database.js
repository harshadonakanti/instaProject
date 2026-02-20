const mongoose = require('mongoose');

async function connectToDb(){
  await mongoose.connect(process.env.MONGODB_URI)
  console.log("Db is connected");
  
}
module.exports= connectToDb
