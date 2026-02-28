import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import dynamic from 'next/dynamic';
import SectionTitle from '../ui/SectionTitle';
import * as validationData from '../../assets/lottie/validation.json';

const Lottie = dynamic(() => import('react-lottie-player'), { ssr: false });

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.form-group, .form-row', {
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    const formData = new FormData(e.target);
    const body = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      setShowModal(true);
      e.target.reset();
    } catch {
      // silently fail
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="section container" id="contact" ref={sectionRef}>
      <div className="contact-header">
        <SectionTitle>Travaillons ensemble</SectionTitle>
        <p className="contact-intro">
          Un projet en tête ? N&apos;hésitez pas à me contacter.
        </p>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Nom</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="subject">Sujet</label>
          <input type="text" id="subject" name="subject" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required />
        </div>
        <button type="submit" className="btn" disabled={sending}>
          {sending ? 'Envoi...' : 'Envoyer'}
        </button>
      </form>

      <div className={`contact-validation-modal ${showModal ? '' : 'hide'}`}>
        <Lottie
          loop={false}
          play={showModal}
          animationData={validationData}
          style={{ width: 150, height: 150 }}
        />
        <p>Message envoyé avec succès !</p>
        <button className="btn" onClick={() => setShowModal(false)}>Fermer</button>
      </div>
    </section>
  );
}
