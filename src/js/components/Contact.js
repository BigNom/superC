'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router';
import ContactForm from './contactform';


class Contact extends React.Component {
  render() {
    return (
        <div className="page-wrapper">
          <div className="page-header">
            <div className="row columns">
            <h1 className="text-center page-title">Contact</h1>
              <h5 className="page-sub-title text-center">This is the Contact page</h5>
          </div>
          </div>

          <div className="row">
              <h1 className="page-sub-heading">Contact Us today</h1>
              <p>0428880203</p>
              <p>info@reactivewebdesigns.com</p>
          <div className="large-8 columns">
  <ContactForm />

  </div>

          </div>


        </div>

    );
  }
}


export default Contact;
