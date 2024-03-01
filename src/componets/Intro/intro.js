import React from "react";
import './intro.css';
import bg from '../../assets/profile.jpg';
import profile from '../../assets/logo.png';
import btnImg from '../../assets/sunny.png';
import { Link } from 'react-scroll';


const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="Welcome">Hi,</span>
            <span className="introText"> I am <span className="introName">Roselle</span> <br />and this is</span>
            <p className="introPara">My Personal Website!</p>
             <Link><button className="btn"><img src={btnImg} alt="follow my Journey" className="btnImg" /> Follow my Journey </button></Link>       
        </div>
        <img src={bg} alt="bg" className="bg"/>
        <img src={profile} alt="profile" className="profile"/>
    </section>
  )
}

export default Intro;
