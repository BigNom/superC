'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router';


class CallUs extends React.Component {
  render() {
    return (
        <div className="page-wrapper">

          <div className="callout secondary callout-contact">
            <form>
              <div className="row">
                <div className="small-12 columns">
                  <h3 className="italics">Call us today!</h3>

                    <a className="large expanded button" href="#">9330 4920</a>
                  </div>
                <br>
                <br>
                <div className="small-12 columns">
                  <h3 className="italics">Book online</h3>
                  <a data-open="modalBook" className="large expanded button pulse">Book now</a>
                </div>
              </div>
            </form>
          </div>


        <!-- Booking Section -->
                      <div className="reveal" id="modalBook" data-reveal data-abide-error>
                          <h2 className="text-center">Make a booking</h2>
                    <form data-abide novalidate>

                        <div className="alert callout" style="display:none;" data-abide-error>
                            <p><i className="fi-alert"></i>There is an error in your form!</p>
                        </div>

                        <div className="row columns">
                            <label>Name:
                                <input type="text" placeholder="Your Name" required>
                                <span className="form-error">
                                    <i className="fi-alert"></i> Your name is required</span>
                            </label>
                            </div>
                            <div className="row columns">
                            <label>Email:
                                <input type="text" placeholder="Your Email" required pattern="email">
                                <span className="form-error">
                                    <i className="fi-alert"></i> Your email is required</span>
                            </label>
                            </div>
                            <div className="row columns">
                            <label>Phone Number:
                                <input type="text" placeholder="Your Phone Number" required pattern="number">
                                <span className="form-error">
                                    <i className="fi-alert"></i> Your phone number is required</span>
                            </label>
                            </div>
                            <div className="row columns">
                            <label>Cleaning Service
                        <select>
                          <option value="carpet-cleaning">Carpet Cleaning</option>
                          <option value="tile-cleaning">Tile Cleaning</option>
                          <option value="upholstery-cleaning">Upholstery Cleaning</option>
                          <option value="apollo">Other</option>
                        </select>
                        </label>
                      </div>
                            <div className="row columns">
                            <label>Message:
                                <textarea placeholder="Your Message"></textarea>
                            </label>
                            </div>
                            <div className="row columns">
                                <input type="submit" className="button expanded" value="Submit">
                            </div>
                            <button className="close-button" data-close aria-label="Close reveal" type="button">
                                <span aria-hidden="true">&times;</span>
                            </button>

                    </form>
        </div>



        </div>

    );
  }
}


export default CallUs;
