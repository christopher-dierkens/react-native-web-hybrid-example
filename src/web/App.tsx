import React, { Component } from 'react';

import { message } from '../shared/message';
import styles from './App.module.scss';

class App extends Component {
  render(): JSX.Element {
    return (
      <div className={styles.App}>
        <h1>Hello</h1>
        <p>{message}</p>
      </div>
    );
  }
}

export default App;
