import express from "express";
import timeRoutes from "./routes/timeRoutes";
import userRoutes from "./routes/userRoutes";
import eventRoutes from "./routes/eventRoutes";

const app = express();
app.use((express as any).bodyParser());

app.use("/time", timeRoutes);
app.use("/users", userRoutes);
app.use("/events", eventRoutes);

app.listen(3000, () => console.log("🚀 Server running on port 3000"));
