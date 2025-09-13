import express from "express";
import { scheduleEvent, listEvents } from "../services/eventService";

const router = express.Router(); // Use express.Router for modular routes in Express 4+

// Route to schedule an event
router.post("/schedule", (req, res) => {
  const { name, date, timezone } = req.body;
  if (!name || !date || !timezone) {
    return res.status(400).json({ error: "Missing event details" });
  }

  res.json(scheduleEvent(name, date, timezone));
});

// Route to list all events
router.get("/", (req, res) => {
  res.json(listEvents());
});

export default router;
