# vue-project

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

## Babel

- 用途：Babel 是一个 JavaScript 编译器，将 ES6+ 代码转为兼容旧浏览器的 ES5 代码。
- 特点：确保现代 JavaScript 代码在旧浏览器中运行，并支持转换 JSX（React）和 TypeScript。
```shell
npm install --save-dev @babel/core @babel/cli @babel/preset-env

./node_modules/.bin/babel src --out-dir lib
```

## Webpack

- 用途：Webpack 是一个打包工具，负责将前端资源（JavaScript、CSS、图片等）打包成浏览器可用的文件。
- 特点：支持代码分割、模块化和加载优化，提升前端性能。

```sh
npm install --save-dev webpack babel-loader @babel/core @babel/preset-env

npx webpack --version

npm install -D @webpack-cli/generators
```

## ES6 
- 用途：ES6 是 JavaScript 的一个重要版本更新，引入了新的语法和功能，如箭头函数、解构赋值和模块化。
- 特点：ES6 提升了 JavaScript 语言的开发体验，使代码更简洁、更具可读性。

## Tailwindcss

- 用途：Tailwind 是一个实用工具优先的 CSS 框架，通过类名控制样式，而不是通过写样式表。
- 特点：通过预定义的样式类快速设计 UI，保持 CSS 代码的结构清晰和简洁，适合快速原型设计。

```shell
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

npx tailwindcss -i ./src/assets/tailwind.css -o ./src/assets/output.css --watch
```

## SaSS
- 用途：Sass 是一种扩展 CSS 的预处理语言，支持变量、嵌套、混合等高级功能，简化了 CSS 编写。
- 特点：更强的可维护性和复用性，使大型 CSS 项目的管理更加容易。

```shell
npm install -D sass sass-loader

```

## Jest
- 用途：Jest 是一个 JavaScript 测试框架，主要用于单元测试和快照测试，通常用于测试 Vue、React 等框架。
- 特点：配置简单，支持模拟和异步测试，适合测试前端逻辑和组件。
```shell
npm install --save-dev jest @vue/test-utils babel-jest

```

## Cypress and Percy
- 用途：Cypress 是一个前端自动化测试工具，专注于端到端 (E2E) 测试。
- 特点：提供直观的 UI，支持浏览器内调试，适合测试用户流程和应用整体功能。
- 用途：Percy 是一个可视化回归测试工具，主要用于捕捉界面变化，确保视觉一致性。
- 特点：和 Cypress 等工具结合使用，可以在 UI 变动时生成快照对比，检测意外的视觉错误。
```shell
npm install --save-dev cypress
npx cypress open
npm install --save-dev @percy/cli @percy/cypress
npx percy exec -- cypress run
```


## BEM (Block-Element-Modifier)
- 用途：BEM 是一种 CSS 命名规范，用于帮助开发者编写可读性和复用性强的 CSS。
- 特点：通过块（Block）、元素（Element）和修饰符（Modifier）命名方式，解决样式冲突问题。