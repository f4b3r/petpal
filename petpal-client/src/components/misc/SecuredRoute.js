import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


function SecuredRoute({ children }) {
 // const { keycloak } = useKeycloak();
  const navigate = useNavigate();
  const isLoggedIn =false;

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate, children]);
  return <>{children}</>;
}

export default SecuredRoute;