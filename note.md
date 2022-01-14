# 学习笔记

## 创建初始化项目
```shell
#首先要安装create-react-app
npm install -g create-react-app
create-react-app [项目名称]

#或者不安装create-react-app，使用npx
npx create-react-app [项目名称]
```

## 运行
```shell
npm start
```

## Hello React
```javascript
import React from 'react';
import ReactDOM from 'react-dom';

const h1 = React.createElement('h1', null, 'Hello React');
ReactDOM.render(h1, document.getElementById('root'));
```

## JSX

### Hello React JSX
```javascript
import React from 'react';
import ReactDOM from 'react-dom';

const h1 = (
  <h1>Hello React JSX</h1>
);
ReactDOM.render(h1, document.getElementById('root'));
```
### 需要注意的地方

jsx中一个dom元素只能有一个根节点
例如：
```javascript
<div>
  <h1>
    Hello React JSX.
  </h1>
  <div>
    <p>{name}</p>
  </div>
</div>
```

jsx中html最好是用`()`包裹

jsx中标签的部分属性是驼峰式命名的

| html属性 | jsx属性 |
| --- | --- |
| class | className |
| for | htmlFor |
| tabindex | tabIndex |
| ... | ...|

### 条件渲染

