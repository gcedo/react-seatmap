import React from 'react';
import Seatmap from '../src/components/Seatmap.jsx';
import style from '../src/style/main.scss';

const rows = [
    [{ number: 'A', isReserved: true }, {number: 'B', isReserved: true}, {number: 'C', isReserved: true}, null, {number: 'D'}, {number: 'E'}, {number: 'F'}],
    [{ number: 'A' }, {number: 'B'}, {number: 'C'}, null, {number: 'D'}, {number: 'E'}, {number: 'F'}],
    [{ number: 'A' }, {number: 'B', isReserved: true}, {number: 'C', isReserved: true}, null, {number: 'D'}, {number: 'E'}, {number: 'F'}],
    [{ number: 'A' }, {number: 'B'}, {number: 'C'}, null, {number: 'D'}, {number: 'E'}, {number: 'F'}]
];

const rootInstance = React.render(
    <Seatmap rows={rows} maxReservableSeats={3} />,
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
