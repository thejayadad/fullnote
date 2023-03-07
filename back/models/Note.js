
import mongoose from "mongoose";

const Note = mongoose.Schema({
    title: {
        type: String,
        required: true,

    },
    content: {
        type: String,
        required: true
    }
})

export default mongoose.model("Note", Note);