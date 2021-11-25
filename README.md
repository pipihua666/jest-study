## Jest 的简单配置

1. Jest 本身有默认配置。
2. 如果想要自己配置 Jest，则可在当前目录直接运行`npx jest --init`暴露出配置文件`jest.config.js`
3. 如果想用较新的语法时，比如 import 而非 require，则需要结合 babel 来进行转化

### 当配置了 babel，Jest 又是如何处理的呢？

1. jest 内部集成有`babel-jest`插件，它会检测当前环境是否安装了`babel`，或者说是否安装了`babel-core`
2. 如果安装了 babel，则 jest 会去取 babel.config.js（babel 配置文件还有其他类型）
3. 取到配置文件之后，会把测试代码（xxx.test.js）转化成 commonjs 的代码
4. 最后运行转化后的测试用例代码

### 当遇到 TypeScript 解析报错怎么办？

1. [ts-jest 和 jest 的大版本号不匹配](https://stackoverflow.com/questions/68734508/typeerror-jest-a-transform-must-export-a-process-function-jest)
2. [jest.config.ts 中的 transform 中的 ts 转换改成 'ts-jest',或者去除 test-jest，因为 preset: 'ts-jest'会自动对 tsx?进行转化](https://stackoverflow.com/questions/65188910/jest-withtypescript-syntaxerror-unexpected-token-expected)

## 什么是 TDD（Test Driven Development）？

### TDD 的开发流程（Red - Green Develepment）

1.  编写测试用例
2.  运行测试，测试用例无法通过测试
3.  编写代码，使测试用例通过测试
4.  优化代码，完成开发
5.  重复上述步骤

### TDD 的优势

1. 长期减少回归 Bug
2. 代码质量更好（组织，可维护性）
3. 测试覆盖率高
4. 错误测试代码不容易出现

## 什么是 BDD(Behavior Driven Development)

1. 先写业务代码
2. 然后根据用户行为（用户的一系列连贯的操作，敏捷来说就是一个 store）来写集成测试的代码

## TDD 和 BDD 的区别

### TDD

1. 先写测试再写代码
2. 一般结合单元测试使用，是白盒测试
3. 测试重点在代码
4. 安全感低
5. 速度快

### BDD

1. 先写代码再写测试
2. 一般结合集成测试使用,是黑盒测试
3. 测试重点在 UI(DOM)
4. 安全感高
5. 速度慢
