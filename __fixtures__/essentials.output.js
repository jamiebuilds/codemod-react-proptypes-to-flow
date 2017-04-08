import React from 'react';

export default class Component extends React.Component {
  props: {
    propTypesOptional?: any,
    propTypesRequired: any,
    reactPropTypesOptional?: any,
    reactPropTypesRequired: any,

    anyProp: any,
    numberProp: number,
    stringProp: string,
    boolProp: boolean,
    funcProp: Function,
    objectProp: Object,
    symbolProp: void,
    arrayProp: Array<any>,
    nodeProp: void,
    elementProp: void
  };

  render() {
    return <div/>
  }
}
