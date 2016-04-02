import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import User from '../components/User'
import Page from '../components/Page'

import Sidebar from './Sidebar'
import Content from './Content'
import Header from './Header'

import * as pageActions from '../actions/PageActions'

class App extends Component {
  render() {
    const { user, page } = this.props
    const { setYear } = this.props.pageActions

    return <div>
      <Header>some header</Header>
      <Sidebar>sidebar block</Sidebar>
      <Content>some content</Content>
      <Page photos={page.photos} year={page.year} setYear={setYear} />
      <User name={user.name} />
    </div>
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    page: state.page
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
