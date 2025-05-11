import React from "react";
import M from '../assets/M.png'
import Y from '../assets/Y.png'
import N from '../assets/N.png'
import O from '../assets/O.png'
import T from '../assets/T.png'
import E from '../assets/E.png'
import S from '../assets/S.png'
import './homestyle.css'
function Home(){
    return(
        <div className="home-main" >
            <div className="home-main2" >
            <div className="first-half" >
            <img src={M} className="setting-size" id="M" alt="" />
            <img src={Y} className="setting-size" id="Y" />
            </div>
            <div className="sec-half" >
            <img src={N} className="setting-size" id="N" alt="" />
            <img src={O} className="setting-size" id="O" alt="" />
            <img src={T} className="setting-size" id="T" alt="" />
            <img src={E} className="setting-size" id="E" alt="" />
            <img src={S} className="setting-size" id="S" alt="" />
            </div>
            </div>
        </div>
    );

}
export default Home;