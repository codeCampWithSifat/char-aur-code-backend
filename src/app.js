import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// use all the middleware
// app.use(express.json());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json({ limit: "20kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static("public"));

// testing Route
app.get("/test", (req, res) => {
  res.send("Hello Testing Route");
});

// routes import
import userRouter from "./routes/user.routes.js";

app.use("/api/v1/users", userRouter);

export { app };
