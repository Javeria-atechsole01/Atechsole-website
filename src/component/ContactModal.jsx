import React from 'react';
import './ContactModal.css'

const ContactModal = ({ isOpen, onClose }) => {
  return (
    <div className={`contact-modal-overlay ${isOpen ? 'open' : ''}`}>
    
      <div className="contact-modal-backdrop" onClick={onClose}></div>
      
      <div className="contact-modal-content">
        <button className="close-btn" onClick={onClose}>&times;</button>
        
        <div className="contact-container">
          <div className="contact-left">
            <h1>Send a <span className="highlight">message.</span></h1>
            <div className="contact-details">
              <p>Email: info@atechsole.com</p>
              <p>Phone: +92 325 3344552</p>
            </div>
          </div>
          
          <div className="contact-right">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="form-group">
                  <label>Your name</label>
                  <input type="text" placeholder="Full name" />
                </div>
                <div className="form-group">
                  <label>Email address</label>
                  <input type="email" placeholder="Email Address" />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>(Optional)</label>
                  <input type="tel" placeholder="Phone number" />
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <input type="text" placeholder="Subject" />
                </div>
              </div>
              
              <div className="form-group full-width">
                <label>Your message</label>
                <textarea placeholder="Tell us what you want to know?"></textarea>
              </div>
              
              <div className="form-footer">
                <label className="checkbox-label">
                  <input type="checkbox" />
                  <span>I am bound by the terms of the Service I accept Privacy Policy</span>
                </label>
                
                <button type="submit" className="submit-btn">Send message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
