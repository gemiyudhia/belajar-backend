const UsersModel = require("../models/users");

const getAllUsers = async (req, res) => {
  try {
    const [data] = await UsersModel.getAllUsers();

    res.json({
      message: "GET users success",
      data: data,
    });
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: err,
    });
  }
};

const createNewUser = (req, res) => {
  console.log(req.body);
  res.json({
    message: "CREATE new user success",
    data: req.body,
  });
};

const updateUser = (req, res) => {
  const { id } = req.params;
  console.log("UPDATE user with id: ", id);
  res.json({
    message: "UPDATE user success",
    data: req.body,
  });
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  console.log("DELETE user with id: ", id);
  res.json({
    message: "DELETE user success",
    data: {
      id: id,
      name: "Gemi Yudhia",
      email: "5tZVH@example.com",
      address: "Aceh Barat",
    },
  });
};

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};
