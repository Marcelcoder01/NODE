const express = require("express");
const cors = require("cors");
const userRouter = require("./routers/user.routers");
const errorHandling = require ("./error/errorHandling");
const bookRouter = require("./routers/book.routers");

const app = express();



app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(userRouter);
app.use(bookRouter)
app.use((req, res, next)=>{
    res.status(404).json({
        error:true,
        codigo:404,
        mensaje:"Endpoint no encontrado"
    })
})

app.use(errorHandling);

module.exports = app;
