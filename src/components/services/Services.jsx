import { useRef } from "react";
import "./services.scss"
import { motion, useInView} from "framer-motion";

const goToGitHubRepo = () => {
    const githubRepoUrl = 'https://github.com/Kaarthi2004?tab=repositories';
    window.open(githubRepoUrl, '_blank');
};

const variants = {
    initial : {
        x:-500,
        y:100,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        y:0,
        transition:{
            duration:1,
            staggerChildren:0.1,
        },
    },
};

const Services = () =>{

    const ref = useRef()

    const isInView = useInView(ref, {margin:"-100px"})

    return(
        <motion.div className="services" variants={variants} initial="initial" ref={ref} animate={"animate"}>
            <motion.div className="textContainer" variants={variants}>
                <p>
                    I focus on gaining tech knowledge
                    <br/> and grow higher
                </p>
                <hr/>
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/people.webp" />
                    <h1> <motion.b whileHover={{color:"orange"}}>Computer</motion.b>Science </h1>
                </div>
                <div className="title">
                    <h1>
                        &<motion.b whileHover={{color:"orange"}}>Design Engineering.</motion.b>
                    </h1>
                    <button>WHAT I DO?</button>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                    <h2>Data Structures:</h2>
                    <p>
                        Passionate about data structures, I constantly explore their applications and innovations, aiming to optimize algorithms for efficient problem-solving.
                    </p>
                    <button onClick={goToGitHubRepo}>See Demo</button>
                </motion.div>
                <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                    <h2>Web Development:</h2>
                    <p>
                        Deeply interested in web development, I’ve learned React JS and TailwindCSS to create modern, efficient, and visually appealing web applications.
                    </p>
                    <button onClick={goToGitHubRepo}>See Demo</button>
                </motion.div>
                <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                    <h2>UI/UX:</h2>
                    <p>
                        Knowledgeable in UI/UX laws, adept with Figma, and capable of designing effective wireframes and prototypes to improve user interaction.
                    </p>
                    <button onClick={goToGitHubRepo}>See Demo</button>
                </motion.div>
                <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                    <h2>Machine Learning:</h2>
                    <p>
                        Self-learned expert in YOLO algorithm, experienced in building machine learning models for multiple real-world use cases.
                    </p>
                    <button onClick={goToGitHubRepo}>See Demo</button>
                </motion.div>
            </motion.div>
        </motion.div>
        
    );
}
export default Services;