import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    content: { type: String },
}, { timestamps: true , collection:'userNotes' });

const Notes = mongoose.model('Notes', noteSchema);
export default Notes;
