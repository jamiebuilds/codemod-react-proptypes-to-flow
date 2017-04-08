import React from 'react';

export default class Component extends React.Component {
  render() {
    return <div/>
  }
}

Component.propTypes =  {
  foo: React.PropTypes.any.isRequired,
};
