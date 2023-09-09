const path = require("path");
const express = require("express");
const app = express();

// static pages
app.use(express.static(path.join(__dirname, "/public")));

// home route
app.get("", (req, res) => {
  res.send("Hello From Ruby Restaurant");
});

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});
