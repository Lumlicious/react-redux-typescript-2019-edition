import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import './App.scss';
import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';
import routes from '../../routes';

interface AppProps {
  history: History;
}
const App = ({ history }: AppProps) => {
  return <ConnectedRouter history={history}>{routes}</ConnectedRouter>;
};

export default App;
