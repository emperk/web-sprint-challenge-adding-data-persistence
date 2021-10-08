const projects = [
  { project_name: 'Neuschwanstein Castle Charcoal Portrait', project_description: 'Large portait of the Neuschwanstein Castle in Germany done in charcoal for fun. Should take five business days.', project_completed: 0  },
  { project_name: 'Lake Coeur DAlene Beach Ink Portrait', project_description: 'Medium portrait of Lake Coeur DAlene on the beach with maybe a boat in the distance. For moms birthday. Should take a couple days', project_completed: 0 }
]

const resources = [
  { resource_name: 'Mechanical Pencil', resource_description: 'A fancy mechanical pencil' }, // 1
  { resource_name: 'Ink pen', resource_description: 'Basic ink pen' } // 2
]

const task_resources = [
  // Neuschwanstein
  { task_id: 1, resource_id: 1 },
  // Coeur D'Alene
  { task_id: 2, resource_id: 2 }
]

const tasks = [
  // Neuschwanstein
  { task_description: 'Light outline in pencil, then shade', task_notes: 'n/a', task_completed: 0, project_id: 1 },
  // Lake Coeur D'Alene
  { task_description: 'Light outline, then shading', task_notes: 'n/a', task_completed: 0, project_id: 2 }
]

exports.seed = async function (knex) {
  await knex('projects').insert(projects)
  await knex('resources').insert(resources)
  await knex('tasks').insert(tasks)
  await knex('task_resources').insert(task_resources)
}