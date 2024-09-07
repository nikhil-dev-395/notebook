import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";
configDotenv();
const app = express();
const port = process.env.PORT || 3000;

import connectDb from "./src/db/connect.db.js";
import { AuthRouter } from "./src/routes/auth.routes.js";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//  MIDDLEWARE


// ROUTE
app.use("/api/v1/auth", AuthRouter);


// server is starting from here ....
(async () => {
  try {
    await connectDb();
    await app.listen(port, () => console.log(`Server running on port ${port}`));
  } catch (error) {
    console.log("error occurred at starting server: " + error);
  }
})();
