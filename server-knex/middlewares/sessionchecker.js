// script ini untuk middleware.

// begin: import modules
const knex = require("../db/connection");
// end: import modules

// untuk mengecek apakah sudah login.
module.exports.loggedInCheck = (req, res, next) => {
    if (req.session.isLoggedIn) {
        return res.redirect("/member");
    }
    next();
};

// untuk mengecek role.
module.exports.authCheck = (roles) => {
    return async (req, res, next) => {
        const testLoggedIn = req.session.isLoggedIn;

        if (testLoggedIn) {
            const testRole = req.session.user.role_id;

            // cek nama role di database
            const loginUserRoles = await knex("roles").where({ id: testRole });
            const loginUserRolesTest = loginUserRoles[0].name;

            // jika role ada
            if (roles.includes(loginUserRolesTest)) {
                next();
            } else {
                res.redirect("/member");
            }
        } else {
            res.redirect("/");
        }
    };
};
