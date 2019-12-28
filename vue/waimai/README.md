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
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
