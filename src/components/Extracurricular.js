// src/components/Extracurricular.js
import React from 'react';
import {
    FaCalculator,
    FaCog,
    FaLeaf,
    FaMedal,
    FaFlask,
    FaBrain,
    FaMicrochip,
    FaChalkboardTeacher,
    FaCog as FaCogRepeat,
    FaUsers,
    FaLaptopCode,
    FaMicroscope,
    FaGlobe,
    FaRobot
} from 'react-icons/fa';
import '../Extracurricular.css';

// Image imports
import profileImg from '../assets/photos/eya1.jpeg';
import math1 from '../assets/math olympiad/math olympiad1.jpg';
//import math2 from '../assets/math olympiad/math olympiad2.jpg';
//import math3 from '../assets/math olympiad/math olympiad3.jpg';
import math4 from '../assets/math olympiad/math olympiad4.jpg';
//import math5 from '../assets/math olympiad/math olympiad5.jpg';
//import if17017a from '../assets/I-fest² 2017/I-fest² 20171.jpg';
import if17017b from '../assets/I-fest² 2017/I-fest² 20172.jpg';
import if17017c from '../assets/I-fest² 2017/I-fest² 20173.jpg';
import atastMin2 from '../assets/ATAST mini camp/ATAST mini camp1.jpg';
import atastMin1 from '../assets/ATAST mini camp/mini camp2.jpg';
import atastMin4 from '../assets/ATAST mini camp/mini camp3.jpg';
//import atastMin5 from '../assets/ATAST mini camp/mini camp5.jpg';
import technov1 from '../assets/technovation/technovation1.jpg';
import technov2 from '../assets/technovation/technovation2.jpg';
import atastTr171 from '../assets/training days 2017/training days 20173.jpg';
import atastTr172 from '../assets/training days 2017/training days 20171.jpg';
import atastTr173 from '../assets/training days 2017/training days 20174.jpg';
import if18018 from '../assets/I-fest² 2018/I-fest² 20188.jpg';
import if18018b from '../assets/I-fest² 2018/I-fest² 20185.jpg';
import if18018c from '../assets/I-fest² 2018/I-fest² 201810.jpeg';
//import env1 from '../assets/environment day/environment day1.jpeg';
import env2 from '../assets/environment day/environment day3.png';
import env3 from '../assets/environment day/environment day6.png';
import ok1 from '../assets/oksef/oksef1.png';
import ok2 from '../assets/oksef/oksef5.jpeg';
import ok3 from '../assets/oksef/oksef7.png';
import camp18a from '../assets/stcCamp/camp1.jpg';
//import camp18b from '../assets/camp/camp4.jpg';
import camp18c from '../assets/stcCamp/camp6.jpg';
import reinvest1 from '../assets/reinvest your project/reinvest your project.jpg';
import iot1 from '../assets/iot/iot1.jpg';
import iot2 from '../assets/iot/iot3.jpg';
//import iot3 from '../assets/iot/iot4.jpg';
import atastTr181 from '../assets/training days 2018/training days 20181.jpg';
import if19019a from '../assets/I-fest² 2019/I-fest² 20191.png';
import if19019b from '../assets/I-fest² 2019/I-fest² 20192.jpg';
import prog1 from '../assets/progate/progate1.jpg';
import prog2 from '../assets/progate/progate3.jpg';
//import gyv1 from '../assets/gyv/gyv1.jpg';
import gyv2 from '../assets/gyv/gyv3.jpg';
import gyv3 from '../assets/gyv/gyv5.jpg';
//import qubit1 from '../assets/photos/eya1.jpeg';
//import uztech1 from '../assets/photos/eya1.jpeg';

const activities = [
    { id: 1, title: 'Math Olympiad', icon: <FaCalculator />, date: 'June 1, 2014', images: [math1, math4], description: 'Sharpened logic & problem-solving at national Math Olympiad.' },
    { id: 2, title: 'I-FEST² 2017', icon: <FaCog />, date: 'March 16, 2017', images: [if17017b, if17017c], description: 'Showcased App Inventor game at I-FEST science fair.' },
    { id: 3, title: 'ATAST Mini Camp', icon: <FaFlask />, date: 'March 20, 2017', images: [atastMin1, atastMin2, atastMin4], description: 'Built Arduino-based smart irrigation system.' },
    { id: 4, title: 'Technovation Girls', icon: <FaUsers />, date: 'May 14, 2017', images: [technov1, technov2], description: 'Developed & pitched mobile app prototypes.' },
    { id: 5, title: 'ATAST Training 2017', icon: <FaChalkboardTeacher />, date: 'Nov 3–4, 2017', images: [atastTr171, atastTr172, atastTr173], description: 'Mastered Photoshop, 3D design & IoT basics.' },
    { id: 6, title: 'I-FEST² 2018', icon: <FaCogRepeat />, date: 'March 18, 2018', images: [if18018, if18018b, if18018c], description: 'Collaborated internationally at I-FEST.' },
    { id: 7, title: 'Environment Day 2018', icon: <FaLeaf />, date: 'May 2, 2018', images: [env2, env3], description: 'Co-created sustainable environment projects.' },
    { id: 8, title: 'OKSEF Turkey', icon: <FaMedal />, date: 'June 2018', images: [ok1, ok2, ok3], description: 'Presented research at OKSEF Turkey.' },
    { id: 9, title: 'STC Camp 2018', icon: <FaMicroscope />, date: 'Aug 28–Sep 2, 2018', images: [camp18a, camp18c], description: 'Immersed in programming & project management.' },
    { id: 10, title: 'Reinvest Your Project', icon: <FaBrain />, date: 'Nov 11, 2018', images: [reinvest1, reinvest1], description: 'Enhanced innovation & management skills.' },
    { id: 11, title: 'IoT Training', icon: <FaMicrochip />, date: 'Nov 25, 2018', images: [iot1, iot2], description: 'Hands-on IoT & sensor integration.' },
    { id: 12, title: 'ATAST Training 2018', icon: <FaChalkboardTeacher />, date: 'Dec 21–22, 2018', images: [atastTr181], description: 'Earned advanced STEM coaching certification.' },
    { id: 13, title: 'I-FEST² 2019', icon: <FaCogRepeat />, date: 'March 23, 2019', images: [if19019a, if19019b], description: 'Led workshops & demos at I-FEST.' },
    { id: 14, title: 'Progate Courses', icon: <FaLaptopCode />, date: 'May 27, 2019', images: [prog1, prog2], description: 'Completed web dev & programming courses.' },
    { id: 15, title: 'GYV Exchange 2020', icon: <FaGlobe />, date: 'Jun 28–Jul 17, 2020', images: [gyv2, gyv3], description: 'Developed leadership at Global Youth Village.' },
    { id: 16, title: 'Qubit by Qubit', icon: <FaLaptopCode />, date: '2020/2021', images: [], description: 'Studied quantum computing fundamentals.' },
    { id: 17, title: 'UzTechGirls STEM', icon: <FaUsers />, date: 'Sep 15–30, 2020', images: [], description: 'Mentored & learned in virtual STEM school.' },
    { id: 18, title: 'ISSATso Innovation', icon: <FaRobot />, date: '2021', images: [], description: 'Competed in ISSATso online innovation challenge.' },
];

export default function Extracurricular() {
    return (
        <section className="extra-section">
            {/* Overview Card */}
            <div className="overview-card">
                <img className="overview-img" src={profileImg} alt="Eya Rejeb" />
                <div className="overview-info">
                    <h1>Eya Rejeb</h1>
                    <p className="sub">STEM Enthusiast & Tech Innovator</p>
                    <div className="tags">
                        {activities.map(act => <span key={act.id} className="tag">{act.icon} {act.title}</span>)}
                    </div>
                </div>
            </div>
            {/* Activity Grid */}
            <div className="activity-grid">
                {activities.map(act => (
                    <div key={act.id} className="activity-card">
                        <div className="header">
                            <span className="icon-large">{act.icon}</span>
                            <span className="date">{act.date}</span>
                        </div>
                        <h2 className="title">{act.title}</h2>
                        <p className="desc">{act.description}</p>
                        {act.images.length > 0 && (
                            <div className="imgs">
                                {act.images.map((img,i)=><img key={i} src={img} alt={act.title}/>)}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
