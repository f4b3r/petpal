import React, { useEffect } from 'react'
import { useKeycloak } from '@react-keycloak/web'
import { useNavigate } from 'react-router-dom';


function SecuredRoute({ children }) {
  const { keycloak } = useKeycloak();
  const navigate = useNavigate();
  const isLoggedIn = keycloak.authenticated;

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate, children]);
  return <>{children}</>;
}

export default SecuredRoute;