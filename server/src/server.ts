import "module-alias/register";
import mongoose from "mongoose";
import { app } from "./app";
import { validateEnv } from "@utils";
import "dotenv/config";

const { MONGO_CONNECTION_STRING, PORT } = validateEnv();

mongoose
  .connect(MONGO_CONNECTION_STRING)
  .then(() => {
    console.log("Mongoose connected");

    app.listen(PORT, () => {
      console.log("Server is running on port " + PORT + "...");
    });
  })
  .catch(console.error);
