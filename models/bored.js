var mongoose = require("mongoose");
// bringing in the schema class
var Schema = mongoose.Schema;

var bored = new Schema({
    interests: {
        type: String,
    },
    zipCode: {
        type: Number,
        unique: true,
        required: true,
        validate: [
            function(input) {
                return input.length = 5;
            },
            "Put an actual zip-code in smart-ass!!"
        ]
    }
});