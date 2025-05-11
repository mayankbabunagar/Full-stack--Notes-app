import React from "react";
import axios from "axios";
import { useState } from "react";
function EditNotes({noteid}){
    const [title,setTitle]=useState("")
    const [content,setContent]= useState("")

    function handleTitle(event){
        setTitle(event.target.value);
    }
    function handleContent(event){
        setContent(event.target.value);
    }
    async function handleSubmit(){
        const response= await axios.put(`http://localhost:5000/api/notes/${noteid}`,{title,content}, {withCredentials:true});
    }


    return( <div>
        <h2>Update Note</h2>
        <form onSubmit={handleSubmit} >
        <label htmlFor="title">Title</label> 
        <input type="text" onChange={handleTitle} /><br />
        <label htmlFor="content">Content</label>
        <input type="text" onChange={handleContent} />
        <button type="submit" >Submit</button>
        </form>
    </div>  );
}
export default EditNotes;