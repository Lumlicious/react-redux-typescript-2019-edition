import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleLogo } from '../../store/App/actions';
import { State } from '../../store/rootReducer';

const logo = require('../../assets/logo.svg');

interface DispatchProps {
  toggleLogo: () => void;
  showLogo: Boolean;
}

const Home = ({ toggleLogo, showLogo }: DispatchProps) => {
  return (
    <div>
      <button className="button" onClick={toggleLogo}>
        Toggle Logo!
      </button>
      {showLogo ? <img src={logo} /> : null}
    </div>
  );
};

const mapStateToProps = (state: State) => {
  return {
    showLogo: state.app.showLogo
  };
};

export default connect(
  mapStateToProps,
  { toggleLogo }
)(Home);
