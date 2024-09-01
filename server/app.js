require("dotenv").config();
const express = require("express");
const app = express();

const port = process.env.port || 8080;

app.use(express.static("client"));
app.get("/", (req, res) => {
    res.render("index")
});

app.use(require("./routes/api"));

app.listen(port, () => {
    console.log(`now listening to ${port}`);
});

// npm run dev