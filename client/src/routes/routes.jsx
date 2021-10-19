import React from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Home from '../components/Home';
import PostDetails from '../components/PostDetails';
import Auth from '../components/Auth';

export function Routes() {
  const user = JSON.parse(localStorage.getItem('profile'));
  return (
    <BrowserRouter>
      <Container>
        <Navbar />
        <Switch>
          <Route path='/' exact component={() => <Redirect to='/posts' />} />
          <Route path='/posts' exact component={Home} />
          <Route path='/posts/search' exact component={Home} />
          <Route path='/posts/:id' exact component={PostDetails} />
          <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/posts" />)} />
        </Switch>
        <Footer />
      </Container>
    </BrowserRouter>
  )
}
