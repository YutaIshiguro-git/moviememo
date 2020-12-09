exports.up = function (knex, Promise) {
    return knex.schema.alterTable("movie_lists", (table) => {
        table.timestamp('created_at').defaultTo(knex.fn.now());
    });
};

exports.down = function (knex, Promise) {};
