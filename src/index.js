const express = require("express");
const mongoose = require("mongoose");
const dotEnv = require("dotenv");
const cors = require("cors");
const expressSession = require("express-session");

dotEnv.config();

const UserRouter = require("./routes/UserRouter");
const TaskRouter = require("./routes/TaskRouter");
const TruckRouter = require("./routes/TruckRouter");
const MaintenanceRouter = require("./routes/MaintenanceRouter");
const ReportIncidentRouter = require("./routes/ReportIncidentRouter");
const FuelConsumptionRouter = require("./routes/FuelConsumptionRouter");
const EmailRouter = require("./routes/EmailRouter");

const app = express();
app.use(express.json());

app.use(cors());

app.use(
  expressSession({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

//mongoose connection here
mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB);
    console.log("connected to mongoDb");
  } catch (error) {
    throw error;
  }
};

app.use("/api/user", UserRouter);
app.use("/api/task", TaskRouter);
app.use("/api/truck", TruckRouter);
app.use("/api/maintenance", MaintenanceRouter);
app.use("/api/report-incident", ReportIncidentRouter);
app.use("/api/fuel-consumption", FuelConsumptionRouter);
app.use("/api/email", EmailRouter);

const PORT = 5000;
app.listen(PORT, () => {
  connect();
  console.log(`server is listening to port ${PORT}`);
});
