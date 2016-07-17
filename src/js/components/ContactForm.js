import React from 'react';
import { IndexLink, Link } from 'react-router';

const ContactForm = React.createClass({
  render() {
          return (
            <div className="contact-form-wrapper">
              <form className="contact-form">
                <div className="row">
                  <div className="small-6 columns form">
                    <label className="form-label">Name</label>
                    <input type="text" placeholder="Enter your name"/>
                      <label className="form-label">Email</label>
                      <input type="text" placeholder="Enter your email address"/>
                        <label className="form-label">Phone</label>
                        <input type="number" placeholder="Enter your phone number"/>
                          <select>
                          <option value="husker">Design</option>
                          <option value="starbuck">Marketing</option>
                          <option value="hotdog">eCommerce</option>
                          <option value="apollo">Other</option>
                        </select>

                          <label className="form-label message">Message</label>
                          <textarea placeholder="Leave a message"/>
                            <div className="row columns">
                         <button className="button expanded" type="submit" value="Submit">Submit</button>
                       </div>
                  </div>
                </div>
              </form>
      </div>
    );
  }
});

    export default ContactForm;
