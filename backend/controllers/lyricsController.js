const db = require("../db");

exports.getLyrics = async (req, res) => {
  const { title } = req.query;

  if (!title) {
    return res.status(400).json({ error: "Missing title" });
  }

  try {
    const [rows] = await db.query(
      "SELECT * FROM lyrics WHERE title = ?",
      [title]
    );

    if (rows.length === 0) {
      return res.status(404).json({ error: "Lyrics not found" });
    }

    res.status(200).json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};
