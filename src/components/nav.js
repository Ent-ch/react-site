import React from "react";
import { faEdit, faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

import NavEl from './nav-el';

const Nav = () => (
  <nav className="header__options">
    <ul className="header__options-list">
      <NavEl icon={faGlobe} title="English" />
      <NavEl icon={faUserCircle} title="Add review" />
      <NavEl icon={faEdit} title="Sign in" first />
    </ul>
  </nav>
);

export default Nav;
