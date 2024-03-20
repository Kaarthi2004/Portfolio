import { useRef } from "react";
import "./services.scss"
import { motion, useInView} from "framer-motion";

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
                    <h2>About Me:</h2>
                    <p>
                        An Assertive person who would like to be committed and efficient in my work and to 
                        enhance the growth of the organization by improving and applying my competency at work
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                    <h2>About Me:</h2>
                    <p>
                        An Assertive person who would like to be committed and efficient in my work and to 
                        enhance the growth of the organization by improving and applying my competency at work
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                    <h2>About Me:</h2>
                    <p>
                        An Assertive person who would like to be committed and efficient in my work and to 
                        enhance the growth of the organization by improving and applying my competency at work
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                    <h2>About Me:</h2>
                    <p>
                        An Assertive person who would like to be committed and efficient in my work and to 
                        enhance the growth of the organization by improving and applying my competency at work
                    </p>
                    <button>Go</button>
                </motion.div>
            </motion.div>
        </motion.div>
        
    );
}
export default Services;