import React from 'react';
import ReactDOM from 'react-dom';

const renderReactComponent = ({ component, ref }) => (
  ReactDOM.render(
    React.createElement(component),
    ref
  )
);

export default renderReactComponent;
