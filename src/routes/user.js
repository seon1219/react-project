const express = require("express");
const db = require("../../database");
const router = express.Router();

router.post("/login", async (req, res) => {
  const { id, pw } = req.body;
  const query = `SELECT COUNT(*) as cnt FROM R_USER WHERE ADMIN_ID = ? AND PASSWORD = ?`;
  const [result] = await db.query(query, [id, pw]);
  console.log(result[0].cnt);
  if (result[0].cnt > 0) {
    res.status(200).json({ success: true });
  } else {
    res.status(200).json({ success: false });
  }
  req.sess;
});

module.exports = router;
