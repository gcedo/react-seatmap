import React from 'react';
import ReactDOM from 'react-dom';
import Row from '../../lib/Row';

const rowNumber = '';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Row rowNumber={rowNumber} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
