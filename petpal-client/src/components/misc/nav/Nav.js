import React, { useState } from "react";
import { useKeycloak } from "@react-keycloak/web";
import { Menu, Segment } from "semantic-ui-react";
import './Nav.scss';


const Nav = () => {
  const { keycloak, initialized } = useKeycloak();
  const isAuthenticated = keycloak.authenticated;
  const [activeItem, setactiveItem] = useState("home");

  const handleItemClick = (e, { name }) => {
    setactiveItem(name);

    switch (name) {
      case 'login':
        keycloak.login();
        break;
      case 'logout':
        keycloak.logout();
        break;
      default:
        // Handle other menu item cases if needed
        break;
    }
  }

  return (
    <Segment attached size='mini' className="nav-header">
      <Menu inverted secondary className="body-container">

        <Menu.Item
          name='logo'
          active={activeItem === 'logo'}
          onClick={handleItemClick}
        >
          <img src="ghostblog.svg" alt="" />
        </Menu.Item>
        <Menu.Item
          name='home' className="test"
          active={activeItem === 'home'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='messages'
          active={activeItem === 'messages'}
          onClick={handleItemClick}
        />
        <Menu.Item
          name='friends'
          active={activeItem === 'friends'}
          onClick={handleItemClick}
        />

        {!isAuthenticated && (
          <>
            <Menu.Item
              name='login'
              active={activeItem === 'login'}
              onClick={handleItemClick}
              position="right"
            />
            <Menu.Item
              name='sign_in'
              active={activeItem === 'sign_in'}
              onClick={handleItemClick}
            />
          </>
        )}
        {isAuthenticated && (
          <Menu.Item
            name='logout'
            active={activeItem === 'logout'}
            onClick={handleItemClick}
            position="right"
          />
        )}
        {/* section */}
      </Menu>
    </Segment>
  );
};

export default Nav;