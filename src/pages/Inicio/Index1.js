
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Menu from '../../components/Global/Aside'
import Content from '../../components/Global/Content'
import Header from '../../components/Global/Header'
export default class Index1 extends Component {

  render() {
    return (
      <div>

        <Menu />

        <Header />

        <Content />
      </div>

    );
  }
}


