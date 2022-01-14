import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

const name = 'ZhangSan';

const fruit = [
  { key: 'apple', value: '🍌' },
  { key: 'banana', value: '🍎' },
  { key: 'strawberry', value: '🍓' }
];

const h1 = (
  <div>
    <h1>
      Hello React JSX.
    </h1>
    <div>
      <span>{name} like </span>
      {fruit.map(item => <span className='big' key={item.key}>{item.value}</span>)}
    </div>
  </div>
);
ReactDOM.render(h1, document.getElementById('root'));
