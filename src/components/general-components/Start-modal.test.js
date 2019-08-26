import React from 'react';
import ReactDOM from 'react-dom';
import StartModal from './Start-modal';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StartModal />, div);
  ReactDOM.unmountComponentAtNode(div);
});
