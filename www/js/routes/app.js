import React from 'react'

export default class Application extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
