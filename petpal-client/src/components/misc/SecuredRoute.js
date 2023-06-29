import React, { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

function SecuredRoute({ children }) {
 
  const navigate = useNavigate();
  const {auth} = useContext(AuthContext);
 

  useEffect(() => {
    if (!auth) {
      navigate('/');
    }
  }, [auth, navigate, children]);
  return <>{children}</>;
}

export default SecuredRoute;