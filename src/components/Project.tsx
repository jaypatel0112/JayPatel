import mock07 from '../assets/images/mock07.jpg';
import mock08 from '../assets/images/mock08.jpg';
import mock09 from '../assets/images/mock09.jpg';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/jaypatel0112/Course-Management-System-Project" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/jaypatel0112/Course-Management-System-Project" target="_blank" rel="noreferrer"><h2>Course Management Portal</h2></a>
                <p>Created the Course Management System which is a web application designed to streamline academic processes, offering features like course enrollment, student accounts, event management, and equipment rental. Built with Spring Boot for the backend and HTML/CSS/JavaScript for the frontend, it provides a user-friendly platform for students and instructors.</p>
            </div>
            <div className="project">
                <a href="https://github.com/jaypatel0112/Tuner" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/jaypatel0112/Tuner" target="_blank" rel="noreferrer"><h2>Tuner IOS Application</h2></a>
                <p>Built a Tuner app that allows users to explore and play music across various genres and artists. The app integrates Firebase for Google authentication, fetches dynamic content like genres, albums, and songs using API requests, and features a user-friendly interface with a music player. Users can like songs, view favorite tracks, and enjoy a seamless music discovery experience.</p>
            </div>
            <div className="project">
                <a href="https://github.com/jaypatel0112/GroceryApplication/" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/jaypatel0112/GroceryApplication/" target="_blank" rel="noreferrer"><h2>Grocery Android Application</h2></a>
                <p>Developed a Basic Grocery Application to showcase the core features of an online shopping platform. The app includes user login functionality, a main dashboard for browsing grocery items, and a secure payment page. It offers a simple and intuitive experience for users to explore the process of online grocery shopping.</p>
            </div>
            <div className="project">
                <a href="https://github.com/jaypatel0112/Line_Following_Robot" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/jaypatel0112/Line_Following_Robot" target="_blank" rel="noreferrer"><h2>Line Following Robot</h2></a>
                <p>Developed a Line Following Robot with both 2D and 3D simulations to demonstrate its functionality. The 2D simulation was implemented in C++ using Proteus software, while the 3D simulation was done in Python with Webots. This project highlights the integration of different simulation environments to model and control robotic movement.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;