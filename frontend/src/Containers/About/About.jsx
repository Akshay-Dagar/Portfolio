import React, {useState, useEffect} from "react";
import {motion} from 'framer-motion'
import './About.scss'
import { urlFor, client } from "../../client";
import { AppWrap, MotionWrap } from "../../Wrapper";

const About = () => {
    const [abouts, setAbouts] = useState([])

    useEffect(() => {             //will run only once after initial render (like didmount)
        const qry = '*[_type == "abouts"]'                        //fetch abouts from sanity cms
        client.fetch(qry).then(data => {
            setAbouts(data)})
    }, [])

    return (
        <>
        <script src="https://gist.github.com/Akshay-Dagar/3c82fa3a876e1b7ae95eec2669ee2515.js"></script>
            <h2 className="head-text">About <span>Me</span></h2>
            <motion.div 
                className="app__profile-about"
                whileInView={{opacity: 1}}
                whileHover={{scale: 1.2}}
                transition={{duration:0.3, type:'tween'}}
            >
                I am a graduate of Computer Science from the Delhi Technological University, Delhi 
                and a self-educated programmer. I am a <span>Software Developer at Microsoft,</span> skilled
                at backend development and making dynamic, responsive and beautiful User Experiences. 
                I am an <span>Artificial Intelligence and Machine Learning</span> enthusiast and like to train 
                models that solve interesting problems using the latest techniques. I am adept at using 
                <span> Python for data analysis</span>. I develop <span>3D games using the Unity engine</span>. I am also
                a <span>Competitive Programmer</span> and rank in the <span>top 7% on Leetcode</span>. I am a blogger 
                and frequently publish on Medium and <a href="https://akshaydagar.vercel.app/" target='_blank' rel='noreferrer'>my website</a>.
            </motion.div>
            <div className="app__profiles">
                {abouts.map((about, index) => 
                    (
                        <motion.div
                            whileInView={{opacity: 1}}
                            whileHover={{scale: 1.2}}
                            transition={{duration:0.3, type:'tween'}}
                            className="app__profile-item"
                            key={about.title + index}
                        >
                            <img src={urlFor(about.imgUrl)} alt={about.title} />
                            <h2 className="bold-text">{about.title}</h2>
                            <p className="p-text">{about.description}</p>
                        </motion.div>
                    )
                )}
            </div>
        </>
    )
}

export default AppWrap(MotionWrap(About, 'app__about'), 'About', 'app__whitebg')