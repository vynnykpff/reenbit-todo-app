import mongoose from "mongoose";
import "module-alias/register";
import "dotenv/config";
import { app } from "./app";
import { validateEnv } from "@utils";

const { MONGO_URI, PORT } = validateEnv();

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Mongoose connected");

    app.listen(PORT, () => {
      console.log("Server is running on port " + PORT + "...");
    });
  })
  .catch(console.error);
