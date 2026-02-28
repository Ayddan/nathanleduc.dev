import React from 'react'

// Tech svg's
import htmlSvgLight from '../assets/svg/technos-logos/light/html.svg'
import cssSvgLight from '../assets/svg/technos-logos/light/css.svg'
import jsSvgLight from '../assets/svg/technos-logos/light/js.svg'
import tsSvgLight from '../assets/svg/technos-logos/light/ts.svg'
import nodeSvgLight from '../assets/svg/technos-logos/light/node.svg'
import reactSvgLight from '../assets/svg/technos-logos/light/react.svg'
import nextSvgLight from '../assets/svg/technos-logos/light/next.svg'
import phpSvgLight from '../assets/svg/technos-logos/light/php.svg'
import modxSvgLight from '../assets/svg/technos-logos/light/modx.svg'
import wpSvgLight from '../assets/svg/technos-logos/light/wp.svg'

import htmlSvgDark from '../assets/svg/technos-logos/dark/html.svg'
import cssSvgDark from '../assets/svg/technos-logos/dark/css.svg'
import jsSvgDark from '../assets/svg/technos-logos/dark/js.svg'
import tsSvgDark from '../assets/svg/technos-logos/dark/ts.svg'
import nodeSvgDark from '../assets/svg/technos-logos/dark/node.svg'
import reactSvgDark from '../assets/svg/technos-logos/dark/react.svg'
import nextSvgDark from '../assets/svg/technos-logos/dark/next.svg'
import phpSvgDark from '../assets/svg/technos-logos/dark/php.svg'
import modxSvgDark from '../assets/svg/technos-logos/dark/modx.svg'
import wpSvgDark from '../assets/svg/technos-logos/dark/wp.svg'

const TechStack = ({theme})=> {
    return(
        <section className="container" id="tech-stack">
            <div className="title-wrapper">
                <h2 className="title-with-decoration">Tech Stack</h2>
                <hr className="separator"/>
            </div>
            <ul className="tech-list">
                <li className="tech-element">
                    <img src={theme === 'dark' ? htmlSvgLight.src : htmlSvgDark.src} alt="HTML"/>
                    <h2>HTML</h2>
                </li>
                <li className="tech-element">
                <img src={theme === 'dark' ? cssSvgLight.src : cssSvgDark.src} alt="CSS"/>
                    <h2>CSS</h2>
                </li>
                <li className="tech-element">
                    <img src={theme === 'dark' ? jsSvgLight.src : jsSvgDark.src} alt="JAVASCRIPT"/>
                    <h2>JAVASCRIPT</h2>
                </li>
                <li className="tech-element">
                    <img src={theme === 'dark' ? tsSvgLight.src : tsSvgDark.src} alt="TYPESCRIPT"/>
                    <h2>TYPESCRIPT</h2>
                </li>
                <li className="tech-element">
                    <img src={theme === 'dark' ? nodeSvgLight.src : nodeSvgDark.src} alt="NODEJS"/>
                    <h2>NODEJS</h2>
                </li>
                <li className="tech-element">
                    <img src={theme === 'dark' ? reactSvgLight.src : reactSvgDark.src} alt="REACT"/>
                    <h2>REACT</h2>
                </li>
                <li className="tech-element">
                    <img src={theme === 'dark' ? nextSvgLight.src : nextSvgDark.src} alt="NEXT"/>
                    <h2>NEXT</h2>
                </li>
                <li className="tech-element">
                    <img src={theme === 'dark' ? phpSvgLight.src : phpSvgDark.src} alt="PHP"/>
                    <h2>PHP</h2>
                </li>
                <li className="tech-element">
                    <img src={theme === 'dark' ? modxSvgLight.src : modxSvgDark.src} alt="MODX"/>
                    <h2>MODX</h2>
                </li>
                <li className="tech-element">
                    <img src={theme === 'dark' ? wpSvgLight.src : wpSvgDark.src} alt="WORDPRESS"/>
                    <h2>WORDPRESS</h2>
                </li>
            </ul>
        </section>
    )
}

export default TechStack