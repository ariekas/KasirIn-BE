const userService = require("../services/user");

exports.getAllUser = async (req, res) => {
    try {
        const users = await userService.getAll();
      
        res.status(200).json({
          message: "success get all users",
          data: users,
        });
    } catch (error) {
        console.error('Error getting user:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

exports.createUser = async (req, res) => {
  try {
    const newUser = await userService.create(req.body);

    res.status(200).json({
      message: "User created successfully",
      data: newUser,
    });
  } catch (error) {
    if (
        error.message === 'This username already exist' ||
        error.message === 'This email already exist'
    ) {
        return res.status(400).json({ message: error.message });
    }

    console.error('Error creating user:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

exports.deleteUser = async (req, res) => {
    try {
        const deleteUser = await userService.delete(req.params.id);

        res.status(200).json({
          message: "User deleted successfully",
          data: deleteUser,
        });
    } catch (error) {
        if (
            error.message === `User with id ${req.params.id} not found`
        ) {
            return res.status(400).json({ message: error.message });
        }
    
        console.error('Error deleting user:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};
