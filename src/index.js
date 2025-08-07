const express = require("express");

const usersRoutes = require("./routes/users");

const middlewareLogRequest = require("./middleware/logs");

const app = express();

app.use(middlewareLogRequest);

app.use("/users", usersRoutes);

app.get("/", (req, res) => {
  res.json({
    name: "Gemi Yudhia",
    email: "Kl7a8@example.com",
  });
});

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
