import React from 'react'
import { AppWrap, MotionWrap } from '../../Wrapper'
import { motion } from 'framer-motion'
import { urlFor, client } from '../../client'

import './Skills.scss'
import { useState, useEffect } from 'react'

const Skills = () => {

  const [skills, setSkills] = useState([])

  useEffect(() => {
    const qry = '*[_type == "skills"]'

    client.fetch(qry).then(data => {
      data = data.sort((a,b) => a.name < b.name)
      setSkills(data)
    }) 
  }, [])

  return (
    <>
      <h2 className='head-text'>My <span>Skills</span></h2>
      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {skills.map(skill => (
            <motion.div
              key={skill.name}
              whileInView={{opacity: [0,1]}}
              transition={{duration: 0.5}}
              className='app__skills-item app__flex'
            >
              <div className='app__flex' style={{backgroundColor: skill.bgColor}}>
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  )
}

export default AppWrap(MotionWrap(Skills, 'app__skills'), 'Skills', 'app__whitebg')
