const mongoose = require("mongoose");

const solutionSchema = new mongoose.Schema({
    string: {
        type: String,
        required: true,
    },
})

const Solution = mongoose.model("solution", solutionSchema);
module.exports = Solution;