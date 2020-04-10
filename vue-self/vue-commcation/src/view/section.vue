// section父组件
<template>
  <div class="section">
    <com-article :articles="articleList" @onEmit="onEmitIndex"></com-article>
    <p>{{currentIndex}}</p>
  </div>
</template>

<script>
import comArticle from "../components/article";
export default {
  // name: "section",
  components: {
    comArticle
  },
  data() {
    return {
      articleList: ["红楼梦", "西游记", "三国演义"],
      currentIndex: -1
    };
  },
  methods: {
    onEmitIndex(index) {
      this.currentIndex = index;
    }
  }
};
</script>

