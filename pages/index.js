import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie-player';
import gsap from 'gsap'

// Images
import schertz from '../src/assets/jpg/schertz.jpg';
import todoApp from '../src/assets/jpg/todo.jpg';
import cefimVote from '../src/assets/jpg/cefimvote.jpg';
import tomleduc from '../src/assets/jpg/tom-leduc.jpg';
import flinbu from '../src/assets/jpg/flinbu.jpg';
import scrollGame from '../src/assets/jpg/scroll-game.jpg';
import laDemeureDeZoe from '../src/assets/jpg/lademeuredezoe.jpg';
import clickpick  from '../src/assets/jpg/clickpick.jpg';
import cardGame  from '../src/assets/jpg/cardgame.jpg';

// Components
import Timeline from '../src/components/Timeline';
import Hero from '../src/components/Hero';
import ContactForm from '../src/components/ContactForm';

// Lottie
import * as toogleThemeData from '../src/assets/lottie/toogle-theme.json';
import * as burgerButtonData from '../src/assets/lottie/burger-button.json';
import * as burgerButtonDarkData from '../src/assets/lottie/burger-button-dark.json';
import TechStack from '../src/components/TechStack';

export default function Home() {
  const [theme,setTheme] = useState('dark')
  const [play,setPlay] = useState(false)
  const [direction,setDirection] = useState(-1)
  const [burgerDirection, setBurgerDirection] = useState(-1)
  const [burgerPlay, setBurgerPlay] = useState(false)
  const [burgerMenuOpen, setBurgerMenu] = useState(false)
  const [projects, setProjects] = useState([])

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
      <TechStack theme={theme}/>
      <Timeline/>
      <section className='container' id='projects'>
        <div className='title-wrapper'>
            <h2 className='hero-title title-with-decoration'>Mes projets</h2>
            <hr className="separator"/>
        </div>
        <ul className='project-list'>
          { projects.length > 0 ?
            projects.map((e,i)=>(
              <li className='project-card' key={i}>
                <a className='project-illustration'  target={e.properties.url.url !== '#' ? '_blank' : ''} rel="noreferrer" href={e.properties.url.url}>
                  <img src={e.cover && e.cover.file ? e.cover.file.url : ''} alt="Schertz"/>
                </a>
                <a className='project-name' target='_blank' rel="noreferrer" href={e.properties.url.url}>{e.properties.Nom.title[0].plain_text}</a>
              </li>
            )) : null
          }
        </ul>
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
