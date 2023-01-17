const mongoose = require("mongoose")

const countSchema = mongoose.Schema(
    {
        count:{
            type:Number,
            required: true,
        }
    }
)

const Count = mongoose.model("Count", countSchema);
module.exports = Count