import React from 'react';
import Seatmap from '../src/components/Seatmap.jsx';
import style from '../src/style/main.scss';

const seats = [];
for (let i = 0; i < 20; i++) {
    seats.push({ number: i + 1 })
}
const rows = [];
for (let i = 0; i < 20; i++) {
    rows.push(seats)
}

const rootInstance = React.render(
    <Seatmap
        rows={rows}
        maxReservableSeats={3}
        alpha
        displayFunc={x => 1/ 2 *x*x} />,
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
