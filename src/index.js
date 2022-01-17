import React from 'react';
import ReactDOM from 'react-dom';

import Comp4 from './Comp4';
import EventComp from './EventComp';

import './index.css';

const name = 'Zhang San';

const fruit = [
  { key: 'apple', value: '🍌' },
  { key: 'banana', value: '🍎' },
  { key: 'strawberry', value: '🍓' }
];

function Comp1() {
  return (
    <p>来自于函数组件</p>
  );
}

const Comp2 = () => <p>来自于箭头函数组件</p>

const h1 = (
  <div>
    <h1>
      Hello React JSX.
    </h1>
    <div>
      <span style={{color: 'red'}}>{name} like </span>
      {fruit.map(item => <span className='big' key={item.key}>{item.value}</span>)}
    </div>
    <div id='comp1'></div>
    <div id='comp2'></div>
    <div id='comp3'></div>
    <div id='comp4'></div>
    <div id='eventcomp'></div>
  </div>
);

class Comp3 extends React.Component {
  render() {
    return (
      <p>来自于类组件</p>
    )
  }
}

ReactDOM.render(h1, document.getElementById('root'));
ReactDOM.render(<Comp1/>, document.getElementById('comp1'));
ReactDOM.render(<Comp2/>, document.getElementById('comp2'));
ReactDOM.render(<Comp3/>, document.getElementById('comp3'));
ReactDOM.render(<Comp4/>, document.getElementById('comp4'));
ReactDOM.render(<EventComp/>, document.getElementById('eventcomp'));
