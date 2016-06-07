import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class App extends React.Component {
  render() {
    return (
      <ReactCSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={500}>
        {this.props.children}
      </ReactCSSTransitionGroup>

    )
  }
}


