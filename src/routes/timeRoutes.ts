import express from "express";
import { getCurrentTime, convertTimeToZone } from "../services/timeService";

const app = express.Router(); // Express 3.x doesn't have Router()

// Route to get current time
app.get("/now", (req, res) => {
  res.json({ time: getCurrentTime() });
});

// Route to convert time from one timezone to another
app.get("/convert", (req, res) => {
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

export default app;
