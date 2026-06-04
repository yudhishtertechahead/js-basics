const jsonPlaceholderService = require('../services/jsonplaceholder.service');

const getTodos = async (req, res) => {
  try {
    const userId = req.query.userId || 1;
    const data = await jsonPlaceholderService.getCompletedTodos(userId);
    res.json({
      success: true,
      message: `Todos fetched successfully for user ${userId}`,
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
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const data = await jsonPlaceholderService.getPaginatedPosts(page, limit);
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
