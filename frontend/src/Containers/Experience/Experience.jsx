import React from 'react'
import { AppWrap, MotionWrap } from '../../Wrapper'
import { client, urlFor } from '../../client'

import './Experience.scss'
import { useState, useEffect } from 'react'

const Experience = () => {
    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        const query = '*[_type == "experiences"]';
    
        client.fetch(query).then((data) => {
          setExperiences(data);
        });
    }, []);

    return (
        <>
            <h2 className='head-text'>My <span>Work Experience</span></h2>
            <table className="app__skills-exp">
                <tbody>
                    {experiences.map((experience) => (
                        <tr
                            className="app__skills-exp-item"
                            key={experience.year}
                            style={{border: '1px solid black'}}
                        >
                            <td className="app__skills-exp-year">
                                <p className="bold-text" style={{textAlign: 'right'}}>{experience.year}</p>
                            </td>
                            <td className='app__experience-img'>
                                {experience.imgUrl && <img src={urlFor(experience.imgUrl)} alt={experience.company} className="xyz"/>} 
                            </td>
                            <td className="app__skills-exp-works">
                                <h4 className="bold-text">{experience.name}</h4>
                                <p className="p-text">{experience.company}</p>
                                <p className="bigger-text">{experience.desc}</p>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default AppWrap(MotionWrap(Experience, 'app__experience'), 'Experience', 'app__primarybg')
