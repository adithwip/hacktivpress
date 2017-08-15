<template lang="html">
  <div>
    <div v-for="article in articles">
      <h2>{{ article.title }}</h2>
      <h4 class="small"><small>By {{article.author.username }}</small></h4>
      <h4 class="small"><small>Created on {{article.createdAt }}</small></h4>
      <p class="content" v-for="content in article.articleContent.split('\n')">{{ content }}</p>
      <p>{{ article.category }}</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    articles () {
      return this.$store.getters.articles
    }
  }
}
</script>

<style lang="css" scoped>
h4 > small {
  padding: 0;
  margin: 0;
  line-height: 0.7em;
}
small {
  font-size: 12px;
}

.content {
  margin-top: 20px;
}
</style>
