// script ini untuk menjalankan server.

// begin: import modules
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const url = require("url");
const indexRouter = require("./routes/index");
const authRouter = require("./routes/auth");
const memberRouter = require("./routes/member");
require("dotenv").config();
// end: import modules

// inisialisasi express
const app = express();

// gunakan template engine EJS
app.set("view engine", "ejs");

// gunakan body parser dari express
app.use(express.urlencoded({ extended: true }));

// gunakan cookie parser
app.use(cookieParser());

// buat middleware untuk session
app.use(
    session({
        secret: "qweqweqweqwe",
        resave: false,
        saveUninitialized: false,
    })
);

// jadikan folder public sebagai folder statis
app.use("/public", express.static(__dirname + "/public"));

// assign routes. parameter pertama adalah prefix path nya
app.use("/", indexRouter);
app.use("/auth", authRouter);
app.use("/member", memberRouter);

// koneksi ke mongoose.
if (process.env.MONGODB_URI) {
    mongoose
        .connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .catch((error) => {
            console.log(error);
        });
} else {
    throw new Error("Detail database tidak valid.");
}

mongoose.connection.on("error", (err) => {
    console.log(err);
});

// koneksi berhasil
mongoose.connection.on("connected", function () {
    // jalankan server
    const port = url.parse(process.env.BASE_URL).port | 3000;
    app.listen(port, function () {
        console.log(`server berjalan di port ${port}`);
    });
});
