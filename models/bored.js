var mongoose = require("mongoose");
// bringing in the schema class
var Schema = mongoose.Schema;

var bored = new Schema({
    hobbies: {
        type: String
    },
    activities:{
        type: String
    }
});