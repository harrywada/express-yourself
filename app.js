const http = require("http");
const path = require("path");
const express = require("express");

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", function(req, res, next){
  res.render("index.ejs", {
    name: "Harry Wada",
    img: "./img/profile.jpg",
    skills: [
      "HTML",
      "CSS",
      "Javascript",
      "PHP",
      "Java"
    ],
    hobbies: [
      "Coding",
      "League of Legends",
      "Biking"
    ]
  });
});
app.use(express.static("public"));

const port = 3000;
http.createServer(app).listen(port);
console.log(`Server listening on port: ${port}`);
