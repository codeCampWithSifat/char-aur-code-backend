import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: ".env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Listening To The Port ${process.env.PORT}`);
      app.on("error", (error) => {
        console.log("ERRR: ", error);
        throw error;
      });
    });
  })
  .catch((error) => {
    console.log(`Mongodb connected failed 👀👀👀`, error);
  });
