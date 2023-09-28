import React from 'react'
import '../Components/Projects.css'

import manyavar_1 from '../Images/manyavar_1.png'
import manyavar_2 from '../Images/manyavar_2.png'
import manyavar_3 from '../Images/manyavar_3.png'
import manyavar_4 from '../Images/manyavar_4.png'
import manyavar_5 from '../Images/manyavar_5.png'
import manyavar_6 from '../Images/manyavar_6.png'
import manyavar_7 from '../Images/manyavar_7.png'
import manyavar_8 from '../Images/manyavar_8.png'
import manyavar_9 from '../Images/manyavar_9.png'

import react from '../Images/react.png'
import html from '../Images/html.png'
import javascript from '../Images/javascript.png'
import css from '../Images/css.png'
import lovoda from '../Images/lovoda.jpg'
import lovoda2 from '../Images/lovoda2.jpg'
import lovoda3 from '../Images/lovoda3.jpg'
import lovoda4 from '../Images/lovoda4.jpg'
import kindmeal from '../Images/kindmeal.jpg'
import kindmeal2 from '../Images/kindmeal2.jpg'
import kindmeal3 from '../Images/kindmeal3.jpg'
import kindmeal4 from '../Images/kindmeal4.jpg'
import kindmeal5 from '../Images/kindmeal5.jpg'
import finishline1 from '../Images/finishline1.jpg'
import finishline2 from '../Images/finishline2.jpg'
import finishline3 from '../Images/finishline3.jpg'
import finishline4 from '../Images/finishline4.jpg'
import finishline5 from '../Images/finishline5.jpg'

import mongodb from '../Images/mongodb.png'
import cyclic from '../Images/cyclic.png'
import vercel from '../Images/vercel.png'


import GitHubCalendar from 'react-github-calendar';
import { motion } from 'framer-motion'

export default function Projects() {
    return (
        <div className='project-main'>
            <h1>My Projects</h1>
            <div className='geeks_container'>
                <div class="geeks"></div>
                <div class="geeks2"></div>
            </div>
            <div className='project-container'>
                <div className='project-img-div'>
                    <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 1 }}
                        src={manyavar_1} alt="chargebee" />
                    <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 1 }} src={manyavar_2} alt="chargebee" />
                    <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 1 }} src={manyavar_3} alt="chargebee" />
                    <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 1 }} src={manyavar_4} alt="chargebee" />
                    <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 1 }} src={manyavar_5} alt="chargebee" />
                    <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 1 }} src={manyavar_6} alt="chargebee" />
                    <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 1 }} src={manyavar_7} alt="chargebee" />
                    <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 1 }} src={manyavar_8} alt="chargebee" />
                    <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 1 }} src={manyavar_9} alt="chargebee" />
                </div>
                <div className='project-cont-child-2'>
                    <div className='project-cont-child-2-con1'>
                        <h1>Manyavar.com</h1>
                        <p>One of India's leading celebration wear brands. Providing
                            branded ethnic wear for men and kids and also for women with
                            Mohey's collection,</p>
                        <div className='project-logo-con'>
                            <img src={react} alt="react" />
                            <img src={javascript} alt="js" />
                            <img src={css} alt="css" />
                            <img src={mongodb} alt="" />
                            <img src={cyclic} alt="" />
                            <img src={vercel} alt="" />
                        </div>
                        <div className='project-bot-con'>
                            <button><a href="https://github.com/saikhmirsat/Manyavar-Clone" target="_blank">Github Code</a></button>
                            <button><a href="https://manyavar-clone-nine.vercel.app/" target="_blank">Live View</a></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='project-container'>
                <div className='project-img-div'>
                    <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 1 }}
                        src={finishline1} alt="chargebee" />
                    <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 1 }} src={finishline2} alt="chargebee" />
                    <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 1 }} src={finishline3} alt="chargebee" />
                    <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 1 }} src={finishline4} alt="chargebee" />
                    <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 1 }} src={finishline5} alt="chargebee" />
                </div>
                <div className='project-cont-child-2'>
                    <div className='project-cont-child-2-con1'>
                        <h1>Finishline.com</h1>
                        <p>About We exist at the intersection of ideas — Where performance meets style. Where classic meets technology. Where street meets fashion.</p>
                        <div className='project-logo-con'>
                            <img src={react} alt="react" />
                            <img src={javascript} alt="js" />
                            <img src={css} alt="css" />
                            <img src={cyclic} alt="cyclic" />
                        </div>
                        <div className='project-bot-con'>
                            <button><a href="https://github.com/saikhmirsat/Finishline.com_Clone/tree/main/frontend" target="_blank">Github Code</a></button>
                            <button><a href="https://finishline-com-clone-2zmp.vercel.app/" target="_blank">Live View</a></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='project-container'>
                <div className='project-img-div'>
                    <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 1 }}
                        src={kindmeal} alt="kindmeal" />
                    <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 1 }} src={kindmeal2} alt="kindmeal" />
                    <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 1 }} src={kindmeal3} alt="kindmeal" />
                    <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 1 }} src={kindmeal4} alt="kindmeal" />
                    <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 1 }} src={kindmeal5} alt="kindmeal" />
                </div>
                <div className='project-cont-child-2'>
                    <div className='project-cont-child-2-con1'>
                        <h1>Kindmeal.com</h1>
                        <p>KindMeal is Malaysia's pioneering meat-free lifestyle platform.</p>
                        <div className='project-logo-con'>
                            <img src={html} alt="html" />
                            <img src={javascript} alt="js" />
                            <img src={css} alt="css" />
                        </div>
                        <div className='project-bot-con'>
                            <button><a href="https://github.com/VIC-PAUL/racial-class-2069" target="_blank">Github Code</a></button>
                            <button><a href="https://kindmeal-com-clone.vercel.app/" target="_blank">Live View</a></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='project-container'>
                <div className='project-img-div'>
                    <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 1 }}
                        src={lovoda} alt="lovoda" />
                    <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 1 }} src={lovoda2} alt="lovoda" />
                    <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 1 }} src={lovoda3} alt="lovoda" />
                    <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 1 }} src={lovoda4} alt="lovoda" />
                </div>
                <div className='project-cont-child-2'>
                    <div className='project-cont-child-2-con1'>
                        <h1>Lovoda.com</h1>
                        <p>This website is an eCommerce website that sells women's trending jewellery.</p>
                        <div className='project-logo-con'>
                            <img src={html} alt="html" />
                            <img src={javascript} alt="js" />
                            <img src={css} alt="css" />
                        </div>
                        <div className='project-bot-con'>
                            <button><a href="https://github.com/saikhmirsat/Lovoda.com" target="_blank">Github Code</a></button>
                            <button><a href="https://lovoda-com-clone.vercel.app/" target="_blank">Live View</a></button>
                        </div>
                    </div>
                </div>
            </div>

            <div >
                <h1 className='git-Cal-Head'>GitHub Calendar </h1>
                <div className='calender_box'>
                    <GitHubCalendar username="saikhmirsat" />
                </div>
                <h1 className='git-Cal-Head'>My Statistics</h1>
                <div className='state-con'>
                    <motion.img whileHover={{ scale: 1.1 }}
                        src="https://streak-stats.demolab.com/?user=saikhmirsat&theme=buefy" alt="" />
                    <motion.img whileHover={{ scale: 1.1 }} src="https://github-readme-stats.vercel.app/api?username=saikhmirsat&show_icons=true&theme=algolia&count_private=true" alt="" />
                </div>
            </div>
        </div>
    )
}
