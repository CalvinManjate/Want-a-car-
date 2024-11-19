import React, { useState } from 'react';
import './App.css'

const WhatsAppForm = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        const formattedMessage = `Name: ${name}\nPhone: ${phone}\nMessage: ${message}`;
        const whatsappNumber = '+27683859712'; // Replace with your WhatsApp number
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(formattedMessage)}`;

        window.open(whatsappURL, '_blank');
    };

    return (
        <div className='contac_form'>
            <h1>Contact Us</h1>
            <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="phone">Phone Number:</label>
                    <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </div>
                <div >
                    <label htmlFor="message">Message:</label>
                    <textarea 
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" style={{padding:'17px 20px',border:'none',background:'#d83131',color:'white'}}>Submit</button>
            </form>
        </div>
    );
};

export default WhatsAppForm;
