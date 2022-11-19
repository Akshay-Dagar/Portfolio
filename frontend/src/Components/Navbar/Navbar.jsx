import React from 'react'
import { HiMenu } from 'react-icons/hi'
import { GrClose } from 'react-icons/gr'
import { motion } from 'framer-motion'

import './Navbar.scss'
import '../../App.scss'
import { useState } from 'react'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className='app__navbar'>
      <h1 className='app__navbar-logo'>
        Akshay Dagar
      </h1>
      <ul className='app__navbar-links'>
        {["Home", "About", "Work", "Skills", "Experience", /*"Testimonials",*/ "Contact", "Blog"].map(item => {
          return (
            <li key={`link-${item}`} className='app__flex p-text'>
              {item === "Blog" 
                ? <a href='https://akshaydagar.vercel.app/' target="_blank" rel="noreferrer">{item}</a> 
                : <a href={`#${item}`}>{item}</a>}
              
            </li>
          )
        })}
      </ul>
      <div className='app_navbar-menu'>
        <HiMenu onClick={() => setToggle(true)}/>

        {toggle && (
          <motion.div 
            whileInView={{x:[100,0]}} 
            transition={{duration:0.35, ease:'easeOut'}}>

            <GrClose onClick={() => setToggle(false)}/>

            <ul>
              {["Home", "About", "Work", "Skills", "Testimonials", "Contact", "Blog"].map(item => {
                return (
                  <li key={`linkvert-${item}`}>
                    {item === "Blog" 
                      ? <a href='https://akshaydagar.vercel.app/' target="_blank" rel="noreferrer" onClick={() => setToggle(false)}>{item}</a>
                      : <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>}
                  </li>
                )
              })}
            </ul>
          </motion.div>
        )}

      </div>
    </nav>
  )
}

export default Navbar