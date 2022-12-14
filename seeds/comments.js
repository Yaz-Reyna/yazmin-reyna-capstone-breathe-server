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
    comment: "I absolutely love the breathing exercises on this page. They really help me to relax and calm my mind.",
    date: '2022-11-15'
    },
    {
    id: 2, 
    name: 'Juan Martinez', 
    comment: "The jokes on this page always make me smile, even on my most stressful days. Keep up the good work!",
    date: '2022-12-10'
    },
    {
      id: 3, 
      name: 'Lucy Doe', 
      comment: "TThe words of encouragement on this page always give me the boost I need to start my day off on the right foot. Thank you for creating this page.",
      date: '2022-12-10'
      }
    
  ]);
};
