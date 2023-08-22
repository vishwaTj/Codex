import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import colors from "colors";
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const app = express();
dotenv.config();
const port = 3000;
const connectDB = require("./config/db");

console.log(process.env.PORT);

interface Error {
  name: string;
  message: string;
  stack?: string;
}

connectDB();

app.use(cors());
app.use(express.json());
app.use("/api", require("./Routes/User"));

app.use(notFound);
app.use(errorHandler);

app.listen(port, (err?: Error) => {
  if (err) {
    console.log(`Error connecting to the port ${err}`);
  }
  console.log(`Server up and running on port : ${port}`);
});
