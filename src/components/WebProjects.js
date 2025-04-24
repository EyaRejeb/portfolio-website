import React from 'react';
import minipharmacie from '../assets/mini-pharmacie Eya Rejeb.png';
import timetracking from '../assets/time-tracking.png';
import restaurant from '../assets/resto.png';
import techweb from '../assets/tech-website.png';

import '../DesignProjects.css';  // reuse the same styling

function WebProjects() {
    const webProjects = [
        {
            id: 1,
            src: minipharmacie,
            alt: 'Mini Pharmacy App',
            title: 'Mini Pharmacy',
            description: 'A front-end medication management SPA built with Vue.js - manage medicament',
            link: 'https://pharmacie-eya-mini-projet.vercel.app/'
        },
        {
            id: 2,
            src: timetracking,
            alt: 'Time Tracking App',
            title: 'Time Tracking App',
            description: 'A collaborative time-logging tool to track hours, generate timesheets, group users, and visualize team statistics; built with Vue.js and Spring-boot.',
            link: 'https://time-tracking.koyeb.app'
        },
        {
            id: 3,
            src: restaurant,
            alt: 'Restaurant App',
            title: 'Restaurant System',
            description: 'A full-stack reservation & menu management app; browse menus, book tables, and manage orders in real time.',
            link: 'https://github.com/EyaRejeb/Restaurant'
        },
        {
            id: 4,
            src: techweb,
            alt: 'Tech Website',
            title: 'Web Tech Community',
            description: 'A community portal offering free mentorship, software dev & product design programs, and an interactive registration flow.',
            link: 'https://github.com/EyaRejeb/tech-website'
        }
    ];

    return (
        <div className="design-gallery">
            <h2 className="design-gallery-title">Web Development Projects</h2>
            <p className="design-gallery-subtitle">
                A showcase of dynamic, responsive web applications demonstrating full-stack and front-end skills.
            </p>
            <div className="gallery-grid">
                {webProjects.map((proj) => (
                    <a
                        key={proj.id}
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="gallery-item"
                    >
                        <img src={proj.src} alt={proj.alt} className="gallery-image" />
                        <div className="gallery-item-overlay">
                            <h3>{proj.title}</h3>
                            <p>{proj.description}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default WebProjects