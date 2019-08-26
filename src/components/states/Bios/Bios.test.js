import React from 'react';
import ReactDOM from 'react-dom';
import Bios from './Bios';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Bios />, div);
  ReactDOM.unmountComponentAtNode(div);
});
