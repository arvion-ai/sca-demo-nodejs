import express from "express";
import bodyParser from "body-parser";
import timeRoutes from "./routes/timeRoutes";
import userRoutes from "./routes/userRoutes";
import eventRoutes from "./routes/eventRoutes";

const app = express();
app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies

app.use("/time", timeRoutes);
app.use("/users", userRoutes);
app.use("/events", eventRoutes);

app.listen(3000, () => console.log("🚀 Server running on port 3000"));
