const express = require("express");
const path = require("path");
const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, "public")));

app.post("/api/v1/quiz", function(req,res){
    const answer = req.body.answer;
    if(answer === "2"){
        res.redirect("/correct.html");
    } else {
        res.redirect("/wrong.html");
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);
