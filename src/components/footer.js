import React from "react";

import Nav from './nav';

const Footer = () => (
  <footer className="footer">
    <div className="wrapp">
      <div className="footer__block">
        <img src="img/bs_logo-gr2.png" alt="logo" className="footer__block-img" />
        <span className="footer__block-link">© 2020 BeachSearcher.com, Inc.  All rights reserved</span>
        <a href="#" className="footer__block-link">Terms</a>
        <a href="#" className="footer__block-link">Privacy</a>
        <a href="#" className="footer__block-link">Site Map</a>
      </div>
    </div> {/*/wrapp*/}
  </footer>
);

export default Footer;
