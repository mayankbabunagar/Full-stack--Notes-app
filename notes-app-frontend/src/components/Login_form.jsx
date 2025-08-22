import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




function Loginform(){
    const [email, setEmail]=useState("")
const [password, setPassword]=useState("");
const navigate= useNavigate();
function changepath(){
    try {
        
            navigate('/gettingnotes');
            
        } catch (error) {
            console.error('error in routing')
            
        }
        
    
    }

function foremail(event){
    setEmail(event.target.value);
}
function forpassword(event){
    setPassword(event.target.value);
}
const handlesubmit= (event)=>{
    event.preventDefault();
    axios.post('https://full-stack-notes-app-r6uu.onrender.com/api/auth/login', {email , password}, { withCredentials: true }
    )
    .then((response) => {
        console.log(response.data);
        if(response.data.length!=0){
            changepath();
        }
        })
        .catch((error) => {
            if (error.response) {
                // Server responded with a status other than 2xx
                console.error('Login error:', error.response.data.message);
                } else {
                console.error('Error logging in:', error.message); 
                }
        });
    // console.log(response.email,response.password);
}

    return(
        <div className='login-div'>
            
            <div className='myform'>
                <form >
                <h2 id='loginwritten'> Login  </h2>
                <br />
                <br />

                <label htmlFor="email"  >Email- </label>
                <br />

                <input type="text" onChange={foremail} className='customInput'  />
                <br />
                <br />
                
                <br />
                <label htmlFor="password" >Password-</label><br />

                <input type="text" onChange={forpassword} className='customInput' />
                <br />
                <br />
                <br />
                <button type='submit' onClick={handlesubmit} className='submitCustom'  >Login</button>
                </form>
            </div>

        </div>
    );
}
export default Loginform;
