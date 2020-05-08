
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
  
      table.increments(); //Chave primária auto incremental
  
      table.string('title').notNullable(); //Elemento da Tabela INCIDENTS
      table.string('description').notNullable(); //Elemento da Tabela INCIDENTS
      table.decimal('value').notNullable(); //Elemento da Tabela INCIDENTS
  
      table.string('ong_id').notNullable(); //Elemento de Relacionamento
  
      //Toda vez que o elemento 'ong_id' estiver preenchido deve ser de uma ONG cadastrada
      table.foreign('ong_id').references('id').inTable('ongs'); //Chave estrangeira
  
    });
};
  
exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};
