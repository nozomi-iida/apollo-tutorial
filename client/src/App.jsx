import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { Container } from 'semantic-ui-react';
import MenuBar from './components/MenuBar';
import './App.css';

export default () => {
  return (
    <BrowserRouter>
    <Container>
      <MenuBar />
      <Route exact path='/' component={Home}/>
      <Route path='/login' component={Login}/>
      <Route path='/register' component={Register}/>
    </Container>
    </BrowserRouter>
  );
};
