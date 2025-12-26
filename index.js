const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/submit", (req, res) => {
  console.log("Данные от пользователя:", req.body);
  res.json({ ok: true });
});

app.get("/", (req, res) => {
  res.send("Server works");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server started on port", PORT);
});
