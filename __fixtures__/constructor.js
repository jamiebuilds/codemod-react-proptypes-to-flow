import React from 'react';

export default class Component extends React.Component {
  static propTypes =  {
    foo: React.PropTypes.any.isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return <div/>
  }
}
