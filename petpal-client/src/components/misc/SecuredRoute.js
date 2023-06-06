import React from 'react'
import { useKeycloak } from '@react-keycloak/web'


function SecuredRoute({ children }) {
    const { keycloak } = useKeycloak();
  
    const isLoggedIn = keycloak.authenticated;
  
    if (!isLoggedIn) {
      keycloak.login();
      return null; 
    }
  
    return <>{children}</>;
  }

export default SecuredRoute;