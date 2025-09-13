import express from "express";
import { getUserLocalTime } from "../services/timeService";

const app = express.Router(); // Use `app` directly instead of `express.Router()`

// Route to get user local time based on their timezone
app.get("/:id/timezone", (req, res) => {
  const userId = parseInt(req.params.id);
  const { timezone } = req.query;

  if (!timezone) {
    return res.status(400).json({ error: "Missing timezone parameter" });
  }

  res.json({ localTime: getUserLocalTime(userId, timezone as string) });
});

export default app;
