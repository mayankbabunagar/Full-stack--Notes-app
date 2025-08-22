import React from "react";
import axios from "axios";
import { useState } from "react";
export async function StoreNotes(){
    try {
        const storenotes = await axios.get("https://full-stack-notes-app-r6uu.onrender.com/api/notes", {withCredentials:true})
        return storenotes.data;
        
    } catch (error) {
        console.log("error in showing your notes", error);
        return [];
        
    }
}
