const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/fruitsDB", {useNewUrlParser : true});

const fruitSchema = new mongoose.Schema({
    name : String,
    rating : Number,
    review : String

})

const Fruit = mongoose.model("Fruit", fruitSchema);

const apple = new Fruit({
    name : "Apple",
    rating : 8,
    review : "keeps the doctor away"
})

const kiwi = new Fruit({
    name : "Kiwi",
    rating : 6,
    review : "Theyre okayish"
})

const banana = new Fruit({
    name : "Banana",
    rating : 5,
    review : "They give energy"
})

// Fruit.insertMany([apple, kiwi, banana], function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("success");
//     }
// })

Fruit.find(function(err, fruit){
    if(err){
        console.log(err);
    }
    else{
        
        mongoose.connection.close();

        fruit.forEach(function(singleFruit){
            console.log(singleFruit.name);
        })
        
    }
})


const personSchema = new mongoose.Schema({
    name : String,
    age : Number
})

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name : "Samarth",
    age : 20
})

//person.save();




// fruit.save();

