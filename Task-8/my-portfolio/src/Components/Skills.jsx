import React from 'react'
import '../Components/Skills.css'

import { motion } from 'framer-motion'
import html from "../Images/html.png"
import css from '../Images/css.png'
import javascript from '../Images/javascript.png'
import mongodb from '../Images/mongodb.png'
import express from '../Images/express.png'
import react from '../Images/react.png'
import redux from '../Images/redux.png'
import node from '../Images/node.png'
// import typescript from '../Images/typescript.png'
import chakra from '../Images/chakra.png'
// import storybook from '../Images/storybook.png'
import npm from '../Images/npm.png'
// import nextjs from '../Images/nextjs.svg'
import next from '../Images/next.png'
import bootstrap from '../Images/bootstraplogo.jpeg'
import framer from '../Images/framer.jpeg'
import netlify from '../Images/netlify.png'
import github from '../Images/github.png'
import vercel from '../Images/vercel.png'
import mui from '../Images/material.svg'
import postman from '../Images/postman.png'
import cyclick from '../Images/cyclic.png'

export default function Skills() {
    return (
        <div className='skills'>
            <div className='skills-main-container'>
                <div>
                    <h1 className='myskills-header'>My Skills</h1>
                </div>
                <div className='skills-container'>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                    >
                        <img src={html} alt="html5" />
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                    >
                        <img src={css} alt="css3" />
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                    >
                        <img src={javascript} alt="JavaScrpit" />
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                    >
                        <img src={mongodb} alt="mongoDb" />
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                    >
                        <img src={express} alt="express" />
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                    >
                        <img src={react} alt="react" />
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                    >
                        <img src={redux} alt="nodejs" />
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                    >
                        <img src={github} alt="github" />
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                    >
                        <img src={chakra} alt="chakra" />
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                    >
                        <img src={bootstrap} alt="boot" />
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                    >
                        <img src={npm} alt="npm" />
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                    >
                        <img src={next} alt="next" />
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                    >
                        <img src={node} alt="node" />
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                    >
                        <img src={netlify} alt="netlify" />
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                    >
                        <img src={framer} alt="framer" />
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                    >
                        <img src={postman} alt="framer" />
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                    >
                        <img src={vercel} alt="framer" />
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                    >
                        <img src={mui} alt="framer" />
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                    >
                        <img src={cyclick} alt="framer" />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
