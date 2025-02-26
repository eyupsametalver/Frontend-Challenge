import React from 'react';
import "./footer.css";


const Footer = () => {
  return (
    <div className='footer'>
      <h2 className="footer-title">Let’s work together on your next product.</h2>
      <div className="footer-container">
        <div className="footer-container-item1">
        <a href="mailto:smtalvr@gmail.com">smtalvr@gmail.com</a>
        </div>
        <div className="footer-links">
        <div className="footer-container-item">
        <a href="#" className="footer-link-item1">Blog</a>
        </div>
        <div className="footer-container-item">
        <a href="#" className="footer-link-item2">Github</a>
        </div>
        <div className="footer-container-item">
        <a href="#" className="footer-link-item">Linkedin</a>
        </div>
        </div>
      </div>
      <div className="footer-bottom-line"></div>
    </div>
  )
}

export default Footer;