import express from "express";
const app = express();
const port = 3000;

interface Error {
  name: string;
  message: string;
  stack?: string;
}

app.listen(port, (err?: Error) => {
  if (err) {
    console.log(`Error connecting to the port ${err}`);
  }
  console.log(`Server up and running on port : ${port}`);
});
