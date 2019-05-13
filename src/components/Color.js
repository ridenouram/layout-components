import React from 'react';

export default function Color() {
  const color = {
    name: 'yellow peach',
    hex: '#deb993',
    rgb: {
      red: 222,
      green: 185,
      blue: 147
    }
  };

  const divStyle = {
    backgroundColor: color.hex,
  };

  return (
    <dl style={divStyle}>
      <dt>Name</dt>
      <dd>{color.name}</dd>

      <dt>Hex</dt>
      <dd>{color.hex}</dd>

      <dt>RGB</dt>
      <dd>red: {color.rgb.red}</dd>
      <dd>green: {color.rgb.green}</dd>
      <dd>blue: {color.rgb.blue}</dd>
    </dl>
  );
}
