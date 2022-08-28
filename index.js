require("dotenv").config();
const express = require("express");
const bodyParser = require('body-parser');
const morgan = require("morgan");
const { connectDb } = require("./db/connectDb");
const { errorHandleMdw } = require("./middlewares/errorHandleMdw");
const { notFoundMdw } = require("./middlewares/notFound");
const router = require('./router')

const port = process.env.PORT;
const app = express();
app.use(morgan('dev'))
app.use(express.json())
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static('/public'))

app.get('/',(req,res)=>{
    res.send('Sever is runing')
})

app.use('/api',router)

app.use(notFoundMdw)
app.use(errorHandleMdw)

connectDb()

app.listen(port, () => {
   console.log("App is runing at port " + port);
});
