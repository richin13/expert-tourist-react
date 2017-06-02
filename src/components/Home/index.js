/**
 * Created by ricardo on 01/06/17.
 */
import React, {Component} from 'react';
import {Header, Divider} from 'semantic-ui-react'
import classnames from 'classnames';

import {MainMap} from './Map';

import './styles.css';

export default class Home extends Component {
  render() {
    const {className, ...props} = this.props;
    return (
      <div className={classnames('Home', className)}>
        <Header size='huge'>Bienvenido!</Header>
        <Divider/>
        <MainMap/>
      </div>
    );
  }
}