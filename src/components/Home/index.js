/**
 * Created by ricardo on 01/06/17.
 */
import React, {Component} from 'react';
import classnames from 'classnames';

import {MainMap} from './Map';

import './styles.css';

export default class Home extends Component {
  render() {
    const {className} = this.props;
    return (
      <div className={classnames('Home', className)}>
        <MainMap/>
      </div>
    );
  }
}