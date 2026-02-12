const express = require("express")
const connectDB = require("./src/config/db")
const multer = require("multer")
const uploadImage = require("./src/services/cloud")
const postModel = require("./src/models/post")
const cors = require("cors");

const app = express();

app.use(cors({
  origin: "http://localhost:5173"
}));

connectDB()

const upload = multer({storage: multer.memoryStorage()});

app.post("/post-img", upload.single("image"), async(req,res) => {

    const buffer = req.file.buffer
    const caption = req.body.caption

    const imageURL = await uploadImage(buffer);

    postModel.create({
        url:imageURL,
        caption:caption
    })

    res.status(201).json({
        message:"Image Uploaded",
        url:imageURL,
        caption:caption
    })
} )

app.get("/posts", async(req,res) => {

    const posts = await postModel.find({});

    res.json({
        posts:posts
    })
})

module.exports = app