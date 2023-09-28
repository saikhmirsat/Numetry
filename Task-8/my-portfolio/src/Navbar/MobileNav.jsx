import React from 'react'
import '../Navbar/Navbar.css'
import { useState } from 'react';

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button
} from '@chakra-ui/react'

import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineHome } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';
import { BsInfoCircleFill } from 'react-icons/bs';
import { GiSkills } from 'react-icons/gi';
import { GoDeviceDesktop } from 'react-icons/go';
import { BiPhoneCall } from 'react-icons/bi';
import { MdOutlineSimCardDownload } from 'react-icons/md';

import Resume from '../Images/fw19_0481-Saikh-Mirsat.pdf'

export default function MobileNav({ home, about, skills, projects, contacts }) {
    const [see, setSee] = useState(false)
    console.log(see)


    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    const gotoSection = (sec) => {
        if (sec === 'home') {
            home()
        } else if (sec === 'about') {
            about()
        } else if (sec === 'skills') {
            skills()
        } else if (sec === 'projects') {
            projects()
        } else if (sec === 'contacts') {
            contacts()
        }
        setSee(false)
        onClose()

    }

    const handelDownload = () => {
        window.open("https://drive.google.com/file/d/1HxjdMB0DAuU5IfDJJvbWpfoq5d_0oTfp/view?usp=sharing", "_blank")
    }

    return (
        <div className='mobile_nav_div'>

            <button className='mobile_nav_hamburger' id={see ? "closeBTN" : ""} onClick={() => {
                onOpen()
                setSee(true)
            }}>
                <RxHamburgerMenu color='white' />
            </button>
            <Drawer
                isOpen={isOpen}
                placement='top'
                onClose={onClose}
                finalFocusRef={btnRef}

            >

                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton className='hamburger_close_btn' onClick={() => setSee(false)} />
                    <DrawerBody className='draw_body'>
                        <div className='mobile_icon_div' onClick={() => gotoSection('home')}><AiOutlineHome /><h2>Home</h2></div>
                        <div className='mobile_icon_div' onClick={() => gotoSection('about')}><BsInfoCircleFill /><h2>About Me</h2></div>
                        <div className='mobile_icon_div' onClick={() => gotoSection('skills')}><GiSkills /><h2>Skills</h2></div>
                        <div className='mobile_icon_div' onClick={() => gotoSection('projects')}><GoDeviceDesktop /><h2>Projects</h2></div>
                        <div className='mobile_icon_div' onClick={() => gotoSection('contacts')}><BiPhoneCall /><h2>Contacts</h2></div>
                        <div className='mobile_icon_div'><MdOutlineSimCardDownload /><a
                            href={Resume}
                            target="_blank"
                            download={"fw19_0481-Saikh-Mirsat"}
                            _hover={{ TextDecoder: "none" }}
                        ><h2
                            download={Resume}
                            onClick={() => handelDownload()}
                        >Resume</h2></a></div>
                    </DrawerBody>

                    <DrawerFooter>


                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>
    )
}
