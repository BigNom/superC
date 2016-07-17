 import React from 'react';
import { IndexLink, Link } from 'react-router';

const PageHeader = React.createClass({
  render() {
          return (
            <div className="column row">
    <div>
      <h1>{this.props.title}</h1>
      <p>{this.props.subTitle}</p>
    </div>

  </div>
    );
  }
});

    export default PageHeader;
