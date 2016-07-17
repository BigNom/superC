'use strict';
import React from 'react';
import { IndexLink, Link } from 'react-router';

const Footer = React.createClass({
  render() {
          return (
            <div className="component-wrapper">
            <div className="footer-wrapper">
              <div className="row">
                <div className="medium-3 large-3 columns">
                  <ul className="menu footer vertical">
                    <h5 className="footer-heading">Design</h5>
                    <button className="hollow button" href="/webdesign">Web Design</button>
                      <li><a>Responsive Web Designs</a></li>
                      <li><a>Design Options</a></li>
                      <li><a>eCommerce Websites</a></li>
                      <li><a>Logo and Branding</a></li>
                      </ul>
                </div>
                <div className="medium-3 large-3 columns">
                  <ul className="menu footer vertical">
                    <h5 className="footer-heading">Marketing</h5>
                      <li><a>SEO Professionals</a></li>
                      <li><a>Website Marketing</a></li>
                      <li><a>Google Adwords</a></li>
                      <li><a>Facebook Marketing</a></li>
                      </ul>
                </div>
                <div className="medium-3 large-3 columns">
                  <ul className="menu footer vertical">
                    <h5 className="footer-heading">About</h5>
                      <li><a>Why Choose</a></li>
                      <li><a>Testimonials</a></li>
                      <li><a>Team</a></li>
                      <li><a>HomeBlog</a></li>
                      </ul>
                </div>
                <div className="medium-3 large-3 columns">
                  <ul className="menu footer vertical">
                    <h5 className="footer-heading">Contact</h5>
                        <li className="menu social align-right">
                                 <button className="button social" type="submit" value="Submit">Social</button>

                            </li>
                      </ul>
                </div>
              </div>

              </div>
              <p className="copyright text-center"><small>Copyright © 2016 ReactiveWebDesigns</small></p>
              </div>

    );
  }
});

    export default Footer;
