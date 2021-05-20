import * as React from 'react';
import PropTypes from 'prop-types';

const App = ({ message, name }) => {
  return (
    <div>
      {message} {name}
    </div>
  );
};

App.propTypes = {
  message: PropTypes.string,
  name: PropTypes.string,
};

export default App;
