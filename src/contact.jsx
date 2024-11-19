import React from 'react';
import './App.css';

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1 className="textBlock12">CONTACT OUR HEAD OFFICE</h1>
        <p>
          Any queries, comments, compliments or complaints? We’re happy to help you! 
          Send us a message by filling in the form below:
        </p>
      </div>

      <div className="contact-details">
        <p>You can also contact us directly using the details below:</p>
        <p>Want-A-Car Head Office</p>

        <div className="contact-card">
          <div className="icon-container">
            <img
              src="https://carservicecity.net/wp-content/uploads/2023/08/Phone.svg"
              alt="Phone Icon"
              width="35"
              height="50"
            />
          </div>
          <div>
            <p>0683869712</p>
          </div>
          <div>
            <a href="tel:0683869712">
              <button className="contact-button">Call Us</button>
            </a>
          </div>
        </div>

        <div className="contact-card">
          <div className="icon-container">
            <img
              src="https://carservicecity.net/wp-content/uploads/2023/08/Phone.svg"
              alt="Email Icon"
              width="35"
              height="50"
            />
          </div>
          <div>
            <p>manjatecalvin@gmail.com</p>
          </div>
          <div>
            <a href="mailto:manjatecalvin@gmail.com">
              <button className="contact-button">Email Us</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
