var express = require("express");
var app = express();
var reload = require("reload");

app.use(express.static(__dirname + '/public'));

app.use("/", (req, res, next) => {
    console.log(`${req.method} --> ${req.url}`);
    next();
})
app.get("/", (req, res) => {
    res.render("index", (err) => {
        if (err) {
            consol.log(err);
        }
    });

})
    .listen(9000);

reload(app);