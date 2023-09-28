import React, { useEffect, useRef } from 'react'
import { useState } from 'react';
import '../Components/Home.css'

import homeVid from '../Images/Home_background.mp4'

import Typewriter from 'typewriter-effect';

import { BsLinkedin } from 'react-icons/bs';
import { VscGithub } from 'react-icons/vsc';
import { TfiEmail } from 'react-icons/tfi';

export default function Home() {
  const videoEl = useRef(null);
  const videoEl2 = useRef(null);
  const videoEl3 = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };
  const attemptPlay2 = () => {
    videoEl2 &&
      videoEl2.current &&
      videoEl2.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };
  const attemptPlay3 = () => {
    videoEl3 &&
      videoEl3.current &&
      videoEl3.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };


  useEffect(() => {
    attemptPlay();
    attemptPlay2();
    attemptPlay3();
  }, []);

  const [state] = useState({
    title: "Hi,",
    title2: "I'm",
    title3: "Saikh Mirsat"
  })

  return (
    <div className='home'>
      <video
        className='home_video'
        playsInline
        loop
        muted
        controls={false}
        alt="All the devices"
        src={homeVid}
        ref={videoEl}
      />
      <video
        className='home_video_mobile'
        playsInline
        loop
        muted
        controls={false}
        alt="All the devices"
        src={homeVid}
        ref={videoEl2}
      />
      <video
        className='home_video_mobile'
        playsInline
        loop
        muted
        controls={false}
        alt="All the devices"
        src={homeVid}
        ref={videoEl3}
      />
      <div className='home_container'>


        <div className='Header-intro'>
          <h2>
            <div className='title'>{state.title}</div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
              <div className='title2'>{state.title2}</div><div style={{ color: '#cf1c1a' }}>{state.title3}</div>
            </div>
            {/* <div className='title3'>{state.title3}</div> */}
          </h2>
          <div className='text'>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 40,
                strings: ['I love Problem Solving...',
                  'I love Coding',
                  'I love Debugging',
                  'I love Web Designing'
                ],
              }}
            />
          </div>
          <div className='home_social_con'>
            <div>
              <BsLinkedin />
            </div>
            <div>
              <VscGithub />
            </div>
            <div>
              <TfiEmail />
            </div>
          </div>
          <button className='home_contact_btn'>Contact</button>
        </div>
      </div>
    </div>
  )
}
