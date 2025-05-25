import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import myPhoto from '../assets/images/MyPhoto.jpg';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={myPhoto} alt="Avatar" className="circle-image"/>
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/jaypatel0112" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/jay-patel-605a711a0/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Jay Patel</h1>
          <p>Full Stack Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/jaypatel0112" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/jay-patel-605a711a0/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;