import { useEffect, useRef } from 'react';
import Head from 'next/head';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useTheme } from '../src/context/ThemeContext';
import Header from '../src/components/layout/Header';
import Footer from '../src/components/layout/Footer';
import Hero from '../src/components/sections/Hero';
import About from '../src/components/sections/About';
import TechStack from '../src/components/sections/TechStack';
import Experiences from '../src/components/sections/Experiences';
import Projects from '../src/components/sections/Projects';
import Contact from '../src/components/sections/Contact';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const { theme } = useTheme();

  return (
    <div className={`App ${theme}`}>
      <Head>
        <title>Nathan Leduc | Développeur Fullstack</title>
        <meta name="description" content="Portfolio de Nathan Leduc, développeur web fullstack - Java, Spring, React, Vue.js, PostgreSQL" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Experiences />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
