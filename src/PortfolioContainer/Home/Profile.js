import React from 'react';
import Typical from 'react-typical';
import './Profile.css';

export default function Profile() {
    return(
        <div className='profile-container'>
            <div className = 'profile-parent'>
                <div className = 'profile-details'>
                <div className = 'colz'>
                    <div className = 'colz-icon'>

                    <a href="https://www.linkedin.com/in/aniruddha-jana-aj/">
                        <i className='fa fa-linkedin-square'></i>
                    </a>
                    <a href="https://www.instagram.com/_anirudh.jana_/">
                        <i className='fa fa-instagram'></i>
                    </a>
                    </div>
                </div>

                <div className='profile-details-name'>
                    <span className="primary-text">
                        {" "}
                        Hello, I'm <span className="highlighted-text">Aniruddha</span>
                    </span>
                </div>
                <div className='profile-details-role'>
                    <span className="primary-text">
                        {" "}
                        <h1>
                            {" "}
                            <Typical
                            loop={Infinity}
                            steps={[
                            "Datascience Enthusiast 📊",
                            3000,
                            "Python Developer",
                            3000,
                            "Frontend Developer 🧑",
                            3000,
                            "Flask Developer 💻",
                            3000,
                            ]}
                            />
                        </h1>
                        <span className="profile-role-tagline">
                            Knack of building scalable and robust web applications.
                        </span>
                    </span>
                </div>
                <div className='profile-options'>
                    <button className='btn primary-btn'>
                        {""}
                        Hire Me{" "}
                    </button>
                    <a href='resume.pdf' download='Aniruddha_Jana.pdf'>
                        <button className='btn highlighted-btn'>Get Resume</button>
                    </a>
                </div>
            </div>
            <div className='profile-picture'>
                <div className='profile-picture-background'>
                </div>
            </div>
        </div>
        </div>

    )
    
}