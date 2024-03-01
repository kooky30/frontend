import React, {useRef} from "react";
import './contact.css';
import IG from '../../assets/IG.png';
import FB from '../../assets/FB.png';
import FacebookIcon from '../../assets/Fblogo.png';
import InstagramIcon from '../../assets/IGlogo.png';
import GmailIcon from '../../assets/GmailLogo.png';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_0p6j23b', 'template_tr0i1tr', form.current, {publicKey: 'fRVyIsMc-JWOZC4zFsoBC'})
          .then((result) => {
                console.log(result.text);
              alert('Email Sent')
              e.target.reset();
            },
            (error) => {
                console.log(error.text);
            },
          );
      };
        return (
        <section>
            <div id="SMaccounts">
                <h1 className="contactPageTitle">You can reach me at</h1>
                <p className="SMaccountsDesc">
                    This platform are my social media which I usually used.
                </p>
                <div className="SMaccountsImgs">
                    <img src={IG} alt="IG" className="SMaccountsImg" />
                    <img src={FB} alt="FB" className="SMaccountsImg" />
                </div>
            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Contact me</h1>
                <span className="contactDesc">How's my Website Portfolio, kindly give a comment about using this website, Comment down below! I really appreciate it.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Your Name" name="your_name"/>
                    <input type="email" className="email" placeholder="Your Email" name="your_email" />
                    <textarea className="msg" name="message" rows="5" placeholder="Your Comment"></textarea>
                    <button type="Submit" value="Send" className="submitBtn">Submit</button>
                    <div className="links">
                        <img src={FacebookIcon} alt="Facebook" style={{ alignSelf:'center', justifyContent:'center', margin:'1rem', alignItems:'baseline' }} className="link" />
                        <img src={InstagramIcon} alt="Instagram" style={{ alignSelf:'center', justifyContent:'center', margin:'1rem', alignItems:'baseline' }} className="link" />
                        <img src={GmailIcon} alt="Gmail" style={{ alignSelf:'center', justifyContent:'center', margin:'1rem', alignItems:'baseline' }} className="link" />
                    </div>
                </form>

            </div>
        </section>
    )
};

export default Contact;
