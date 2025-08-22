import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Registerform(){
    const navigate= useNavigate();
    function Registersubmit(event){
        event.preventDefault();
        axios.post('https://full-stack-notes-app-r6uu.onrender.com/api/auth/register',{ name, email,password } ,{ withCredentials: true }
        ).then((response)=>{
            console.log('registered successfully',response.data);
            if(name&&email&&password){
                navigate('/gettingnotes')
            }
        console.log(response.data)
        setName("");
        setEmail("");
        setPassword("");}).catch((error)=>{
            console.log('error during registration', error);
        })
    }
    const [name, setName]=useState("")
    function forName(event){
    setName(event.target.value);}
    const [email, setEmail]=useState("")
    function foremail(event){
    setEmail(event.target.value);}
    const [password, setPassword]=useState("")
    function forPassword(event){
    setPassword(event.target.value);}

    return(
        <div className="login-div">
            <div className="myregform"  >
                
                <form onSubmit={Registersubmit}>
                <h2 id="registerwritten">Register</h2>
                <br />
                

                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={name} onChange={forName} className='customInput' /> <br />
                <br />
                {/* <label for="age">Age</label>
                <input type="number" /><br /> */}
                <label htmlFor="email">Email</label>
                <input type="email" name="email" value={email} onChange={foremail} className='customInput' /> 
                <br /><br />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" value={password} onChange={forPassword} className='customInput' /> <br />
                {/* <div >Gender:
                    <br />
                <label><input type="radio" name="gender">Male </input></label>
                <br />
                <label><input type="radio" name="gender">Female </input></label>
                <br /> 


                </div> */}
                


                {/* <label for="User-category">Used by a</label>
                <select name="choose" id="">
                    <option value="Student">Student</option>
                    <option value="Working_person">Working person</option>
                    <option value="Teacher">Teacher</option>
                    <option value="Household">Household</option>
                    <option value="Teenager">Teenager</option>

                </select> */}
                <button type="submit" className="submitCustom" >Register</button>
                </form>



                
            </div>
        </div>
    );}

export default Registerform;
