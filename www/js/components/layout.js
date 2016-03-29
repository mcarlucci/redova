import React from 'react'
import Page from './page'
import PlatformCheck from './platform-check'
import Header from './header'

export default class Layout extends React.Component {

  render() {
    return (
      <PlatformCheck>
        <Header title={this.props.title} hasLogo={this.props.hasLogo} hasBack={this.props.hasBack} backIcon="&#xe908;" hasProfile={this.props.hasProfile} profileIcon="&#xe90b;" iconText={this.props.iconText}/>
        <Page>
          {this.props.children}
        </Page>
      </PlatformCheck>
    );
  }
}
