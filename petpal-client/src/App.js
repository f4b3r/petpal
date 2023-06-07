import React from 'react'
import { ReactKeycloakProvider } from '@react-keycloak/web'
import Keycloak from 'keycloak-js'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'
import { Dimmer, Header, Icon } from 'semantic-ui-react'
import { config } from './Constants'
import Products from './components/Products'
import About from './components/About'

import SecuredRoute from './components/misc/SecuredRoute'
import Landing from './pages/landing'
import Nav from './components/nav'



function App() {

  const keycloak = new Keycloak({
    url: `${config.url.KEYCLOAK_BASE_URL}`,
    realm: "petpal",
    clientId: "petpal-client"
  })
  const initOptions = { pkceMethod: 'S256' }

  const handleOnEvent = async (event, error) => {
    if (event === 'onAuthSuccess') {
      if (keycloak.authenticated) {
        /*  let response = await moviesApi.getUserExtrasMe(keycloak.token)
          if (response.status === 404) {
            const userExtra = { avatar: keycloak.tokenParsed.preferred_username }
            response = await moviesApi.saveUserExtrasMe(keycloak.token, userExtra)
            console.log('UserExtra created for ' + keycloak.tokenParsed.preferred_username)
          }
          keycloak['avatar'] = response.data.avatar*/
        console.log('user authenticated')
      }
    }
  }

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
      >
        <Router>
          <Nav />
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
            <Route path="/secured" element={<SecuredRoute><Products /></SecuredRoute>} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </ReactKeycloakProvider>
    </>
  );
}

export default App