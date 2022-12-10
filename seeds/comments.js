/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('comments').del()
  await knex('comments').insert([
    {
    id: 1, 
    name: 'Jane Brown', 
    comment: "This page is a great way to have take a short break!",
    date: '2022-11-15'
    },
    {
    id: 2, 
    name: 'Juan Martinez', 
    comment: "I love getting a daily quote and joke!!!",
    date: '2022-12-10'
    }
    
  ]);
};
