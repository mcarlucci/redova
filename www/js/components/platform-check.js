import React from 'react'

export default class Page extends React.Component {
  render() {
    return (
      <div className={"platform-" + device.platform}>
        {this.props.children}
      </div>
    )
  }
}
