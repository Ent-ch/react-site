import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faBars } from '@fortawesome/free-solid-svg-icons';
import { Dropdown, DropdownButton } from 'react-bootstrap';

import Nav from './nav';

const Header = () => (
  <header className="header">
    <div className="wrapp header__menu">
      <div className="header__block">

      <span className="header__block-link header__link mobile__el mobile__menu">
      <DropdownButton
        size="sm"
        variant="secondary"
        title={<span>
        <FontAwesomeIcon icon={faBars} />
        </span>}
        className="dropdown-button-drop-clear"
      >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
      </DropdownButton>
      </span>
        
        <a href="#" className="header__block-link logo-link header__link">
          <img src="img/bs_logo-wh.png" alt="logo" className="header__block-img" />
          <h1 className="header__h1">
            BeachSearcher
            <sup className="header__h1_betta">Beta</sup>
          </h1>
        </a>
        <a href="#" className="header__block-link header__link desktop__el">Beaches</a>
        <a href="#" className="header__block-link header__link desktop__el">Hotels</a>

        <a href="#" className="header__block-link header__link mobile__el">
          <FontAwesomeIcon icon={faBuilding} />&nbsp;
          Hotels
        </a>
      </div>
      {/* /.header__block */}
      <Nav />
      {/* /.header__block_options */}
    </div> {/*/wrapp*/}
  </header>
);

export default Header;
