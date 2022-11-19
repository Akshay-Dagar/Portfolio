import React from "react";
import { BsGithub, BsMedium } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'
import { SiLeetcode } from 'react-icons/si'

const SocialMedia = () => {
    return (
        <div className="app__social">
            <div>
                <a href="https://github.com/Akshay-Dagar" target="_blank" rel="noreferrer"><BsGithub /></a>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/akshay-dagar-6b3719185/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
            </div>
            <div>
                <a href="https://akshaydagar.medium.com/" target="_blank" rel="noreferrer"><BsMedium /></a>
            </div>
            <div>
                <a href="https://leetcode.com/AkshayDagar" target="_blank" rel="noreferrer"><SiLeetcode /></a>
            </div>
            <div>
                <a href="mailto:akshaydagar98@gmail.com" target="_blank" rel="noreferrer"><GrMail /></a>
            </div>
        </div>
    )
}

export default SocialMedia
