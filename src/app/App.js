import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faRss } from "@fortawesome/free-solid-svg-icons";
import logo from '../images/logo.png';
import wave from '../images/wave.png';
import employmentIcons from '../images/employment_icons.png';
import mountains from '../images/mountains.png';
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <img src={logo} alt="Logo" height={30} width={20} />
        <div className="Header-socials">
          <FontAwesomeIcon className="Social-link" icon={faLinkedinIn} size="md" style={{'marginLeft': '0px'}}/>
          <FontAwesomeIcon className="Social-link" icon={faGithub} size="md"/>
          <FontAwesomeIcon className="Social-link" icon={faRss} size="md"/>
          <FontAwesomeIcon className="Social-link" icon={faTwitter} size="md"/>
          <FontAwesomeIcon className="Social-link" icon={faInstagram} size="md" style={{'marginRight': '0px',}}/>
        </div>
      </div>
      <div className="Body">
        <div className="Col-left">
          <div className="Row">
            <h1 style={{'marginLeft': '-3px'}}>Hey there</h1>
            <img src={wave} alt="Hello" width={90} height={90} style={{ 'paddingTop': '10px', 'paddingLeft': '10px', 'opacity': '0.7'}} />
          </div>
          <img src={mountains} className="Body-image" width={390} height={140} style={{ 'opacity': '0.7'}}/>
        </div>
        <div className="Col-right">
          <h3 className="Subtitle">I’m Zi, an aspiring startup<br/>founder and software engineer</h3>
          <p>Currently: Co-Founder  @  Belay [VG ‘22], KP Fellow</p>
          <div className="Row" style={{'marginTop': '15px'}}>
            <p>Previously: Engineering  @   </p>
            <img src={employmentIcons} alt="flex logos" width={144} height={24} style={{ 'marginTop': '2px', 'marginLeft': '5px' }}/>
          </div>
        </div>
      </div>
      <div className="Navbar">
        <Link className="Subtitle" to="blog">Blog</Link>
        <Link className="Subtitle" to="startups">Startups</Link>
        <Link className="Subtitle" to="projects">Projects</Link>
        <Link className="Subtitle" to="about">About</Link>
      </div>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="blog" element={<Blog />} />
        <Route path="startups" element={<Startups />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<About />} />
        <Route path='*' exact={true} element={<NotFound />} />
      </Routes>
    </div>
  );
}

function Blog() {
  return (
    <div className="Content-column" >
      <h2>Content coming soon!</h2>
    </div>
  );
}

function Startups() {
  return (
    <div className="Content-column" >
      <h2>Content coming soon!</h2>
    </div>
  );
}

function Projects() {
  return (
      <div className="Content-column" >
      <h2 >Content coming soon!</h2>
    </div>
  );
}

function About() {
  return (
    <div className="Content-column">
      <h2>Content coming soon!</h2>
    </div>
  );
}

function NotFound() {
  return (
    <div className="Content-column">
      <h2>Content coming soon!</h2>
    </div>
  );
}


export default App;