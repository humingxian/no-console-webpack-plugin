# no-console-webpack-plugin
English
### Installation:
Step 1:
```
npm i no-console-webpack-plugin --dev-save
```

### Usage:
Step 2:
```
in webpack.config.prud.js

const NoConsoleWebpackPlugin = require('no-console-webpack-plugin')

plugins: [
	...,
	new NoConsoleWebpackPlugin({
    type: ['log']
  })
]
```

### Configure:
type: String or Array or null
type represents the console output you want to ignore in the production environment
If not, it means ignore all console output

### Examples
`type: ‘log’ `or `type: [‘log’, ‘error’, ‘warn’]`or `new NoConsoleWebpackPlugin()`

简体中文
### 安装
第一步：
```
npm i no-console-webpack-plugin --dev-save
```

### 用法:
第二步:
```
在 webpack.config.prud.js

const NoConsoleWebpackPlugin = require('no-console-webpack-plugin')

plugins: [
	...,
	new NoConsoleWebpackPlugin({
    type: ['log']
  })
]
```

### 配置:
type: 字符串或数组或不传
type代表在生产环境中你不想在console里输出的类型
如果不传，则表示将会忽略所有的console输出

### 案列
`type: ‘log’` 或者 `type: [‘log’, ‘error’, ‘warn’]`  或者 `new NoConsoleWebpackPlugin()`