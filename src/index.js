import React from 'react';

/* DOM Routing */
import * as ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom'

/* Redux */
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from "@/redux/reducers"
import thunk from 'redux-thunk';

/* Stylesheets */
// import './components/less/index.less';
import "normalize.css";
import "@/index.css"
import 'react-resizable/css/styles.css';
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/table/lib/css/table.css";


/* Root Component */
import App from '@/components/App';

/* GraphQL Client */
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  // useQuery,
  // gql
} from "@apollo/client";

const store = createStore(reducer, applyMiddleware(thunk));
const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);

