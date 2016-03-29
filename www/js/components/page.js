import React from 'react'

export default class Page extends React.Component {
  render() {
    return (
      <div className="base__page">
        <div className="base__content">
        {this.props.children}
        </div>
      </div>
    );
  }
}
