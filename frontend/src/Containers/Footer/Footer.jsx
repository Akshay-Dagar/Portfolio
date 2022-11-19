import React, {useEffect, useState} from 'react'
import { AppWrap, MotionWrap} from '../../Wrapper'
import { client } from '../../client'
import { BsTelephoneFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'

import './Footer.scss'

const Footer = () => {
  const [formData, setFormData] = useState({name: '', email: '', message: ''})
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [submitEnabled, setSubmitEnabled] = useState(false)

  const {name, email, message} = formData

  useEffect(() => {
    formData.name !== '' && formData.email !== '' && formData.message !== '' && setSubmitEnabled(true)
  }, [formData])

  const handleChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const sendMessage = () => {
    setLoading(true)

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message
    }

    client.create(contact).then(() => {
      setLoading(false)
      setIsFormSubmitted(true)
      setFormData({name: '', email: '', message: ''})
    })
  }


  return (
    <>
      <h2 className='head-text'>Contact <span>Me</span></h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <MdEmail />
          <a href="mailto:akshaydagar98@gmail.com" className='p-text'>akshaydagar98@gmail</a>
        </div>
        <div className="app__footer-card">
          <BsTelephoneFill />
          <a href="tel: +91 8800721297" className='p-text'>+91 8800721297</a>
        </div>
      </div>
      {!isFormSubmitted ? 
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input type="text" className="p-text" placeholder='Your Name' name="name" value={name} onChange={handleChange}/>
          </div>
          <div className="app__flex">
            <input type="text" className="p-text" placeholder='Your Email' name="email" value={email} onChange={handleChange}/>
          </div>
          <div className="app__flex">
            <textarea 
              name="message"
              className="p-text"
              placeholder='Your Message'
              value={message}
              onChange={handleChange}
              />
          </div>
          <button className='p-text' type='button' onClick={sendMessage} disabled={!submitEnabled} style={!submitEnabled ? {backgroundColor: 'grey', cursor: 'not-allowed'} : {}}>{loading ? 'Sending...' : 'Send Message'}</button>
        </div>
      :
      <div>
        <h3 className="head-text">Thank you for getting in touch</h3>
      </div>
      }
    </>
  )
}

export default AppWrap(MotionWrap(Footer, 'app__footer'), 'Contact', 'app__whitebg')
