import React, { useState } from "react";
import { useKeycloak } from "@react-keycloak/web";
import { Menu, Segment } from "semantic-ui-react";
import colors from "../../../resources/colors";
import './Nav.scss';


const Nav = () => {
 const { keycloak, initialized } = useKeycloak();

 const [activeItem,setactiveItem]=useState("home");

 const handleItemClick = (e, { name }) => setactiveItem(name);

 return (
    <Segment  attached size='mini' className="nav-header">
    <Menu inverted secondary  className="body-container">
        
      <Menu.Item
        name='logo'
        active={activeItem === 'logo'}
        onClick={handleItemClick}
      >
        <img src="ghostblog.svg"  alt="" />
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
      {/* section */}
    </Menu>
  </Segment>
 );
};

export default Nav;