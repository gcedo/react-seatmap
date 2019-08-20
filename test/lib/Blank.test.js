import React from 'react';
import ReactDOM from 'react-dom';
import Blank from '../../lib/Blank';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Blank />, div);
  ReactDOM.unmountComponentAtNode(div);
});
