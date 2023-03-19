// script ini untuk menangani route member.

// import modul express
const express = require("express");

// import middleware
const sessionChecker = require("../middlewares/sessionchecker");

// buat routernya
const router = express.Router();

// menggunakan middleware tadi, dicek role nya. jika valid maka diteruskan.
// yang valid adalah Administrator, Member Level 1, dan Member Level 2
router.get(
    "/",
    sessionChecker.authCheck([
        "Administrator",
        "Member Level 1",
        "Member Level 2",
    ]),
    async (req, res, next) => {
        res.render("member", {
            username: req.session.user.username,
        });
    }
);

// menggunakan middleware tadi, dicek role nya. jika valid maka diteruskan.
// yang valid adalah Administrator dan Member Level 1
router.get(
    "/for-member-level-1",
    sessionChecker.authCheck(["Administrator", "Member Level 1"]),
    async (req, res, next) => {
        res.render("member-level-1-only", {
            username: req.session.user.username,
        });
    }
);

// menggunakan middleware tadi, dicek role nya. jika valid maka diteruskan.
// yang valid adalah Administrator dan Member Level 2
router.get(
    "/for-member-level-2",
    sessionChecker.authCheck(["Administrator", "Member Level 2"]),
    async (req, res, next) => {
        res.render("member-level-2-only", {
            username: req.session.user.username,
        });
    }
);

module.exports = router;
