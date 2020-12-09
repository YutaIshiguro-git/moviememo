
exports.up = function(knex) {
    return knex.schema.createTable("movie_lists", (table) => {
        table.increments().index();
    
        table.text("title").notNullable();;
    
        table.text("URL");
    
      });
    
};

exports.down = function(knex) {
  
};
