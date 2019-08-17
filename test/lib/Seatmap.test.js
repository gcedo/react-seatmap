import React from 'react';
import ReactDOM from 'react-dom';
import Seatmap from '../../lib/Seatmap';

const rows = [
    [{ number: 1 }, {number: 2}, {number: '3', isReserved: true}, null, {number: '4'}, {number: 5}, {number: 6}],
    [{ number: 1, isReserved: true }, {number: 2, isReserved: true}, {number: '3', isReserved: true}, null, {number: '4'}, {number: 5}, {number: 6}],
    [{ number: 1 }, {number: 2}, {number: 3, isReserved: true}, null, {number: '4'}, {number: 5}, {number: 6}],
    [{ number: 1 }, {number: 2}, {number: 3}, null, {number: '4'}, {number: 5}, {number: 6}],
    [{ number: 1, isReserved: true }, {number: 2}, {number: '3', isReserved: true}, null, {number: '4'}, {number: 5}, {number: 6, isReserved: true}]
];

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Seatmap rows={rows} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
