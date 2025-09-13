import express from "express";
import { getCurrentTime, convertTimeToZone } from "../services/timeService";

const router = express.Router();

// Route to get current time
router.get("/now", (req, res) => {
  res.json({ time: getCurrentTime() });
});

// Route to convert time from one timezone to another
router.get("/convert", (req, res) => {
  const { time, fromTz, toTz } = req.query;
  if (!time || !fromTz || !toTz) {
    return res.status(400).json({ error: "Missing parameters" });
  }
  res.json({
    convertedTime: convertTimeToZone(
      time as string,
      fromTz as string,
      toTz as string,
    ),
  });
});

export default router;
