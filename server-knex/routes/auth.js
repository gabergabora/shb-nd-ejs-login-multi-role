// script ini untuk menangani auth.

// begin: import modules
const express = require("express");
const bcrypt = require("bcryptjs");
const sessionChecker = require("../middlewares/sessionchecker");
const knex = require("../db/connection");
// end: import modules

// buat router nya
const router = express.Router();

// handle request get "/login"
// di sini digunakan middleware loggedInCheck yang bisa anda lihat di folder middlewares
router.get("/login", sessionChecker.loggedInCheck, async (req, res, next) => {
    // render login.ejs. isi datanya dengan roles
    const roles = await knex("roles");

    res.render("login", {
        roles: roles.map((item) => item.name),
    });
});

// handle request post "/login"
router.post("/login", async (req, res, next) => {
    // bongkar request body, jadi email, password, dan role
    const { email, password, role } = req.body;

    // cari user yang email dan role nya...
    const loginUserRoles = await knex("roles").where({ name: role });
    const loginUserRoleId = loginUserRoles[0].id;

    const userGet = await knex("users").where({
        email: email,
        role_id: loginUserRoleId,
    });

    const user = userGet[0];

    // jika ada
    if (user) {
        // jika emailnya...
        if (user.email == email) {
            // test password
            if (bcrypt.compareSync(password, user.password) == true) {
                req.session.isLoggedIn = true;
                req.session.user = user;
                res.redirect("/member");
            } else {
                console.log("Password tidak match.");
                res.redirect("/auth/login");
            }
        } else {
            console.log("Email tidak match.");
            res.redirect("/auth/login");
        }
    } else {
        console.log("User tidak ditemukan.");
        res.redirect("/auth/login");
    }
});

// handle request get "/register"
router.get("/register", async (req, res, next) => {
    // render register.ejs, isi datanya dengan roles
    const roles = await knex("roles");

    res.render("register", {
        roles: roles.map((item) => item.name),
    });
});

// handle request post "/register"
router.post("/register", async (req, res, next) => {
    // bongkar request body dan dapatkan datanya
    const { username, email, password, password_repeat, role } = req.body;

    // begin: cek ke-valid-an akun
    const testUsername =
        (await knex("users").where({
            username: username,
        }).length) > 0;

    const testEmail =
        (await knex("users").where({
            email: email,
        }).length) > 0;

    const adminRoles = await knex("roles").where({ name: "Administrator" });
    console.log(adminRoles);
    const adminRoleId = adminRoles[0].id;

    const testAdmin =
        (await knex("users").where({
            role_id: adminRoleId,
        }).length) > 0;

    if (testAdmin && role == "Administrator") {
        console.log("Admin sudah didaftarkan. Tidak bisa lagi.");
        res.redirect("/auth/register");
        return;
    }

    if (testUsername || testEmail) {
        console.log("username atau email sudah ada.");
        res.redirect("/auth/register");
        return;
    }

    if (password != password_repeat) {
        console.log("password tidak match.");
        res.redirect("/auth/register");
        return;
    }

    // todo: cek role yang invalid

    // end: cek ke-valid-an akun

    // buat user baru
    const newUserRoles = await knex("roles").where({ name: role });
    const newUserRoleId = newUserRoles[0].id;
    const newUser = await knex("users").insert({
        username: username,
        email: email,
        password: bcrypt.hashSync(password, 12),
        role_id: newUserRoleId,
    });

    // redirect ke login page
    res.redirect("/auth/login");
});

// handle request "/logout"
router.get("/logout", async (req, res, next) => {
    req.session.destroy((err) => {
        res.redirect("/auth/login");
    });
});

module.exports = router;
