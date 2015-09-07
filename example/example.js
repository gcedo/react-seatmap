import React from 'react';
import Seatmap from '../src/components/Seatmap.jsx';
import style from '../src/style/main.scss';

const rows = [
    [{ number: 1 }, {number: 2}, {number: '3', isReserved: true}, null, {number: '4'}, {number: 5}, {number: 6}],
    [{ number: 1, isReserved: true }, {number: 2, isReserved: true}, {number: '3', isReserved: true}, null, {number: '4'}, {number: 5}, {number: 6}],
    [{ number: 1 }, {number: 2}, {number: 3, isReserved: true}, null, {number: '4'}, {number: 5}, {number: 6}],
    [{ number: 1 }, {number: 2}, {number: 3}, null, {number: '4'}, {number: 5}, {number: 6}],
    [{ number: 1, isReserved: true }, {number: 2}, {number: '3', isReserved: true}, null, {number: '4'}, {number: 5}, {number: 6, isReserved: true}]
];

const rootInstance = React.render(
    <Seatmap rows={rows} maxReservableSeats={3} alpha />,
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
