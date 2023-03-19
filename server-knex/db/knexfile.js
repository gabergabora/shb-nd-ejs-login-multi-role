// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
    development: {
        client: "mysql2",
        connection: {
            host: "127.0.0.1",
            port: 3306,
            user: "root",
            password: "",
            database: "shb-nd-ejs-login-1",
        },
        migrations: {
            tableName: "knex_migrations",
        },
    },

    staging: {
        client: "mysql2",
        connection: {
            host: "127.0.0.1",
            port: 3306,
            user: "root",
            password: "",
            database: "shb-nd-ejs-login-1",
        },
        migrations: {
            tableName: "knex_migrations",
        },
    },

    production: {
        client: "mysql2",
        connection: {
            host: "127.0.0.1",
            port: 3306,
            user: "root",
            password: "",
            database: "shb-nd-ejs-login-1",
        },
        migrations: {
            tableName: "knex_migrations",
        },
    },
};
