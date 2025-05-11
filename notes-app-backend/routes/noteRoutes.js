import  Express  from "express";
import {  getNotes, createNotes, updateNote, deleteNote} from '../controllers/noteController.js';
import protect from "../middlewares/authMiddleware.js";
const router= Express.Router();
router.route('/')
.get(protect, getNotes)
.post(protect, createNotes);

router.route('/:id')
.put(protect, updateNote)
.delete(protect,deleteNote);
export default router;