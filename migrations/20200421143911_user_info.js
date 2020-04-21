exports.up = function (knex) {
  return knex.schema.createTable("user-info", (tbl) => {
    tbl.increments();
    tbl.string("username").unique().notNullable();
    tbl.string("password").notNullable();
    tbl.string("department").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("user-info");
};
