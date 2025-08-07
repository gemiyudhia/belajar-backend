const getAllUsers = (req, res) => {
  const data = {
    id: 1,
    name: "Gemi Yudhia",
    email: "5tZVH@example.com",
    address: "Aceh Barat",
  };

  res.json({
    message: "GET users success",
    data: data,
  });
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

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
};
