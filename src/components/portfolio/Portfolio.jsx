import { useRef } from "react"
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

const goToGitHubRepo = () => {
    const githubRepoUrl = 'https://github.com/Kaarthi2004?tab=repositories';
    window.open(githubRepoUrl, '_blank');
};

const items = [
    {
        id:1,
        title:"YOLO-DEEPSORT",
        img:"https://images.pexels.com/photos/3103199/pexels-photo-3103199.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"This project uses YOLOv8 for Vehicle Speed detection and DEEPSORT for vehicle tracking. It implements the following tasks such as: 1.Vehicle Detection 2.Vehicle Speed Estimation 3.Vechile Count",
    },
    {
        id:2,
        title:"Dark Web Crawler",
        img:"https://images.pexels.com/photos/806609/pexels-photo-806609.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"Python web crawler that searches for and extracts '.onion' links from a given parent URL. It makes HTTP requests with the requests library, parses HTML content with BeautifulSoup, and configures a SOCKS5 proxy with PySocks to connect to the Tor network.",
    },
    {
        id:3,
        title:"Temple Website",
        img:"https://images.pexels.com/photos/2582938/pexels-photo-2582938.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"I developed a temple website using ReactJS and TailwindCSS, enabling donation handling and special event announcements. This project showcases my skills in creating dynamic, user-friendly web applications with efficient design and responsive features.",
    },
    {
        id:4,
        title:"AccidentPreventionIoT",
        img:"https://images.pexels.com/photos/5935787/pexels-photo-5935787.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"Developed an IoT-based alert system for accident-prone areas on national highways using Raspberry Pi, Arduino UNO, radar sensors, and cameras to detect speeding vehicles and alert drivers, aiming to reduce accidents at T and Y-junctions.",
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
                        <button onClick={goToGitHubRepo}>See Demo</button>
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