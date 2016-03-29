import React from 'react'
import {Link} from 'react-router'
import request from 'axios'
import {connector} from 'reflux-state-mixin'
import Layout from '../components/layout'
import store from '../store/store'

@connector(store)

export default class Home extends React.Component {
  render() {
    return (
      <Layout>
        Hello World!
      </Layout>
    );
  }
}
