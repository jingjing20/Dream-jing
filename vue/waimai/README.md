# waimai
- 组件式开发
    页面由组件构成(拼乐高) 而非标签(传统切页面)
    Facebook 由一万多个组件拼起来的 复用
    components/header/header.vue    用于多个页面
    1、引入组件 import header from './components/header/header.vue';
    2、声明组件
        components: {
        'v-header': header,
        'v-footer': footer
    },

- Object.assign({},...)     来自es6

- import from 模块化

- 组件化思维
    一方面是一个页面由好多组件构成 页面开发可以划分任务
    催生的是大量的团队合作
    每个组件要解耦  即不能影响别人的代码
    scoped  相当于作用域
    启用scoped  生成的样式是#App[data-v-1314520]

- vue 禁止DOM操作
    ref 留一个票据一样
    ref=""
    this.$refs
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
