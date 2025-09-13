import express from "express";
import { scheduleEvent, listEvents } from "../services/eventService";

const app = express.Router(); // Use `app` directly in Express 3.x

// Route to schedule an event
app.post("/schedule", (req, res) => {
  const { name, date, timezone } = req.body;
  if (!name || !date || !timezone) {
    return res.status(400).json({ error: "Missing event details" });
  }

  res.json(scheduleEvent(name, date, timezone));
});

// Route to list all events
app.get("/", (req, res) => {
  res.json(listEvents());
});

export default app;
