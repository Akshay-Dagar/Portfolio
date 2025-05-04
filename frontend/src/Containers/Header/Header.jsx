import React from 'react'
import { motion } from 'framer-motion'
import { images } from '../../Constants'
import { AppWrap } from '../../Wrapper'
import './Header.scss'

// const scaleVariants = {
//   whileInView: {
//     scale: [0,1],
//     opacity: [0,1],
//     transition: {
//       duration: 1,
//       ease: 'easeInOut'
//     }
//   }
// }

const Header = () => {
  return (
    <div className='app__header app__flex' id='home'>
      <motion.div
        whileInView={{x: [-100,0], opacity: [0,1]}}
        transition={{duration: 0.5}}
        className='app_header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <div style={{marginLeft:20}}>
              <h1 className='head-text'>Software Developer</h1>
            </div>
          </div>
          <div className='tag-cmp app__flex'>
            <p className='p-text'>Frontend Development</p>
          </div>
          <div className='tag-cmp app__flex'>
            <p className='p-text'>Backend Development</p>
          </div>
          <div className='tag-cmp app__flex'>
            <p className='p-text'>Artificial Intelligence & Machine Learning</p>
          </div>
          <div className='tag-cmp app__flex'>
            <p className='p-text'>Game Development</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{opacity: [0,1]}}
        transition={{duration: 0.5, delayChildren: 0.5}}
        className='app_header-img'
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{scale: [0,1]}}
          transition={{duration: 0.5, ease: 'easeInOut'}}
          src={images.circle}
          alt='profile_circle'
          className='overlay_circle'
        />
      </motion.div>
      <div className="app__header-circles">
        {[images.javascript, images.react, images.python, images.node, images.unity, images.dotnet].map((circle, idx) => (
          <motion.div 
            whileHover={{boxShadow: '0 0 8px 8px rgba(0, 0, 0, 0.1)'}}
            className='app__flex' 
            key={`circle-${idx}`} 
            whileInView={{scale: [0, 1]}}
            transition={{duration: Math.random()*2, ease: 'easeInOut'}}
          >
            <img src={circle} alt={`circle-${idx}`} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default AppWrap(Header, 'Home')