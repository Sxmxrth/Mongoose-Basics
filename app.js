//COMPLETE CRUD WITH MONGOOSE
const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/fruitsDB", {useNewUrlParser : true});

//creation of schema
const fruitSchema = new mongoose.Schema({
    name : String,
    rating : Number,
    review : String

})

//creation of collection
const Fruit = mongoose.model("Fruit", fruitSchema);


//creation of document(single entry)
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

//update operation
Fruit.updateOne({_id : "636b2ae17925aeeb856d0f49"}, {name : "Peach"}, function(err){
    err ? console.log(err) : console.log("successfully updated");
})

//delete operation
Fruit.deleteOne({_id : "636b2ae17925aeeb856d0f4a"}, function(err){
    err ? console.log(err) : console.log("successfully deleted kiwi");
})

//read operation
Fruit.find(function(err, fruit){
    if(err){
        console.log(err);
    }
    else{
        
        // mongoose.connection.close();

        fruit.forEach(function(singleFruit){
            console.log(singleFruit.name);
        })
        
    }
})


const personSchema = new mongoose.Schema({
    name : String,
    age : Number,
    favouriteFruit : fruitSchema
})

const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name : "Samarth",
    age : 20
})

person.updateOne({name : "Samarth"}, {favouriteFruit : banana}, function(err){
    err ? console.log(err) : console.log("successfully updated");
})

person.save();




// fruit.save();

