import * as React from 'react';
import ReactDOM from 'react-dom';

export default (el, initialState) => {
  ReactDOM.render(
    <App message={initialState.message} name={initialState.name} />,
    el
  );
};
