import { useEffect, useState } from 'react';
import './styles/css/style.css';
import Lottie from 'react-lottie-player';
import gsap from 'gsap'

// Images
import schertz from './assets/jpg/schertz.jpg';
import todoApp from './assets/jpg/todo.jpg';
import cefimVote from './assets/jpg/cefimvote.jpg';
import tomleduc from './assets/jpg/tom-leduc.jpg';
import flinbu from './assets/jpg/flinbu.jpg';

// Components
import Timeline from './components/Timeline';
import Hero from './components/Hero';

// Lottie
import * as toogleThemeData from './assets/lottie/toogle-theme.json';
import * as burgerButtonData from './assets/lottie/burger-button.json';
import * as burgerButtonDarkData from './assets/lottie/burger-button-dark.json';

function App() {
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
        x:-100,
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
                <a href='mailto:nathanleduc.dev@gmail.com'>Contact</a>
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
            <a className='project-illustration' target='_blank' href='https://schertz.fr/'>
              <img src={schertz}/>
            </a>
            <a className='project-name' target='_blank' href='https://schertz.fr/'>Schertz.fr (Réalisé au sein de Ackwa)</a>
          </li>
          <li className='project-card'>
            <a className='project-illustration' target='_blank' href='https://todo-app-three-sable.vercel.app/'>
              <img src={todoApp}/>
            </a>
            <a className='project-name' target='_blank' href='https://todo-app-three-sable.vercel.app/'>Todo app</a>
          </li>
          <li className='project-card'>
            <a className='project-illustration' href='#'>
              <img src={cefimVote}/>
            </a>
            <a className='project-name' href='#'>CefimVote (Non disponible)</a>
          </li>
          <li className='project-card'>
            <a className='project-illustration' target='_blank' href='http://tomleduc.fr/'>
              <img src={tomleduc}/>
            </a>
            <a className='project-name' target='_blank' href='http://tomleduc.fr/'>tomleduc.fr</a>
          </li>
          <li className='project-card'>
            <a className='project-illustration' target='_blank' href='https://flinbu-oognd9w6y-ayddan.vercel.app/'>
              <img src={flinbu}/>
            </a>
            <a className='project-name' target='_blank' href='https://flinbu-oognd9w6y-ayddan.vercel.app/'>Flinbu</a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default App;
