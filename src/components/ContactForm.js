import React, { useState } from "react";

const ContactForm = () => {
    const [status, setStatus] = useState("Envoyer");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Envoi...");
        const { name, email, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        setStatus("Envoyer");
        let result = await response.json();
        alert(result.status);
    };
  return (
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
    )
}

export default ContactForm;