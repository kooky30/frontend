import * as React from "react";
import './about.css';
import Onepiece from '../../assets/MeMrwhite.png';
import memrwhite from '../../assets/MeMrwhite1.png';
import memrwhite1 from '../../assets/logomrwhite.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">What I love</span>
            <span className="skillDesc">I love playing with my Dog since he was a little.</span>
            <div className="skillsImg">
                <div className="skill">
                    <img src={Onepiece} alt="Onepiece" height='10vh' className="skillsImgs" />
                    <div className="skillsText">
                    <h3 style={{color: 'Black', textAlign: 'center'}}><b>SECONDARY</b></h3>
                    <h6 style={{color:'Black'}}><b>(2012-2019)</b></h6>
                    </div>
                </div>
                <div className="skill">
                    <img src={memrwhite} alt="memrwhite" height='10vh' className="skillsImgs" />
                    <div className="skillsText">
                        <h2>My Furbaby</h2> <p>1 week old</p>
                    </div>
                </div>
                <div className="skill">
                    <img src={memrwhite1} alt="memrwhite1" height='90vh' className="skillsImgs"  />
                    <div className="skillsText">
                        <h2>Mr.White</h2>
                        <p>My 7months old, Mr. White</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;