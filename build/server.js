import express from "express";
const app = express();
app.get("/ads", (req, res) => {
  return res.json([
    { id: 1, name: "Jhon" },
    { id: 2, name: "Juli" },
    { id: 3, name: "Maria" },
  ]);
});
app.listen(3333);
