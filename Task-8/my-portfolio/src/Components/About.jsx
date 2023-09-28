import React from 'react'
import '../Components/About.css'
import Typewriter from 'typewriter-effect';

export default function About() {
    return (
        <div className='about'>
            <div className='about_con'>

            </div>
            <div className='about_me_box'>

                <div id='about-cont-child-1'>
                    <h1 className='about_me_heading'>About Me</h1>
                    <div className='aboutme-des-div'>
                        <h1 className='hi'>Hi....</h1>
                        <div className='animate-text-conataner'>
                            <h1>I'm Saikh Mirsat & I'm a &nbsp;</h1>
                            <div className='about-animate-text'>
                                <Typewriter
                                    options={{
                                        autoStart: true,
                                        loop: true,
                                        delay: 40,
                                        strings: ['Full Stack Developer',
                                            'Coder',
                                            'Problem Solver'
                                        ],
                                    }}
                                />
                            </div>
                        </div>

                        <h2 className='about-des'>A motivated, ambitious full stack web developer with MERN stack
                            expertise.I am Looking to launch a career as a web developer
                        </h2>

                    </div>
                </div>
                <div className='about_child_2'>
                    <div>
                        <img src="https://saikhmirsat.github.io/static/media/myPicture.0bd5ab69f956264c6997.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
