import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

// import EatVite from '../assets/images/EatVite.mp4';
import pic1 from '../assets/images/Connie_Icon.jpeg'
import pic2 from '../assets/images/Sanity-Profile-Page-Sml.png';
import pic3 from '../assets/images/Dungeon-of-Doom.png';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <img src={pic1} className="profilepic"/>
        < br/>
        < br/>
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <ul className="actions special">
          <li>
            {/* <Scroll type="id" element="one">
              <a href="/#" className="button primary">
                Explore
              </a>
            </Scroll> */}
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>
            About
          </h2>
          <p>
          I am a results-oriented Web Developer, driven to succeed with a passion for team-building and rising to the occasion.
            <br />
            <br />
            I pride myself on my ability to consistently build positive rapport with clients, coworkers and external teams. I bring strong problem-solving and communication skills to my work, honed through professional experience as well as my academic training. 
          </p>
        </header>
        <ul className="icons major">
          <li>
            <span className="icon fa-file-pdf major style1">
              <span className="label">Resume</span>
            </span>
          </li>
          <li>
            <span className="icon fa-address-card major style2">
              <span className="label">Contact</span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-code major style3">
              <span className="label">Projects</span>
            </span>
          </li>
        </ul>
      </div>
    </section>
    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header className="major">
          <h2>Skills</h2>
          <p>
          •	Programming Languages: HTML, JavaScript, Python, 
          < br/>
          •	Web Development: React, Node.js, Express, Sequelize, EJS, Mongoose, oAuth, JWT, Axios, Bcrypt, Passport, RESTful APIs, Flask
          < br/>
          •	Data: SQL, PostgreSQLl, SQLAlchemy, MongoDB, Jupyter Notebooks, 
          < br/>
          •	Tech Stacks: GitHub, VSCode, Postman, Postgres, Slack, Heroku, Salesforce
          </p>

        </header>
      </div>
    </section>
    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>
            Projects
          </h2>
        </header>
      </div>
    </section>
    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src='https://media.giphy.com/media/j0Aaxfj8jK6dVROK6V/giphy.gif' alt="EatVite gif" />
        </div>
        <div className="content">
          <h2>
            EatVite
          </h2>
          <p>
          A web app, developed by team Quarantined Devs, to invite your friends to dinner (and help select the restaurant).
          < br />
          Tech: HTML/CSS, Javascript, MongoDB, Mongoose, Express, Node.js, RESTful routing, React, API calls, Auth/Login
          <br />
          <a href="https://git.heroku.com/eatvite.git">See it Here</a> | <a href="https://github.com/CCLancaster/EatVite">See the Code</a>
          </p>
        </div>
        <div>
          <br />
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic2} alt="" />
        </div>
        <div className="content">
          <h2>
            Sanity
          </h2>
          <p>
            A web page designed to help us all de-stress from a given day, problem or life emergency and hold onto a little sanity. 
            <br />
            Tech: HTML, CSS, Javascript, RESTful Routing, PSQL, Database Manipulation, API Calls, Auth/Login, Basic Password Hashing
          <br />
          <a href="https://montys-sanity.herokuapp.com/">See it Here</a> | <a href="https://github.com/CCLancaster/Sanity">See the Code</a>
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>
            Dungeon of Doom
          </h2>
          <p>
            A Game(!): "Welcome intrepid adventurer. Turns out you're not very good at this and have managed to trap yourself in a room that is slowly growing smaller...ancient earth temples and all that. Happily, you thought to bring your handy laser gun. Blast the blocks in front of the door to escape certain doom. Or you know...don't. Good luck!"
            <br />
            Tech: HTML, CSS, Javascript, Canvas, Game Logic
          <br />
          <a href="https://github.com/CCLancaster/Dungeon-of-Doom">See the Code</a>
          </p>
        </div>
        <div>
          <br />
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2></h2>
          <p>
            
          </p>
        </header>
        <ul className="features">
          <li className="icon solid fa-paper-plane">
            <h3>Let's Connect!</h3>
            <p>Paruse my profile on <a href="www.linkedin.com/in/cclancaster" >LinkedIn</a></p>
          </li>
          <li className="icon solid fa-envelope">
            <h3>Email</h3>
            <p>
              connieclancaster@gmail.com
            </p>
          </li>
          <li className="icon solid fa-code">
            <h3>GitHub</h3>
            <p>
              See my work on <a href="www.github.com/cclancaster">GitHub</a>!
            </p>
          </li>
          <li className="icon solid fa-file-pdf">
            <h3>My <a href="https://drive.google.com/file/d/1cwgRgQ_NFX7nHvBDZMlr4H52ZIDEhIDO/view?usp=sharing" target='noopener' >Resume</a></h3>
          </li>
        </ul>
      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Let's Chat</h2>
          <p>
            The world is a little sideways at the moment, but let's connect so I can tell you how I can be an asset to your team.
          </p>
        </header>
        <ul className="actions stacked">
          <li>
            <a href="mailto:connieclancaster@gmail.com" className="button fit primary">
              Email
            </a>
          </li>
          <li>
            <a href="/#" className="button fit">
              From the Top
            </a>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
