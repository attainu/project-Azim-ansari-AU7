const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressValidator = require("express-validator");

require('dotenv').config();
//import routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');

//DATABASE=mongodb+srv://azim:EGG6RNO13e4t0F6Z@cluster0.bcbty.mongodb.net/ecommerce?retryWrites=true&w=majority
//EGG6RNO13e4t0F6Z is password
//app
const app = express();
//middlewares

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());

//routes middleware
app.use('/api',authRoutes);
app.use('/api',userRoutes);
app.use('/api',categoryRoutes);
app.use('/api',productRoutes);

//db
mongoose.connect(process.env.DATABASE ,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('Database connected yeah!!')
})


//port defined
const port = process.env.PORT || 8000

//Listen
app.listen(port , ()=>{
    console.log(`Server is running on port ${port}`)
})