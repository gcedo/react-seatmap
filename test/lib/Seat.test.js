import React from 'react';
import ReactDOM from 'react-dom';
import Seat from '../../lib/Seat';


const selectSeat = () => {};
const seatNumber = "";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Seat seatNumber={seatNumber} selectSeat={selectSeat}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
