const express = require("express");
const app = express();

// middleware
const timer = (req, res, next) => {
  var today = new Date();
  var n = today.getDay();
  var time = today.getHours() * 100 + today.getMinutes();

  if (n >= 1 && n <= 5 && time >= 900 && time <= 1700) {
    return next();
  } else res.send("Sorry! Come back during our work hours!");
};

app.use(timer);
app.use(express.static("public"));

const port = 5000;
app.listen(port, () => console.log(`server running on port ${port}`));
