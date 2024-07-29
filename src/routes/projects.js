const express = require("express");
const db = require("../../database");
const router = express.Router();

router.post("/addProject", async (req, res) => {
  const { title, detail } = req.body;
  const query = `INSERT INTO projects(title, detail) VALUES(?, ?)`;
  const [result] = await db.query(query, [title, detail]);
  if (result.affectedRows > 0) {
    res.status(200).json({ success: true });
  } else {
    res.status(200).json({ success: false });
  }
});

router.get("/getProjects", async (req, res) => {
  const query = `SELECT * FROM projects`;
  const [result] = await db.query(query, "");
  if (result) {
    res.status(200).json(result);
  }
});

router.post("/addStack", async (req, res) => {
  const { name, type } = req.body;
  const query = `INSERT INTO stacks(name, type) VALUES(?, ?)`;
  const [result] = await db.query(query, [name, type]);
  if (result.affectedRows > 0) {
    res.status(200).json({ success: true });
  } else {
    res.status(200).json({ success: false });
  }
});

router.get("/getStacks", async (req, res) => {
  const query = "SELECT * FROM stacks";
  const [result] = await db.query(query);
  if (result.length > 0) {
    res.status(200).json({ success: true, list: result });
  } else {
    res.status(200).json({ success: false });
  }
});

module.exports = router;
