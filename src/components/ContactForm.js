import React, { useRef, useState } from "react";
import Lottie from "react-lottie-player";

// Lottie
import validationAnimationData from '../assets/lottie/validation.json';

const ContactForm = () => {
    const validationAnimation = useRef(null);
    const [status, setStatus] = useState("Envoyer");
    const [validationPlay, setValidationPlay] = useState(false);
    const [modalClass, setModalClass] = useState('hide');
    const [modalMessage, setModalMessage] = useState('');
    const [validResponse, setValidResponse] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Envoi...");
        const { name, email, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };
        let response = await fetch(`/api/contact`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        setStatus("Envoyer");
        let result = await response.json();
        if(response.status === 200) setValidResponse(true);
        else setValidResponse(false);
        playContactValidation(result);
        name.value = '';
        email.value = '';
        message.value = '';
    };

    const playContactValidation = (result) => {
        setModalClass('');
        setModalMessage(result.status);
        setTimeout(()=>setValidationPlay(true),300);
    }

    return (
        <>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="name">Nom / Entreprise</label>
                        <input type="text" id="name" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" required/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" required />
                </div>
                <button className="button-1" type="submit">{status}</button>
            </form>
            <div className={`contact-validation-modal ${modalClass}`}>
                {validResponse ? (
                    <Lottie
                        ref={validationAnimation}
                        loop={false}
                        play={validationPlay}
                        speed={1}
                        animationData={validationAnimationData}
                        style={{
                            width: 150
                        }}
                    />
                )
                :null}
                <p>{modalMessage ? modalMessage : ''}</p>
                <button className="button-1" onClick={()=>setModalClass('hide')}>Fermer</button>
            </div>
        </> 
    )
}

export default ContactForm;