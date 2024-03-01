import React, {useState} from 'react';
import './navbar.css';
import logo from '../../assets/rosellelogo.png';
import contactImg from '../../assets/strawhat.png';
import { Link } from 'react-scroll';
import menu from '../../assets/Menu.png';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className="navbar">
            <img src={logo} alt="logo" className='logo'/>
            <div className="desktopMenu">
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem"><b>Home</b></Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem"><b>About Me</b></Link>
                <Link activeClass="active"  to="works" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem"><b>Education</b></Link>
            </div>
            <button className="desktopMenuBtn" onClick={() => {
                document.getElementById("contact").scrollIntoView({behavior: "smooth"});
            }}>
                <img src={contactImg} alt="contactImg" className="desktopMenuImg" /> Contact </button>
                
            <img src={menu} alt="Menu" className='mobMenu'onClick={()=>setShowMenu(!showMenu)}/>
            <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}><b>Home</b></Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}><b>About Me</b></Link>
                <Link activeClass="active"  to="works" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}><b>Education</b></Link>            </div>
        </nav>
    );
}

export default Navbar;


