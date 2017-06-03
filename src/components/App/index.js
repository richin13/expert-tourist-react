import React, {Component} from 'react';
import {ToastContainer} from 'react-toastify';
import classnames from 'classnames';

import {Header} from './Header'

import routes from '../../routes';
import 'semantic-ui-css/semantic.min.css';
import 'react-toastify/dist/ReactToastify.min.css'

class App extends Component {

  render() {
    const {className} = this.props;
    return (
      <div className={classnames('App', className)}>
        <Header/>
        <ToastContainer hideProgressBar={true}/>
        {routes()}
      </div>
    );
  }
}

export default App;
