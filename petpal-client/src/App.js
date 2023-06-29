import React, { useContext, useEffect, useState } from 'react';
import { Route,  Routes } from 'react-router-dom';
import Products from './components/Products';
import About from './components/About';
import SecuredRoute from './components/misc/SecuredRoute';
import Landing from './pages/landing';
import Nav from './components/nav';
import Dashboard from './pages/dashboard/Dashboard';
import Auth from './pages/auth';
import { AuthContext } from './context/AuthProvider';

function App() {
  const { auth } = useContext(AuthContext);
  const [userLogged, setUserLogged] = useState(null);

  useEffect(() => {
    setUserLogged(!!auth?.user);
  }, [auth]);
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Landing />} />
        {userLogged ? (
          <Route path="/auth" element={<Dashboard />} />
        ) : (
          <Route path="/auth" element={<Auth />} />
        )}
        <Route
          path="/secured2"
          element={
            <SecuredRoute>
              <Products />
            </SecuredRoute>
          }
        />
        <Route path="/dashboard" element={<SecuredRoute><Dashboard /></SecuredRoute>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
