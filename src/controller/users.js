const getAllUsers = (req, res) => {
  res.json({
    message: "GET users success",
  });
};

const createNewUser = (req, res) => {
  console.log(req.body);
  res.json({
    message: "CREATE new user success",
    body: req.body,
  });
};

module.exports = {
  getAllUsers,
  createNewUser,
};
