import Notes from '../models/Note.js';
export const getNotes = async (req,res)=> {              ////shows written notes

try {
    const gettingNote = await Notes.find({user: req.user._id});
        return res.status(201).json(gettingNote)
    
} catch (error) {
    return res.status(500).json({message : 'server error'});
    
}
};

export const createNotes = async(req,res)=>{
    const {title, content } = req.body;
    console.log(req.body);
    
    if( !(title|| content)){
        return res.json({message:'all above mentioned infos are required'});
    }
    try {
        const note = await Notes.create({
            title,
            content,
            user: req.user._id
        });
        res.status(201).json(note);
        
    } catch (error) {
        res.status(401).json({message:"Error on creating notes"});
        
    }
}
export const updateNote = async (req,res)=>{
    try {
        const {id}= req.params
        console.log(id);
    let note = await Notes.findById(id)
    if(!note){
        return res.json({message:'note not found'});
    }
    if(note.user._id.toString() !== req.user._id.toString()){
        return res.json({message:'Unauthorized user'});
    }
    let updatingnotes = await Notes.findByIdAndUpdate(id , req.body, {new : true})
    res.status(200).json(updatingnotes);
        
    } catch (error) {
        res.status(500).json({message:'Error in updating the note'})   
    }
}

export const deleteNote = async (req,res)=>{
    const {id} = req.params
    try {
        let note = await Notes.findById(id);
        if (note && note.user.toString() === req.user.id) {
            await note.deleteOne();
            res.json({ message: 'Note deleted' });
            }
            else {
                res.status(404).json({ message: 'Note not found or unauthorized' });
                }


        
    } catch (error) {
        res.status(401).json({message: 'Note not found or unauthorized'});
        
    }
}



