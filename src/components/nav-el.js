import React, { Fragment } from "react";
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const NavEl = ({ icon, title, first }) => (
  <li className="header__options-item">
      <DropdownButton
        size="sm"
        variant="secondary"
        title={
          <span className="options-link header__link">
          <FontAwesomeIcon icon={icon} />
          <span className="header__options-title">{title}</span>
        </span>}
        className="dropdown-button-drop-clear"
      >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        {!first ? (<Fragment>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
        </Fragment>) : null}
      </DropdownButton>
  </li>
);

export default NavEl;
