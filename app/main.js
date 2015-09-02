import React from 'react';
import Seatmap from './components/Seatmap.jsx';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const rootInstance = React.render(<Seatmap />, document.getElementById('app'));

if (module.hot) {
    require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
    getRootInstances: function () {
      // Help React Hot Loader figure out the root component instances on the page:
      return [rootInstance];
    }
  });
}
