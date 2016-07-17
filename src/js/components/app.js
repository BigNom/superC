'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router';
import Navbar from './navbar';
import Footer from './footer';
import PageHeader from './pageheader';


class App extends Component {
  render() {
    return (
      <div className='app-wrapper'>
        <Navbar />
        <PageHeader />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;
