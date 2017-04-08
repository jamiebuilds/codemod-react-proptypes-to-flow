import React from 'react';

type ComponentProps = {
  foo: any
};

export default class Component extends React.Component {
  props: ComponentProps;

  constructor(props: ComponentProps) {
    super(props);
  }

  render() {
    return <div/>
  }
}
