import React, { useEffect, useState } from "react";

import { Dropdown, Image, Menu, Segment } from "semantic-ui-react";
import './Nav.scss';
import logoIcon from '../../resources/images/logo-color.svg'
import i18n from 'i18next';
import useKeycloakAuth from "../../hooks/useKeycloakAuth";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";


const Nav = ({setFormActive}) => {

  const { isAuthenticated, userName } = useKeycloakAuth();
  const [activeItem, setactiveItem] = useState("home");
  const { t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleItemClick = (e, { name }) => {
    setactiveItem(name);

    switch (name) {
      case 'login':
        // keycloak.login();
        break;
      case 'logout':
        //keycloak.logout();
        break;
        case t('nav-menu.signin'):

          //keycloak.logout();
          break;
      default:
        // Handle other menu item cases if needed
        break;
    }
  };

  const handleLanguageChange = (e, { value }) => {
    i18n.changeLanguage(value);
    setSelectedLanguage(value);
  }

  useEffect(() => {
    setSelectedLanguage(i18n.language);
  }, []);

  return (
    <Segment attached size='mini' className="nav-header">
      <Menu secondary className="body-container">

        <Menu.Item className="cursor-default">
          <Image src={logoIcon} className="logo-img" />
        </Menu.Item>
        <Menu.Item
          name={t('nav-menu.home')} 
          className="test"
          active={activeItem === t('nav-menu.home')}
          onClick={handleItemClick}
          as={Link}
          to='/'
        />
        <Menu.Item
          as={Link}
          to='/about'
          name={t('nav-menu.messages')}
          active={activeItem === t('nav-menu.messages')}
          onClick={handleItemClick}
        />
        <Menu.Item
          name={t('nav-menu.friends')}
          active={activeItem === t('nav-menu.friends')}
          onClick={handleItemClick}
        />

        {!isAuthenticated && (
          <>
            <Menu.Item
              name={t('nav-menu.sign-in')}
              onClick={handleItemClick}
              position="right"
            />
            <Menu.Item
              name={t('nav-menu.sign-up')}
              onClick={() => {handleItemClick();setFormActive(false);}}
              as={Link}
              to='/sign-up'
            />
          </>
        )}
        {isAuthenticated && (
          <>
            <Menu.Item position="right">welcome {userName}</Menu.Item>
            <Menu.Item 
              name={t('nav-menu.logout')}
              onClick={handleItemClick}
            />
          </>
        )}
        <Menu.Item onClick={handleItemClick}>
          <Dropdown text={selectedLanguage}>
            <Dropdown.Menu >
              <Dropdown.Item text='English' value="en" onClick={handleLanguageChange} />
              <Dropdown.Item text='Italiano' value="it" onClick={handleLanguageChange} />
              <Dropdown.Item text='Deutsch' value="de" onClick={handleLanguageChange} />
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
      </Menu>
    </Segment>
  );
};

export default Nav;