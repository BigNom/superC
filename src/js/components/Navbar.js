import React from 'react';
import { IndexLink, Link } from 'react-router';

class Navbar extends React.Component {
    render() {
            return (
                <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">Boiler Plate</li>
              <li>
                     <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Home</IndexLink>
                   </li>
                   <li>
                     <Link to="/contact" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Contact</Link>
                   </li>
                   <li>
                     <Link to="/style-guide" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>StyleGuide</Link>
                   </li>

                 </ul>
               </div>
               <div className="top-bar-right align-right">
                   <ul className="menu align-right">
                     <li className="menu-text">
                       Created by <a href="#" target="_blank">Element Web</a>
                     </li>
                   </ul>
      </div>
    </div>
            );
        }
    }
    export default Navbar;
