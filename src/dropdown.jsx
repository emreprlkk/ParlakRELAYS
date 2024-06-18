import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const options = [
  { key: 1, text: 'Seçenek 1', value: 1 },
  { key: 2, text: 'Seçenek 2', value: 2 },
  { key: 3, text: 'Seçenek 3', value: 3 },
];

const DropdownExample = () => (
  <Dropdown
    options={options}
    placeholder='Seçim Yap'
    selection
    onChange={(e, { value }) => console.log(value)}
    style={{
      width: 200,
      margin: 10,
      borderRadius: 5,
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
    }}
  />
);

export default DropdownExample;