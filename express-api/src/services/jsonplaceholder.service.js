const { fetchWithRetry } = require('../utils/fetchWithRetry');

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const getCompletedTodos = async (userId = 1) => {
  console.log(`--- Fetching Todos for User ${userId} ---`);
  try {
    const todos = await fetchWithRetry(`${BASE_URL}/todos?userId=${userId}`);
    const completedTodos = todos.filter(todo => todo.completed);
    console.log(`Total todos fetched: ${todos.length}`);
    console.log(`Completed todos: ${completedTodos.length}`);
    return { total: todos.length, completed: completedTodos.length, todos };
  } catch (error) {
    console.error('Error in getCompletedTodos:', error);
    throw error;
  }
};

const getUsersSimultaneously = async () => {
  console.log('--- Fetching Users 1, 2, 3 Simultaneously ---');
  try {
    const userPromises = [
      fetchWithRetry(`${BASE_URL}/users/1`),
      fetchWithRetry(`${BASE_URL}/users/2`),
      fetchWithRetry(`${BASE_URL}/users/3`)
    ];

    const users = await Promise.all(userPromises);
    const result = users.map(user => ({
      name: user.name,
      company: user.company.name
    }));

    return result;
  } catch (error) {
    console.error('Error in getUsersSimultaneously:', error);
    throw error;
  }
};

const getPaginatedPosts = async (page = 1, limit = 10) => {
  console.log(`--- Fetching Paginated Posts (Page ${page}, Limit ${limit}) ---`);
  try {
    const posts = await fetchWithRetry(`${BASE_URL}/posts?_page=${page}&_limit=${limit}`);
    console.log(`Successfully fetched ${posts.length} posts for page ${page}.`);
    return posts;
  } catch (error) {
    console.error('Error in getPaginatedPosts:', error);
    throw error;
  }
};

module.exports = {
  getCompletedTodos,
  getUsersSimultaneously,
  getPaginatedPosts
};
