import express from "express";
const app = express();
const port = 3000;
const connectDB = require("./config/db");

interface Error {
  name: string;
  message: string;
  stack?: string;
}

connectDB();

app.use("/api", require("./Routes/User"));

app.listen(port, (err?: Error) => {
  if (err) {
    console.log(`Error connecting to the port ${err}`);
  }
  console.log(`Server up and running on port : ${port}`);
});
