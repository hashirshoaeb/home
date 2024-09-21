import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-container">
            <p>If you have any questions or would like to connect, feel free to reach out!</p>
            <div className="contact-info">
                <p>Email: <a href="mailto:vangerwen.willem@gmail.com">vangerwen.willem@gmail.com</a></p>
                <p>LinkedIn: <a href="https://www.linkedin.com/in/willem-van-gerwen-566112149/" target="_blank" rel="noopener noreferrer">Connect with me</a></p>
            </div>
        </div>
    );
};

export default Contact;
