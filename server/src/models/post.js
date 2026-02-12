const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    url:String,
    caption:String,
})

const post = mongoose.model("post",postSchema);

module.exports = post