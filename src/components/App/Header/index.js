/**
 * Created by ricardo on 01/06/17.
 */
import React from 'react';
import {AppMenu} from './AppMenu'

import logo from './logo.svg';
import './styles.css';

export const Header = () => {
  return (
    <div>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h2>Expert Tourist</h2>
      </div>
      <AppMenu/>
    </div>
  );
};
