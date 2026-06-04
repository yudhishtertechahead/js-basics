const jsonPlaceholderService = require('../services/jsonplaceholder.service');

const getTodos = async (req, res) => {
  try {
    const data = await jsonPlaceholderService.getCompletedTodos();
    res.json({
      success: true,
      message: 'Todos fetched successfully',
      data
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const data = await jsonPlaceholderService.getUsersSimultaneously();
    res.json({
      success: true,
      message: 'Users fetched successfully',
      data
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const getPosts = async (req, res) => {
  try {
    const data = await jsonPlaceholderService.getPaginatedPosts();
    res.json({
      success: true,
      message: 'Posts fetched successfully',
      data
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
  getTodos,
  getUsers,
  getPosts
};
