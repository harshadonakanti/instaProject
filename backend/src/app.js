require('dotenv').config()
const express = require("express");
const cors = require('cors');
const cookieParser = require('cookie-parser');
const authRouter = require('./routes/auth.route.js');
const postRouter = require('./routes/post.route.js');
const userRouter = require('./routes/user.route.js');

const app = express();
app.use(express.json());
app.use(cookieParser())
app.use(cors({
  credentials:true,
  origin:"http://localhost:5173"
}))

/* using Routes */
app.use('/api/auth', authRouter)
app.use('/api/posts', postRouter)
app.use('/api/users', userRouter)


module.exports = app