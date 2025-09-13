import express from "express";
import { getUserLocalTime } from "../services/timeService";

const router = express.Router(); // Use `express.Router()` in Express 4.x

// Route to get user local time based on their timezone
router.get("/:id/timezone", (req, res) => {
  const userId = parseInt(req.params.id);
  const { timezone } = req.query;

  if (!timezone) {
    return res.status(400).json({ error: "Missing timezone parameter" });
  }

  res.json({ localTime: getUserLocalTime(userId, timezone as string) });
});

export default router;
