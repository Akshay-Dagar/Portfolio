import React, {useState, useEffect} from 'react'
import { AppWrap, MotionWrap } from '../../Wrapper'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { urlFor, client } from '../../client'

import './Testimonials.scss'


const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const qry = '*[_type == "testimonials"]'
    
    client.fetch(qry).then(data => {
      setTestimonials(data)
    })
  }, [])

  return (
    <>
      {testimonials.length && (
        <>
          <div className='app__testimonial-item app__flex'>
            <img src={urlFor(testimonials[currentIndex].imageurl)} alt={testimonials[currentIndex].name} />
            <div className='app__testimonial-content'>
              <p className='p-text'>{testimonials[currentIndex].feedback}</p>
              <div>
                <h4 className='bold-text'>{testimonials[currentIndex].name}</h4>
                <h5 className='p-text'>{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </div>
          <div className="app__testimonial-btns app__flex">
            <div className="app__flex" onClick={() => setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>
            <div className="app__flex" onClick={() => setCurrentIndex((currentIndex + 1) % testimonials.length)}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default AppWrap(MotionWrap(Testimonials, 'app__testimonial'), 'Testimonials', 'app__primarybg')