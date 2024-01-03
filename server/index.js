const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const controller = require('./controller')

app.get("/api/compliment", controller.getCompliment);
app.get("/api/fortune", controller.getFortune);
app.get("/api/lucky", (req, res) => {
    const number = req.query.number;
    res.send(`Lucky Number, ${number}`);
});
app.get("/api/baby/:babyID", (req, res) => {
    const babyID = req.params.babyID;
    res.sendFile('index.html', {root: __dirname});
});
app.post("/api/food", (req, res) => {
    const favFood = req.body.favFood;
    console.log()
    res.send(`Favorite food is ${favFood}.`)
})
app.listen(4000, () => console.log("Server running on 4000"));
