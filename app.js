import express from "express";
import morgan from "morgan";
import teacherRouter from "./routers/teacher.router.js";
import childRouter from "./routers/child.router.js";
import classRouter from "./routers/class.router.js";
const app = express();

// middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use("/teacher", teacherRouter);
app.use("/child", childRouter);
app.use("/class", classRouter);
app.use("/", (req, res) => {
  return res.status(404).json({ message: "Endpoint not found" });
});


app.use((error, req, res, next) => {
  console.log(error);
  return res
    .status(error.status || 500)
    .json(error.message || "Internal Server error");
});
export default app;
