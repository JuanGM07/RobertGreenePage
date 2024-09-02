import React from 'react';
import './AboutMe.css'; // Importa los estilos

const AboutMe = () => {
    return (
        <div className="about-me">
            <div className="me-photo-container">
                <img 
                    src="JGM.png" 
                    alt="Robert Greene"
                    className="me-photo"
                />
            </div>
            <div className="bio-text">
                <h1>About Me</h1>
                <p>
                Hi, I am Juan Gonzalez. A 21 years old guy, studying mechanical engineering, but passionate about sofware developing.
                </p>
                <p>
                I have done this project as a personal thank you to Robert, for what his books and knowledge have given me.
                </p>
                <p>
                I'm not doing it for that purpose, but nothing would make me more excited for Robert to see this page, so that he would realize, although he already knows, the impact it has had on the lives of so many people. If you liked it, share the page so it reaches Robert.                </p>
                <div className="social-media">
                    <h3>
                    Follow me on social networks:</h3>
                    <ul>
                        <li>
                            <img src="twitter.png" alt="Twitter" className="social-icon"/>
                            <a href="https://x.com/JGMDeV" target="_blank" rel="noopener noreferrer">Twitter</a>
                        </li>
                        <li>
                            <img src="tik-tok.png" alt="TikTok" className="social-icon"/>
                            <a href="https://www.tiktok.com/@jgmdev" target="_blank" rel="noopener noreferrer">Tiktok</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
