import React from 'react';

import * as ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom'

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from "@/redux/reducers"
import thunk from 'redux-thunk';

// import './components/less/index.less';
import "normalize.css";
import "@/index.css"

import { MantineProvider } from "@mantine/core"
import 'react-resizable/css/styles.css';

import App from '@/components/App';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <MantineProvider theme={{
      fontFamily: "Open Sans, sans serif",
      spacing: { xs: 15, sm: 20, md: 25, lg: 30, xl: 40 }
    }}>
      <App/>
    </MantineProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

