import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link } from 'react-router';


export default class Welcome extends React.Component {
  render() {
    return (
      <div className="background">
        <div className="container-fluid">
          <div className="row welcome">
            <div className="col-md-6 col-md-offset-3">
              
              <Link to="/main"><button>Welcome</button></Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


