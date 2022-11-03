const express = require("express");
const mongoose = require("mongoose");
const route = require("./routes/route.js");
const app = express();
const port = 4000;

app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://group15_project:EDHBqxqKYJaki5EJ@cluster0.i9alz.mongodb.net/habuild_assignment_2", {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("MongoDb is connected"))
  .catch((err) => console.log(err));

app.use("/", route);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
