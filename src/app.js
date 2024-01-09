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

export { app };
