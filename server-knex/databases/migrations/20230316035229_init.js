/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema
        .createTable("users", function (table) {
            table.increments("id");
            table.string("username", 1000).notNullable();
            table.string("email", 1000).notNullable();
            table.string("password", 1000).notNullable();
            table.integer("role_id").notNullable();
            table.timestamps(true, true);
        })
        .createTable("roles", function (table) {
            table.increments("id");
            table.string("name", 255).notNullable();
            table.timestamps(true, true);
        })
        .then(() =>
            knex("roles").insert([
                { name: "Administrator" },
                { name: "Member Level 1" },
                { name: "Member Level 2" },
            ])
        );
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable("roles").dropTable("users");
};
