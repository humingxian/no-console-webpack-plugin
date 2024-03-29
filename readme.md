# noconsole-webpack-plugins
English
### Installation:
Step 1:
```
npm i noconsole-webpack-plugins --dev-save
```

### Usage:
Step 2:
```
in webpack.config.prud.js

const NoConsoleWebpackPlugins = require('noconsole-webpack-plugins')

plugins: [
	...,
	new NoConsoleWebpackPlugins({
    type: ['log']
  })
]
```

### Configure:
type: String or Array or null
type represents the console output you want to ignore in the production environment
If not, it means ignore all console output

### Examples
`type: ‘log’ `or `type: [‘log’, ‘error’, ‘warn’]`or `new NoConsoleWebpackPlugins()`

简体中文
### 安装
第一步：
```
npm i noconsole-webpack-plugins --dev-save
```

### 用法:
第二步:
```
在 webpack.config.prud.js

const NoConsoleWebpackPlugins = require('noconsole-webpack-plugins')

plugins: [
	...,
	new NoConsoleWebpackPlugins({
    type: ['log']
  })
]
```

### 配置:
type: 字符串或数组或不传
type代表在生产环境中你不想在console里输出的类型
如果不传，则表示将会忽略所有的console输出

### 案列
`type: ‘log’` 或者 `type: [‘log’, ‘error’, ‘warn’]`  或者`new NoConsoleWebpackPlugins()`