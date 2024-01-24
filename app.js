const express = require("express")
const app = express();
const port = 3000;
const path = require("path")
const { v4: uuidv4 } = require('uuid');
const methodOverride = require("method-override");
const router = require("./routes/function")

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

app.use(express.static(path.join(__dirname, "public")))


app.use("/posts", router);

app.listen(port, () => {
    console.log(`Port is lisning on ${port}`)
})
