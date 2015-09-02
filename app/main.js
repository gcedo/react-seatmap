import React from 'react';
import Seatmap from './components/Seatmap.jsx';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const rows = [
    [{ number: 'A' }, {number: 'B'}, {number: 'C'}, null, {number: 'D'}, {number: 'E'}, {number: 'F'}],
    [{ number: 'A' }, {number: 'B'}, {number: 'C'}, null, {number: 'D'}, {number: 'E'}, {number: 'F'}],
    [{ number: 'A' }, {number: 'B'}, {number: 'C'}, null, {number: 'D'}, {number: 'E'}, {number: 'F'}],
    [{ number: 'A' }, {number: 'B'}, {number: 'C'}, null, {number: 'D'}, {number: 'E'}, {number: 'F'}]
];

const rootInstance = React.render(
    <Seatmap rows={rows} />,
    document.getElementById('app')
);

if (module.hot) {
    require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
    getRootInstances: function () {
      // Help React Hot Loader figure out the root component instances on the page:
      return [rootInstance];
    }
  });
}
