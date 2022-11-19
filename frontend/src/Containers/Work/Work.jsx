import React from 'react'
import { AppWrap, MotionWrap } from '../../Wrapper'
import { AiFillEye, AiFillGithub} from 'react-icons/ai'
import { motion } from 'framer-motion'
import { urlFor, client } from '../../client'

import './Work.scss'
import { useState, useEffect } from 'react'

const Work = () => {

  const [activeFilter, setActiveFilter] = useState('All')
  const [animateCard, setAnimateCard] = useState({y: 0, opacity: 1})
  const [works, setWorks] = useState([])
  const [filteredWorks, setFilteredWorks] = useState([])

  useEffect(() => {
    const qry = '*[_type == "works"]'
    client.fetch(qry).then(data => {
      data.sort((a, b) => a.rank - b.rank);
      setWorks(data)
      setFilteredWorks(data)
    }) 
  }, [])

  // useEffect(() => {
  //   setFilteredWorks(works.filter(work => work.tags.some(tag => tag === activeFilter)))
  // }, [activeFilter])
  

  const handleWorkFilter = item => {
    setActiveFilter(item)
    setAnimateCard({y:100, opacity:0})

    setTimeout(() => {
      setAnimateCard({y:0, opacity:1})
      if (item === 'All')
        setFilteredWorks(works)
      else
        setFilteredWorks(works.filter(work => work.tags.includes(item)))
    }, 200)
  }


  return (
    <>
      <h2 className="head-text">My <span>Projects</span></h2>
      <div className='app__work-filter'>
        {['React', 'UI/UX', 'Backend', 'AI/ML', 'Unity', 'Data Science', 'All'].map(item => (
          <div
            key={item}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>
      <motion.div
        animate={animateCard}
        transition={{duration: 0.5, delayChildren: 0.5}}
        className="app__work-portfolio"
      >
        {filteredWorks.map(work => (
          <div className='app__work-item app__flex' key={work.title}>
            <div className='app__work-img app__flex'>
              <img src={urlFor(work.imgUrl)} alt={work.title}/>
              <motion.div
                whileHover={{opacity: [0, 1]}}
                transition={{duration: 0.1, ease: 'easeInOut'}}
                className='app__work-hover app__flex'
              >
                {work.projectLink &&
                  <a href={work.projectLink} target='_blank' rel='noreferrer'> { /* _blank will open the link in a new tab */ }
                    <motion.div
                      whileInView={{scale: [0, 1]}}
                      whileHover={{scale: [1, 0.9]}}
                      transition={{duration: 0.25}}
                      className='app__flex'
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                }
                
                {work.codeLink &&
                  <a href={work.codeLink} target='_blank' rel='noreferrer'>
                    <motion.div
                      whileInView={{scale: [0, 1]}}
                      whileHover={{scale: [1, 0.9]}}
                      transition={{duration: 0.25}}
                      className='app__flex'
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                }
                
              </motion.div>
            </div>
            <div className='app__work-content app__flex'>
              <h4 className='bold-text'>{work.title}</h4>
              <p className='p-text' style={{marginTop: 10, textAlign: 'center'}}>{work.description}</p>
              {/* <div className='app__work-tags app__flex'>
                <p className='p-text'>{work.tags[0]}</p>
              </div> */}
            </div>
          </div>
        ))}
      </motion.div>
    </>
  )
}

export default AppWrap(MotionWrap(Work, 'app__works'), 'Work', 'app__primarybg')
