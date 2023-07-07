import React, { useState, useContext, useEffect } from "react";
import { Dropdown, Image, Menu, Segment } from "semantic-ui-react";
import './Nav.scss';
import logoIcon from '../../resources/images/logo-color.svg'
import i18n from 'i18next';
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthProvider";



const Nav = () => {
  const navigate = useNavigate();
  const [userLogged, setUserLogged ] = useState({});
  const [activeItem, setactiveItem] = useState("home");
  const { t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState('it');
  const { auth,  setAuth } = useContext(AuthContext);

  const handleLogout = () => {
    
    setAuth(null); // Clear the authentication state
    navigate('/'); // Redirect to the home page or any other desired route
  };

  useEffect(() => {   
    if (auth) {
      console.log('user logged in', JSON.stringify(auth));
     setUserLogged(auth.user)
    }else{
      console.log('user logged out')
      setUserLogged(null);
      localStorage.setItem('auth', null);
    }
  }, [auth]);

  const handleItemClick =  (e, { name }) => {
    setactiveItem(name);

    switch (name) {
      case t('nav-menu.sign-in'):
        navigate('/auth?action=signin');
        break;
      case t('nav-menu.logout'):
        handleLogout()
        break;
      case t('nav-menu.sign-up'):
        navigate('/auth?action=signup');
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

        {!userLogged && (
          <>
            <Menu.Item
              name={t('nav-menu.sign-in')}
              onClick={handleItemClick}
              active={activeItem === t('nav-menu.sign-in')}
              position="right"
            />
            <Menu.Item
              name={t('nav-menu.sign-up')}
              active={activeItem === t('nav-menu.sign-up')}
              onClick={handleItemClick}
              
            />
          </>
        )}
        {userLogged && (
          <>
            <Menu.Item position="right">{userLogged.name}</Menu.Item>
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