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

用js的条件返回不同的jsx就可以实现

## 组件

### 函数组件

1. 函数明大写字母开头
2. 必须要有返回值，返回值一般是JSX，不需要返回用null
3. 也可以使用箭头函数

### 类组件

1. ES6类，继承React.Component父类
2. 类名大写
3. 组件类要提供render方法，并且必须要有返回值，如果不需要返回null
4. 可以抽取成单独的文件作为组件，使用`export default XXX`导出组件

## 事件

### 事件绑定

1. 事件采用了驼峰命名
2. 类组件绑定需要使用this

### 事件对象

在绑定的事件处理函数中添加参数e获取事件对象

### 有状态组件和无状态组件

1. 函数组件又被叫做无状态组件，类组件又被叫做有状态组件
2. state状态，即数据
