import React from 'react';
import config from '../../config';
export default function Footer() {
  return (
    <footer id="footer">
      <ul className="icons">
        {config.socialLinks.map(social => {
          const { style, icon, name, url } = social;
          return (
            <li key={url}>
              <a href={url} target="_blank" rel="noopener noreferrer" className={`icon ${style} ${icon}`}>
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul>
        <p>Made with :corazón: by <a href="www.linkedin.com/in/cclancaster" target="_blank" rel="noopener noreferrer" className="copyright">Connie Lancaster</a></p>
      </ul>
      <ul className="copyright">
        <li>&copy; Spectral</li>
        <li>
          Design: <a href="http://html5up.net" target="_blank" rel="noopener noreferrer" >HTML5 UP</a>
        </li>
      </ul>
    </footer>
  );
}
