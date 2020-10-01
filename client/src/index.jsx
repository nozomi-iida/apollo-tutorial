import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import ApolloProvider from './ApolloProvider';

ReactDOM.render(
  <ApolloProvider />,
  document.getElementById('root')
);