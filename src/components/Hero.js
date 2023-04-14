import React, { useEffect } from "react";
import gsap from "gsap";

import nathanImg from '../assets/jpg/nathan.jpg';
import twitterDarkSvg from '../assets/svg/twitter-dark.svg';
import linkedinDarkSvg from '../assets/svg/linkedin-dark.svg';
import youtubeDarkSvg from '../assets/svg/youtube-dark.svg';
import twitterLightSvg from '../assets/svg/twitter-light.svg';
import linkedinLightSvg from '../assets/svg/linkedin-light.svg';
import youtubeLightSvg from '../assets/svg/youtube-light.svg';
import githubDarkSvg from '../assets/svg/github-dark.svg';
import githubLightSvg from '../assets/svg/github-light.svg';

const Hero = (props) => {
    useEffect(()=>{
        const entranceTimeline = gsap.timeline({paused: false})
        entranceTimeline.to('#hero-separator',{
            width: '115%',
            duration: 1,
            ease: 'Expo.Out'
        },1)
        .to('.hero-title',{
            y: 0,
            duration: 1,
            ease: 'Expo.Out'
        })
        .to('.hero .sub-title',{
            y: 0,
            duration: 1,
            ease: 'Expo.Out'
        },1.8)
    })

    return(
        <section className='hero container'>
            <div className='side-left'>
            <div className='title-wrapper'>
                <div className="text-box">
                    <h1 className='hero-title'>Nathan Leduc</h1>
                </div>
                <hr id="hero-separator"/>
                <div className="text-box">
                    <span className='sub-title'>Développeur web Fullstack</span>
                </div>
            </div>
            <div className='hero-buttons flex-center'>
                <a className='button-1' href='#projects'>Projets</a>
                <a className='button-1' href='#contact'>Contact</a>
            </div>
            <ul className='social-list'>
                <li>
                    <a target='_blank' rel="noreferrer" href='https://twitter.com/NathanLeduc5'>
                        <img src={props.theme === 'light' ?  twitterLightSvg.src : twitterDarkSvg.src}/>
                    </a>
                </li>
                <li>
                    <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/nathan-leduc-349561146/'>
                        <img src={props.theme === 'light' ?  linkedinLightSvg.src : linkedinDarkSvg.src}/>
                    </a>
                </li>
                <li>
                    <a target='_blank' rel="noreferrer" href='https://github.com/Ayddan'>
                        <img src={props.theme === 'light' ?  githubLightSvg.src : githubDarkSvg.src}/>
                    </a>
                </li>
                {/* <li>
                    <a>
                        <img src={props.theme === 'light' ?  youtubeLightSvg : youtubeDarkSvg}/>
                    </a>
                </li> */}
            </ul>
            </div>
            <img className='hero-avatar' src={nathanImg.src} alt='Photo de Nathan'/>
      </section>
    )
}

export default Hero;