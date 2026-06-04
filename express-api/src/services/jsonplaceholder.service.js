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

const getPaginatedPosts = async () => {
  console.log('--- Fetching Paginated Posts (Pages 1 to 5) ---');
  const allPosts = [];
  try {
    for (let page = 1; page <= 5; page++) {
      console.log(`Fetching page ${page}...`);
      const posts = await fetchWithRetry(`${BASE_URL}/posts?_page=${page}&_limit=10`);
      console.log(posts);
      allPosts.push(...posts);
    }
    console.log(`Successfully fetched a total of ${allPosts.length} posts.`);
    return allPosts;
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
