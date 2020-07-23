const express = require('express');
const morgan = require("morgan");

const tourRouter = require('./routes/tourRouter');
const userRouter = require('./routes/userRouter');

const app = express();

// 1) MIDDLEWARES
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));

}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));


app.use((req,res,next)=>{
    console.log("hello from the middleware");
    next();
});

app.use((req,res,next)=>{
    req.requestTime = new Date().toISOString();
    next();
});

// 3) ROUTERS


app.use('/api/v1/tours',tourRouter);
app.use('/api/v1/users',userRouter);



module.exports = app;


