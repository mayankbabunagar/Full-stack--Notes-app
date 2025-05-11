import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { StoreNotes } from "./storenotes";
import axios from "axios";
import AddNotes from "./Addnotes";



export function ShowNotes(){
    
    const [notes, setNotes] = useState([]);
    useEffect(()=>{
        async function getnotes(){
            try {
                const storing = await StoreNotes();
                setNotes(storing)
            } catch (error) {
                console.log("error while fetching notes", error);
            }
        }
        getnotes();

    },[])
    async function handleDelete(id){
        axios.delete(`http://localhost:5000/api/notes/${id}`,{withCredentials:true})
        setNotes((notes)=>{notes.filter(notes._id!=id)})
    }

    
    return(
        <div className="shownotes-div" >
            <h2 id="shownoteshead" >Your Notes</h2>
            <div className="align-shits" >
            <ol>
                {notes.map((note)=>(
                    <li key={note._id}>
                        <div className="our-content" >
                        <h3 className="title-written" >{note.title} </h3><br />
                        <p className="content-para" >{note.content}</p>
                    
                    <button onClick={()=>{handleDelete(note._id)}  } className="delete_button_1">Delete</button>
                    </div>
                    </li>
                ))}
            </ol>
            <div className="addthenotes" >
            <h2 className="addingnotesheader">Wanna add more Notes?</h2>
            <br />
            <br />
                    <AddNotes />
            </div>
            </div>
            
        </div>
    );
}
export default ShowNotes;