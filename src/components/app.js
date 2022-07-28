import React, { Component } from 'react';
import Menu from './Menu';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Menu type={'breakfast'}/>
        <Menu type={'lunch'}/>
      </div>
    );
  }
}
