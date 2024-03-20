import { useRef } from "react"
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

const items = [
    {
        id:1,
        title:"React Commerce",
        img:"https://images.pexels.com/photos/3103199/pexels-photo-3103199.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci amet quam, ut minus veniam velit autem et dignissimos dolorum reiciendis eligendi expedita necessitatibus voluptatem dolore. Placeat tempora ut ullam in.",
    },
    {
        id:2,
        title:"Next js",
        img:"https://images.pexels.com/photos/806609/pexels-photo-806609.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci amet quam, ut minus veniam velit autem et dignissimos dolorum reiciendis eligendi expedita necessitatibus voluptatem dolore. Placeat tempora ut ullam in.",
    },
    {
        id:3,
        title:"Vannila cSS",
        img:"https://images.pexels.com/photos/2582938/pexels-photo-2582938.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci amet quam, ut minus veniam velit autem et dignissimos dolorum reiciendis eligendi expedita necessitatibus voluptatem dolore. Placeat tempora ut ullam in.",
    },
    {
        id:4,
        title:"Music App",
        img:"https://images.pexels.com/photos/5935787/pexels-photo-5935787.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci amet quam, ut minus veniam velit autem et dignissimos dolorum reiciendis eligendi expedita necessitatibus voluptatem dolore. Placeat tempora ut ullam in.",
    },
]

const Single = ({item}) => {
    const ref = useRef();
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const y = useTransform(scrollYProgress, [0,1], ["0%","300%"]);

    return(
        <section ref={ref}>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} />
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const Portfolio = () =>{

    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness:100,
        damping:30,
    });

    return(
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>My Works</h1>
                <motion.div style={{scaleX}} className="progressBar"></motion.div>
            </div>
            {items.map(item=>(
                <Single item={item} key={item.id}/>
            ))}
        </div>
    );
}
export default Portfolio;