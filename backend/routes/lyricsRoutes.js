const express = require("express");
const router = express.Router();
const { getLyrics } = require("../controllers/lyricsController");

/**
 * @swagger
 * /lyrics:
 *   get:
 *     summary: Get lyrics by title
 *     parameters:
 *       - in: query
 *         name: title
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lyrics found
 *       404:
 *         description: Not found
 */
router.get("/lyrics", getLyrics);

module.exports = router;
