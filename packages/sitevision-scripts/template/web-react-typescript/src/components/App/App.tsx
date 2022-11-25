import * as React from 'react';
import styles from './App.scss';

export interface IApp {
  message: string;
  name: string;
}

const App: React.FunctionComponent<IApp> = ({ message, name }) => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        {message} {name}
      </p>
    </div>
  );
};

export default App;
