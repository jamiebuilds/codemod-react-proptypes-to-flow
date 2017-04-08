import React, {PropTypes} from 'react';

export default class Component extends React.Component {
  static propTypes = {
    propTypesOptional: PropTypes.any,
    propTypesRequired: PropTypes.any.isRequired,
    reactPropTypesOptional: React.PropTypes.any,
    reactPropTypesRequired: React.PropTypes.any.isRequired,

    anyProp: React.PropTypes.any.isRequired,
    numberProp: React.PropTypes.number.isRequired
    stringProp: React.PropTypes.string.isRequired
    boolProp: React.PropTypes.bool.isRequired
    funcProp: React.PropTypes.func.isRequired
    objectProp: React.PropTypes.object.isRequired
    symbolProp: React.PropTypes.symbol.isRequired
    arrayProp: React.PropTypes.array.isRequired
    nodeProp: React.PropTypes.node.isRequired
    elementProp: React.PropTypes.element.isRequired
  };

  render() {
    return <div/>
  }
}
