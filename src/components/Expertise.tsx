import { faDocker, faReact } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Java",
    "React",
    "Node",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SASS",
    "Flask",
    "Python",
    "SQL",
    "PostgreSQL",
    "Postman"
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "AWS",
    "Azure",
    "Linux",
    "Pandas",
    "Selenium",
];


function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I architect and deliver scalable web solutions from UI to infrastructure. Designed a Node.js SMS platform processing 10,000+ daily messages with Twilio and AWS, reducing latency by 50% via optimized APIs. Led a SpringBoot team to build a university portal managing portal, and engineered an ASP.NET IoT system for 1,000+ daily users. Proficient in React, TypeScript, Python, and cloud-native development.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Automation</h3>
                    <p>I automate and secure cloud pipelines for zero-downtime deployments. Scaled 30+ microservices using Docker/Jenkins, improving code quality by 25%, and deployed a chatbot handling 500+ queries/day at 95% accuracy. Monitored 50+ AWS resources with CloudWatch, cutting incident response time by 40%. Expertise in Kubernetes, GitHub Actions, Selenium, and full-stack observability.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;