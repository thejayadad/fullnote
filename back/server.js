
import express from "express";
import mongoose  from "mongoose";
import cors from "cors"
import dotenv from "dotenv"
import Note from "./models/Note.js";


const app = express();
dotenv.config()
app.use(cors())
app.use(express.json())


const uri = process.env.ATLAS_URI;
mongoose.set('strictQuery', true);
mongoose.connect(uri, { useNewUrlParser: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB Connected");
})

app.get("/", async (req, res) => {
    const notes = await Note.find();
    return res.json(notes);
})

// const stuff = new Note({
//     title: "Third Note",
//     content: "Content of my Third note!"
// })
// stuff.save().then(stuff => {
//     console.log(stuff);
// })
// .catch(e => {
//     console.log(e)
// })

app.listen(5000, () => console.log("Server Listening"));