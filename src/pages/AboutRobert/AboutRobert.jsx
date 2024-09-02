import React from 'react';
import './AboutRobert.css'; // Importa los estilos

const AboutRobert = () => {
    return (
        <div className="about-robert">
            <div className="author-photo-container">
                <img 
                    src="robert.jpeg" 
                    alt="Robert Greene"
                    className="author-photo"
                />
            </div>
            <div className="bio-text">
                <h1>About Robert Greene</h1>
                <p>
                Robert Greene is an American author, known for his books on power, strategy and seduction. 
                He studied at the University of California at Berkeley and at the University of Wisconsin-Madison, where he graduated in classics. 
                </p>
                <p>
                For Robert Greene, power is amoral, neither good nor bad. His best-selling book, the 48 laws of power, is a practical guide based on 3,000 years of universal history, supported by other great authors such as Sun-Tzu and Nicolas Machiavelli, created to explain the laws that govern power in any type of world. society.
                </p>
                <p>
                Greene lives in Los Angeles with his girlfriend Anna Biller, who is a filmmaker. He can speak up to 5 languages, in addition to being a skilled swimmer and cyclist.
                </p>
                <div className="social-media">
                    <h3>
                    Follow him on social networks:</h3>
                    <ul>
                        <li>
                            <img src="twitter.png" alt="Twitter" className="social-icon"/>
                            <a href="https://twitter.com/robertgreene" target="_blank" rel="noopener noreferrer">Twitter</a>
                        </li>
                        <li>
                            <img src="instagramlogo.png" alt="Instagram" className="social-icon"/>
                            <a href="https://www.instagram.com/robertgreeneofficial/" target="_blank" rel="noopener noreferrer">Instagram</a>
                        </li>
                        <li>
                            <img src="facebook.png" alt="Facebook" className="social-icon"/>
                            <a href="https://www.facebook.com/robertgreeneofficial" target="_blank" rel="noopener noreferrer">Facebook</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AboutRobert;



