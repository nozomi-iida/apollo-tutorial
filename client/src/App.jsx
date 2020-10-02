import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { Container } from 'semantic-ui-react';
import MenuBar from './components/MenuBar';
import './App.css';
import { AuthProvider } from './context/auth';
import AuthRoute from './util/AuthRoute';
import SinglePost from './pages/SinglePost';

export default () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Container>
          <MenuBar />
          <Route exact path='/' component={Home} />
          <AuthRoute path='/login' component={Login} />
          <AuthRoute path='/register' component={Register} />
          <Route path='/post/:postId' component={SinglePost} />
        </Container>
      </BrowserRouter>
    </AuthProvider>
  );
};
