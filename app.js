// script ini untuk menjalankan server.

// begin: import modules
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const indexRouter = require('./routes/index');
const authRouter = require('./routes/auth');
const memberRouter = require('./routes/member');
// end: import modules

// inisialisasi express
const app = express();

// gunakan template engine EJS
app.set('view engine', 'ejs');

// gunakan body parser dari express
app.use(express.urlencoded({ extended: true }));

// gunakan cookie parser
app.use(cookieParser());

// buat middleware untuk session
app.use(session({
    secret: 'qweqweqweqwe',
    resave: false,
    saveUninitialized: false
}));

// jadikan folder public sebagai folder statis
app.use('/public', express.static(__dirname + '/public'));

// assign routes. parameter pertama adalah prefix path nya
app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/member', memberRouter);

// jalankan server di port 3000
app.listen(3000, () => {
    mongoose.connect('mongodb://127.0.0.1:27017/myloginrole1');
    console.log('Server berjalan di port 3000.');
});