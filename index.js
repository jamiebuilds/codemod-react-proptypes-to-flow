export default function transformer(file, api) {
  const j = api.jscodeshift;
  const f = j(file.source);

  let createArrayTypeAnnotation = () => {
    return j.genericTypeAnnotation(
      j.identifier('Array'),
      j.typeParameterInstantiation([
        j.anyTypeAnnotation()
      ])
    );
  };

  let createNodeTypeAnnotation = () => {

  };

  let createElementTypeAnnotation = () => {

  };

  let conversions = {
    any     : () => j.anyTypeAnnotation(),
    number  : () => j.numberTypeAnnotation(),
    string  : () => j.stringTypeAnnotation(),
    bool    : () => j.booleanTypeAnnotation(),
    func    : () => j.identifier('Function'),
    object  : () => j.identifier('Object'),
    symbol  : () => false,
    array   : () => createArrayTypeAnnotation(),
    node    : () => createNodeTypeAnnotation(),
    element : () => createElementTypeAnnotation(),

    instanceOf: () => {},
    oneOf: () => {},
    oneOfType: () => {},
    arrayOf: () => {},
    objectOf: () => {},
    shape: () => {},
  };

  let isReact = node => {
    return node.type === 'Identifier' && node.name === 'React';
  };

  let resolvePropType = node => {
    let prop = node.property;
    let name = prop.name;

    let conversion = conversions[name];
    let result = conversion(prop);

    return result;
  };

  let propTypes = f.find(j.ClassProperty, node => {
    return (
      node.static &&
      !node.computed &&
      node.key.name === 'propTypes' &&
      node.value.type === 'ObjectExpression'
    );
  });

  propTypes.forEach(propType => {
    let obj = {};

    propType.node.value.properties.forEach(property => {
      obj[property.key.name] = resolvePropType(property.value);
    });

    console.log(obj);
  });

  return f.toSource();
}
