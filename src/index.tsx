import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Routing from 'src/components/Routing';

import { Provider } from 'react-redux';
import store from 'src/store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
