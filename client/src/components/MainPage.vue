<template lang="html">
  <div class="container">
    <div class="row">
      <h1>Welcome to Hacktivpress</h1>
    </div>
    <div class="row content">
      <div class="col-3">
        <h4>Article List</h4>
        <ArticleList></ArticleList>
      </div>
      <div class="col-9">
        <Articles></Articles>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleList from '@/components/ArticleList'
import Articles from '@/components/Articles'
export default {
  components: {
    ArticleList,
    Articles
  }
}
</script>

<style lang="css" scoped>
.content {
  margin-top: 30px;
}
</style>
