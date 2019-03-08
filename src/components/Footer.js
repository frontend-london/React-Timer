import React from 'react';
import './../styles/footer.scss';

const Footer = () => (
  <ul className="footer">
    <li>&copy; 2019 Copyright <a href="http://frontend.london">Piotr Kołodziejczyk</a></li>
    <li>Created using <a href="https://reactjs.org/">React</a> &amp; <a href="https://reactjs.org/docs/hooks-rules.html">Hooks</a></li>
    <li><a href="https://github.com/frontend-london/react-timer">See the source at GitHub</a></li>
  </ul>
)

export default Footer;