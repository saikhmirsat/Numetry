import React from 'react'
import '../Components/Contact.css'

import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { motion } from 'framer-motion'
import { FaGithubSquare } from 'react-icons/fa'
import { MdOutlineMailOutline } from 'react-icons/md'
import { BsTelephoneOutbound } from 'react-icons/bs'
import { AiOutlineHome } from 'react-icons/ai'
import { GoMail } from 'react-icons/go'
import { TbPhoneCall } from 'react-icons/tb'

import Resume from '../Images/fw19_0481-Saikh-Mirsat.pdf'

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('saikh-mirsat', 'template_bfddh7r', form.current, '75y0iLRdVXUT5F4oX')
            .then((result) => {
                console.log(result.text);
                toast.success("Your message has been delivered")
            }, (error) => {
                console.log(error.text);
                toast.error("Error")
            });

    };

    const handelClick = () => {
        window.open("https://drive.google.com/file/d/1HxjdMB0DAuU5IfDJJvbWpfoq5d_0oTfp/view?usp=sharing", "_blank")
    }
    return (
        <div className='contact-container'>
            <div className='input-container'>
                <form ref={form} onSubmit={sendEmail}>
                    <h2 className='meg-me' >Messege me</h2>
                    <input type="text" name="user_name" placeholder='Name' /><br />
                    <input type="email" name="user_email" placeholder='Email' /><br />
                    <textarea name="message" placeholder='Message' /><br />
                    <input id='submitBTN' type="submit" value="Send message" />
                </form>
                <ToastContainer />
            </div>
            <div className='contact-con-child-2'>
                <div className='cont-con-child-2-con-1' >
                    <a
                        href={Resume}
                        target="_blank"
                        download={"fw19_0481-Saikh-Mirsat"}
                        _hover={{ TextDecoder: "none" }}

                        className='resume-btn-div'>
                        <button
                            download={Resume}
                            onClick={() => handelClick()}
                            className='resume-btn'>Resume</button>
                    </a>

                    {/* <h1 className='contact-me-head'>Contact Me</h1> */}
                    <div className='con-address-container'>
                        <div className='con-logo-container'><MdOutlineMailOutline color='#CF1C1A' />saikh.mirsat.786@gmail.com</div>
                        <div className='con-logo-container'><BsTelephoneOutbound color='#CF1C1A' />7205190819</div>
                        <div className='con-logo-container'><AiOutlineHome color='#CF1C1A' />Puri, 752107, Odisha</div>
                    </div>

                    <div style={{ display: 'flex', gap: "30px", marginTop: "30px", justifyContent: 'center' }}>
                        <motion.div
                            whileHover={{ scale: 1.3 }}
                        ><a href="https://www.linkedin.com/in/saikhmirsat/" target="_blank"><AiOutlineLinkedin className='linkedin' size="50px" color='#CF1C1A' /></a></motion.div>
                        <motion.div
                            whileHover={{ scale: 1.3 }}
                        ><a href="https://github.com/saikhmirsat" target="_blank"><FaGithubSquare className='linkedin' size="50px" color='#CF1C1A' /></a></motion.div>
                        <motion.div
                            whileHover={{ scale: 1.3 }}
                        ><a href="mailto:saikh.mirsat.786@gmail.com" target="_blank"><GoMail className='linkedin' size="50px" color='#CF1C1A' /></a></motion.div>
                        <motion.div
                            whileHover={{ scale: 1.3 }}
                        ><a href="tel:7205190819" ><TbPhoneCall className='linkedin' size="50px" color='#CF1C1A' /></a></motion.div>

                    </div>
                </div>
            </div>
        </div>
    )
}
