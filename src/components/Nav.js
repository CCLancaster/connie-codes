import React from 'react';
import { Link } from 'gatsby';
import resume from '../assets/Connie-Lancaster-Resume.pdf';

export default function Nav({ onMenuToggle = () => {} }) {
  return (
    <nav id="nav">
      <ul>
        <li className="special">
          <a
            href="#menu"
            onClick={e => {
              e.preventDefault();
              onMenuToggle();
            }}
            className="menuToggle"
          >
            <span>Menu</span>
          </a>
          <div id="menu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/#projects">Projects</ Link>
              </li>
              <li>
                <Link to="/#contact">Contact</Link>
              </li>
              <li>
                <Link to={resume} target="_blank" rel="noopener noreferrer" >Resume</Link>
              </li>
            </ul>
            <a
              className="close"
              onClick={e => {
                e.preventDefault();
                onMenuToggle();
              }}
              href="#menu"
            >
              {''}
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
}
