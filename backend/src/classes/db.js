"use strict";

import { config } from "dotenv";
import mongoose from "mongoose";

config();

function getConnectionString() {
  // const connectionUrl = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}`;
  const connectionUrl = process.env.DB_CONNECTION_STRING;
  return connectionUrl;
}

export async function dbConnect() {
  const databaseUri = getConnectionString();
  try {
    let db = await mongoose.connect(databaseUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("cannot connect with the DB", error);
    mongoose.disconnect();
    // setTimeout(dbConnect(), 5000);
  }
  return mongoose;
}
