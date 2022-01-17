import React from 'react';

class EventComp extends React.Component {

  handleClick(e) {
    e.preventDefault();//阻止默认行为
    console.log('a标签点击不跳转');
  }

  render() {
    return (
      <div>
        <button onClick={() => alert('单击事件')}>单击事件</button>
        <br/>
        <a href="https://cn.bing.com" onClick={this.handleClick}>Bing</a>
      </div>
    )
  }
}

export default EventComp;
