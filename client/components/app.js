import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PromoForm from '../containers/promoForm';
import PromoResult from '../containers/promoResult';

export default class App extends Component {
    render() {
    return (
      <div className="row">
        <div className="col-md-3">
          <PromoForm />
        </div>
        <div className="col-md-9">
          <PromoResult />
        </div>
      </div>
    );
  }
};
