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

export default function Home() {
  const [theme,setTheme] = useState('dark')
  const [play,setPlay] = useState(false)
  const [direction,setDirection] = useState(-1)
  const [burgerDirection, setBurgerDirection] = useState(-1)
  const [burgerPlay, setBurgerPlay] = useState(false)
  const [burgerMenuOpen, setBurgerMenu] = useState(false)

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
      <Timeline/>
      <section className='container' id='projects'>
        <div className='title-wrapper'>
            <h2 className='hero-title title-with-decoration'>Mes projets</h2>
            <hr className="separator"/>
        </div>
        <ul className='project-list'>
          <li className='project-card'>
            <a className='project-illustration' target='_blank' rel="noreferrer" href='https://schertz.fr/'>
              <img src={schertz.src}/>
            </a>
            <a className='project-name' target='_blank' rel="noreferrer" href='https://schertz.fr/'>Schertz.fr (Réalisé au sein de Ackwa)</a>
          </li>
          <li className='project-card'>
            <a className='project-illustration' target='_blank' rel="noreferrer" href='http://tomleduc.fr/'>
              <img src={tomleduc.src}/>
            </a>
            <a className='project-name' target='_blank' rel="noreferrer" href='http://tomleduc.fr/'>tomleduc.fr</a>
          </li>
          <li className='project-card'>
            <a className='project-illustration' target='_blank' href='https://lademeuredezoe.com/'>
              <img src={laDemeureDeZoe.src}/>
            </a>
            <a className='project-name' target='_blank' href='https://lademeuredezoe.com/'>lademeuredezoe.com</a>
          </li>
          <li className='project-card'>
            <a className='project-illustration' target='_blank' href='https://pickme-nine.vercel.app/'>
              <img src={clickpick.src}/>
            </a>
            <a className='project-name' target='_blank' href='https://pickme-nine.vercel.app/'>ClickPick (Work in progress)</a>
          </li>
          <li className='project-card'>
            <a className='project-illustration' target='_blank' href='https://card-game-henna.vercel.app/'>
              <img src={cardGame.src}/>
            </a>
            <a className='project-name' target='_blank' href='https://card-game-henna.vercel.app/'>Card game (Work in progress)</a>
          </li>
          <li className='project-card'>
            <a className='project-illustration' href='#'>
              <img src={cefimVote.src}/>
            </a>
            <a className='project-name' href='#'>CefimVote (indisponible)</a>
          </li>
          <li className='project-card'>
            <a className='project-illustration' target='_blank' rel="noreferrer" href='https://todo-app-three-sable.vercel.app/'>
              <img src={todoApp.src}/>
            </a>
            <a className='project-name' target='_blank' rel="noreferrer" href='https://todo-app-three-sable.vercel.app/'>Todo app</a>
          </li>
          <li className='project-card'>
            <a className='project-illustration' target='_blank' rel="noreferrer" href='https://flinbu-oognd9w6y-ayddan.vercel.app/'>
              <img src={flinbu.src}/>
            </a>
            <a className='project-name' target='_blank' rel="noreferrer" href='https://flinbu-oognd9w6y-ayddan.vercel.app/'>Flinbu</a>
          </li>
          <li className='project-card'>
            <a className='project-illustration' target='_blank' rel="noreferrer" href='https://scroll-game-ten.vercel.app/'>
              <img src={scrollGame.src}/>
            </a>
            <a className='project-name' target='_blank' rel="noreferrer" href='https://scroll-game-ten.vercel.app/'>Scroll game</a>
          </li>
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
