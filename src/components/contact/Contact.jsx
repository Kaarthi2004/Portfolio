import { useRef, useState } from "react";
import "./contact.scss"
import { motion} from "framer-motion";
import emailjs from '@emailjs/browser';

const variants = {
    initial : {
        y:500,
        opacity:0,
    },
    animate: {
        y:0,
        opacity:1,
        transition:{
            duration:0.5,
            staggerChildren:0.1,
        },
    },
};

const Contact = () => {

    const formRef = useRef()
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_gt1dxaj', 'template_eob10wn', formRef.current, {publicKey: 'byMWl48UiYgg_Vae1',})
          .then((result) => {
              setSuccess(true);
            }, (error) => {
                setError(true);
            });
    };

    return(
        <motion.div className="contact"  variants={variants} initial="initial" whileInView="animate">
            <motion.div className="textContainer" variants={variants}>
                <motion.h1 variants={variants}>Personal Information</motion.h1>
                <motion.div className="item" variants={variants}>
                    <h2>Mail</h2>
                    <span>rangakaarthi2004@gmail.com</span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Github</h2>
                    <span>https://github.com/Kaarthi2004?tab=repositories</span>
                </motion.div>
                <motion.div className="item" variants={variants}>
                    <h2>Phone</h2>
                    <span>+91 7871897402</span>
                </motion.div>
            </motion.div>
            <div className="formContainer">
                <motion.form ref={formRef} onSubmit={sendEmail}>
                    <input type="text" required placeholder="Name" name="name"></input>
                    <input type="email" required placeholder="Email" name="email"></input>
                    <textarea rows={8} placeholder="Message" name="message"></textarea>
                    <button>Submit</button>
                    {error && "Error"}
                    {success && "Success"}
                </motion.form>
            </div>
        </motion.div>
    );
}
export default Contact;