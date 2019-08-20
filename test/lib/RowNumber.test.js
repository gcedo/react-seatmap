import React from 'react';
import ReactDOM from 'react-dom';
import RowNumber from '../../lib/RowNumber';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RowNumber />, div);
  ReactDOM.unmountComponentAtNode(div);
});
