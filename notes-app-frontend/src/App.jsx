import './App.css'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Loginform from './components/Login_form';
import Registerform from './components/Register_form';
import { ShowNotes } from './components/shownotes';
import AddNotes from './components/Addnotes';
import EditNotes from './components/editnotes';
import Home from './components/homepage';




function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/login" element={<Loginform />} />
        <Route path="/register" element={<Registerform />} />
        <Route path="/gettingnotes" element={<ShowNotes />}></Route>
        <Route path="/addnotes" element={<AddNotes />} />
        <Route path="editnotes" element={<EditNotes noteid='680f3625110b9bcd646589ae' />}  />

      </Routes>
      </>
  // <div>
  //   <Navbar/>
  //   <Loginform />

  // </div>
  );
}

export default App;
