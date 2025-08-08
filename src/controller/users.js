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

const createNewUser = async (req, res) => {
  const { body } = req;

  if (!body.name || !body.email || !body.address) {
    return res.status(400).json({
      message: "anda mengirimkan data yang salah",
      data: null,
    });
  }

  try {
    await UsersModel.createNewUser(body);
    res.status(201).json({
      message: "CREATE new user success",
      data: body,
    });
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: err,
    });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    await UsersModel.updateUser(body, id);
    res.status(200).json({
      message: "UPDATE user success",
      data: {
        id: id,
        ...body,
      },
    });
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: err,
    });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await UsersModel.deleteUser(id);
    res.json({
      message: "DELETE user success",
      data: null,
    });
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
      serverMessage: err,
    });
  }
};

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};
