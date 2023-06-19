import React, { useEffect, useState } from 'react'
import { ReactKeycloakProvider } from '@react-keycloak/web'
import keycloak from './Keycloak'
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom'
import { Dimmer, Header, Icon } from 'semantic-ui-react'

import Products from './components/Products'
import About from './components/About'
import SecuredRoute from './components/misc/SecuredRoute'
import Landing from './pages/landing'
import Nav from './components/nav'
import Dashboard from './pages/dashboard/Dashboard'



function App() {
  const navigate = useNavigate();

  
  const initOptions = { pkceMethod: 'S256' }

  const handleOnEvent = (event, error) => {
    if (event === 'onAuthSuccess' && keycloak.authenticated && !window.location.pathname.includes('/dashboard')) {
      navigate('/dashboard');
      console.log('User authenticated');
    }
  };

  useEffect(() => {
    const checkAuthenticated = async () => {
      await keycloak.init(initOptions);
      if (keycloak.authenticated && !window.location.pathname.includes('/dashboard')) {
        navigate('/dashboard');
        console.log('User authenticated');
      }
    };
  
    checkAuthenticated();
  }, [keycloak, navigate]);

  const [formActive, setformActive] = useState();

  const onKeycloakEvent = (event, error) => {

    console.log('onKeycloakEvent', event, error)
    debugger;
  }

  const onKeycloakTokens = (tokens) => {
    console.log('onKeycloakTokens', tokens)
  }


  const loadingComponent = (
    <Dimmer inverted active={true} page>
      <Header style={{ color: '#4d4d4d' }} as='h2' icon inverted>
        <Icon loading name='cog' />
        <Header.Content>Keycloak is loading
          <Header.Subheader style={{ color: '#4d4d4d' }}>or running authorization code flow with PKCE</Header.Subheader>
        </Header.Content>
      </Header>
    </Dimmer>
  )
  /*
    return (
      <ReactKeycloakProvider
        authClient={keycloak}
        initOptions={initOptions}
        LoadingComponent={loadingComponent}
        onEvent={(event, error) => handleOnEvent(event, error)}
      >
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/home' component={Home} />
            <Route path='/movies/:id' component={MovieDetail} />
            <PrivateRoute path='/movies' component={MoviesPage} />
            <PrivateRoute path='/wizard' component={MovieWizard} />
            <PrivateRoute path='/settings' component={UserSettings} />
            <Route component={Home} />
          </Switch>
        </Router>
      </ReactKeycloakProvider>
    )
  
    return (
      <ReactKeycloakProvider
        authClient={keycloak}
        initOptions={initOptions}
        LoadingComponent={loadingComponent}
        onEvent={(event, error) => handleOnEvent(event, error)}
      >
        <Router>
          <Routes>
            <Route path='/' exact component={Home} />
            <Route path='/home' component={Home} />
            <Route component={Home} />
          </Routes>
        </Router>
      </ReactKeycloakProvider>
    )*/

  return (
    <>
      <ReactKeycloakProvider
        authClient={keycloak}
        initOptions={initOptions}
        LoadingComponent={loadingComponent}
        onEvent={handleOnEvent}
      >
       
          <Nav setformActive={setformActive} />
          <Routes>
            <Route path="/" element={<Landing />} />
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
      
      </ReactKeycloakProvider>
    </>
  );
}

export default App