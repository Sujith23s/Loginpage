const express = require("express");
const app = express();
const { engine } = require("express-handlebars");
const path = require("path");
const useRoutes = require("./routes/user");

app.engine("hbs", engine({extname: "hbs", defaultLayout:false}))
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended: true}));
app.use(useRoutes);


app.listen(9000, function(){
    console.log("Running..");
});