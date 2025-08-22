import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
function AddNotes(){
    const [title, setTitle]= useState("");
    const [content, setContent]= useState("");

    function handleTitle(event){
        setTitle(event.target.value)

    }
    function handleContent(event){
        setContent(event.target.value)

    }
    async function handleSubmit(){
        if(!title||!content){
            return;

        }
        try {
            const response= await axios.post("https://full-stack-notes-app-r6uu.onrender.com/api/notes",{title,content}, {
                withCredentials: true
            })
            
        } catch (error) {
            console.log("error occuring during adding notes ", error);
            
        }

    }

    return(
        <div className="addnotesdiv" >
            <h2>Add Your Note</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label> <br />
                    <input type="text" className="addnote-title" onChange={handleTitle} /> 
                </div>
                <div>
                    <br />
                    <label htmlFor="content">Content</label>
                    <br />
                    {/* <input type="text" onChange={handleContent} /> */}
                    <textarea  className="textarea-content" cols="30" rows="10" onChange={handleContent} placeholder="Enter your content ..."  ></textarea>
                </div>
                <button className="add-button" >Add Note</button>
            </form>
            
        </div>
    )
}
export default AddNotes
