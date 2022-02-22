import React from 'react';

import * as ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom'

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from "@/redux/reducers"
import thunk from 'redux-thunk';

// import './components/less/index.less';
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

import "@/index.css"
import 'react-resizable/css/styles.css';


import App from '@/components/App';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

