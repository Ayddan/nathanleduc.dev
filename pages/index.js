import React, { useEffect, useState, useRef } from 'react';
import Lottie from 'react-lottie-player';
import gsap from 'gsap'
import Link from 'next/link';

import githubDarkSvg from '../src/assets/svg/github-dark.svg';
import githubLightSvg from '../src/assets/svg/github-light.svg';

// Components
import Timeline from '../src/components/Timeline';
import Hero from '../src/components/Hero';
import ContactForm from '../src/components/ContactForm';

// Lottie
import * as toogleThemeData from '../src/assets/lottie/toogle-theme.json';
import * as burgerButtonData from '../src/assets/lottie/burger-button.json';
import * as burgerButtonDarkData from '../src/assets/lottie/burger-button-dark.json';

export default function Home() {
  const [theme,setTheme] = useState('dark')
  const [play,setPlay] = useState(false)
  const [direction,setDirection] = useState(-1)
  const [burgerDirection, setBurgerDirection] = useState(-1)
  const [burgerPlay, setBurgerPlay] = useState(false)
  const [burgerMenuOpen, setBurgerMenu] = useState(false)
  const [projects, setProjects] = useState([])
  const projectRefs = useRef([])
  const [projectOpen, setProjectOpen] = useState(-1)
  const [projectInitialPosition, setProjectInitialPosition] = useState({x: null,y: null, width: 0, height: 0})
  const backgroundBlur = useRef()

  const toogleTheme = () => {
    if(theme === 'light') setTheme('dark')
    else setTheme('light')

    setPlay(true)
    if(direction === 1) setDirection(-1)
    else setDirection(1)
    setBurgerPlay(true)
  }

  const toogleBurgerMenu = () => {
    if(burgerMenuOpen){
      gsap.to('.header-nav',{
        x: 0,
        duration: .3
      })
      setBurgerMenu(false)
      setBurgerDirection(-1)
      setBurgerPlay(true)
    }else{
      gsap.to('.header-nav',{
        x:-120,
        duration: .3
      })
      setBurgerMenu(true)
      setBurgerDirection(1)
      setBurgerPlay(true)
    }
  }

  const backgroundBlurClick = () => {
    if(!backgroundBlur.current.classList.contains('active')) return
    let el = projectRefs.current[projectOpen]
    backgroundBlur.current.classList.remove('active')
    gsap.to(`#card-${projectOpen}`,{
      top: projectInitialPosition.y,
      left: projectInitialPosition.x,
      width: projectInitialPosition.width,
      height: projectInitialPosition.height,
      zIndex: 6,
    })
    setTimeout(()=>{
      backgroundBlur.current.classList.remove('clickable')
      document.body.classList.remove('locked')
      el.parentNode.classList.remove('abs')
      el.classList.remove('abs')
      el.style.width = null
      el.style.height = null
      el.style.top = null
      el.style.left = null
      el.style.zIndex = null
      setProjectOpen(-1)
    },1000)
  }

  const openProject = (i,id) => {
    // if(projectOpen === i) return
    let el = projectRefs.current[i]
    let rect = el.getBoundingClientRect()
    setProjectOpen(i)
    setProjectInitialPosition({x: rect.left,y: rect.top,width: rect.width,height: rect.height})
    el.parentNode.classList.add('abs')
    el.classList.add('abs')
    document.body.classList.add('locked')
    backgroundBlur.current.classList.add('active')
    backgroundBlur.current.classList.add('clickable')
    gsap.fromTo(id,{
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height,
      zIndex: 6
    },
    {
      top: 100,
      left: window.innerWidth / 2 - (window.innerWidth / 2) / 2,
      width: window.innerWidth / 2,
      height: window.innerHeight - 200
    })
  }

  useEffect(()=>{
    document.title= "Nathan Leduc | Dev Web"
    // Retrieve projects data
    fetch(`/api/project-infos`)
    .then(resp=>resp.json())
    .then(data=>{
      setProjects(data.results)
    })
  },[])
  
  return (
    <div className={`App ${theme}`}>
      <div className="background-blur" ref={backgroundBlur} onClick={()=>backgroundBlurClick()}></div>
      <header>
        <div className='App-header container'>
          <h2 className='site-title'>Nathan Leduc</h2>
          <nav className='header-nav'>
            <ul>
              <li>
                <a href='#projects'>Projets</a>
              </li>
              <li>
                <a href='#journey'>Parcours</a>
              </li>
              <li>
                <a href='#contact'>Contact</a>
              </li>
              <li>
                <button className='toogle-theme' onClick={()=>{toogleTheme()}}>
                  <Lottie
                    loop={false}
                    play={play}
                    speed={2}
                    direction={direction}
                    onComplete={()=>setPlay(false)}
                    animationData={toogleThemeData}
                  />
                </button>
              </li>
            </ul>
          </nav>
          <button className='burger-button' onClick={()=>{toogleBurgerMenu()}}>
            <Lottie
              loop={false}
              play={burgerPlay}
              speed={2}
              direction={burgerDirection}
              segments={[0,25]}
              onComplete={()=>setBurgerPlay(false)}
              animationData={theme === 'light' ? burgerButtonDarkData : burgerButtonData}
            />
          </button>
        </div>
      </header>
      <Hero theme={theme}/>
      <Timeline/>
      <section className='container' id='projects'>
        <div className='title-wrapper'>
            <h2 className='hero-title title-with-decoration'>Mes projets</h2>
            <hr className="separator"/>
        </div>
        <ul className='project-list'>
          { projects.length > 0 ?
            projects.map((e,i)=>(
              <li className='project-card' key={i} onClick={()=>openProject(i,`#card-${i}`)}>
                <div className="card-content" id={`card-${i}`} ref={(el) => projectRefs.current.push(el)}>
                  <img
                      className='project-illustration'
                      src={e.cover && e.cover.file ? e.cover.file.url : ''} 
                      alt={e.properties.Nom.title[0].plain_text}
                      />
                  <div className="project-infos-wrapper">
                    <h2 className='project-title'>{e.properties.Nom.title[0].plain_text}</h2>
                    <p className="project-description">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                    </p>
                  </div>
                  {/* <a className='project-name' target='_blank' rel="noreferrer" href={e.properties.url.url}>{e.properties.Nom.title[0].plain_text}</a> */}
                </div>
              </li>
            )) : null
          }
        </ul>
        <div className='project-modal'>
          <div className='modal-content'>
            <img  className='project-cover' src='' alt='' />
            <div className='title-row'>
              <h2 className='project-title'>Titre</h2>
              <a className='github' href=''>
                <img src={theme === 'light' ?  githubLightSvg.src : githubDarkSvg.src}/>
              </a>
            </div>
            <p className='project-description'>Description</p>
            <h2 className='hero-title'>Technos</h2>
            <ul className='technos-list'>
              <li>
                <img className='tech-logo' src='' alt=''/>
              </li>
            </ul>
            <a className='button-1'>Visiter</a>
          </div>
        </div>
      </section>
      <section className='container' id='contact'>
        <div className='title-wrapper'>
            <h2 className='hero-title title-with-decoration'>Me contacter</h2>
            <hr className="separator"/>
        </div>
        <ContactForm/>
      </section>
    </div>
  )
}
