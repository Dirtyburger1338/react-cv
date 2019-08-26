import React from './node_modules/react';
import ReactDOM from './node_modules/react-dom';
import Cmd from './Cmd';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Cmd />, div);
  ReactDOM.unmountComponentAtNode(div);
});
