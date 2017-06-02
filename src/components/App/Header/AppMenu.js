/**
 * Created by ricardo on 01/06/17.
 */
import React from 'react';
import {Link} from 'react-router-dom';
import {Menu} from 'semantic-ui-react';
import classnames from 'classnames';

export const AppMenu = () => {
  return (
    <Menu className={classnames('main-menu')} inverted borderless={true}>
      <Link className={classnames('link', 'item')} to='home'>Home</Link>
      <Link className={classnames('link', 'item')} to='about'>About</Link>

      <Menu.Menu position='right'>
        <Link className={classnames('link', 'item')} to='signup'>Sign Up</Link>
        <Link className={classnames('link', 'item')} to='help'>Help!</Link>
      </Menu.Menu>
    </Menu>
  )
};
