const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/fruitsDB", {useNewUrlParser : true});

const fruitSchema = new mongoose.Schema({
    name : String,
    rating : Number,
    review : String

})

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    name : "Apple",
    rating : 8,
    review : "keeps the doctor away"
})

// fruit.save();

