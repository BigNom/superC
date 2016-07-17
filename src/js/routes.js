'use strict';
import React from 'react';
import { Route, IndexRoute } from 'react-router';

// import components
import App from './components/app';
import Home from './components/Home';
import Contact from './components/Contact';
import StyleGuide from './components/styleGuide';
import NoMatch from './components/noMatch';

export default (
  <Route path='/' component= {App}>
    <IndexRoute component={Home} />
    <Route path="contact" component={ Contact } />
    <Route path='style-guide' component= {StyleGuide}/>
    <Route path="*" component={NoMatch}/>
  </Route>
);
