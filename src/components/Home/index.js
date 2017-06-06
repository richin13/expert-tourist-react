/**
 * Created by ricardo on 01/06/17.
 */
import React, {Component} from 'react';
import classnames from 'classnames';

import { WelcomeForm } from './welcomeForm/welcomeForm';

import './styles.css';

export default class Home extends Component {
  render() {
    const {className} = this.props;
    return (
      <div className={classnames('Home', 'ui one column centered grid container', className)}>
        <div className={classnames('column', className)}>
          <WelcomeForm />
        </div>
      </div>
    );
  }
}
