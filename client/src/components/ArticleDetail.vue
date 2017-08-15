<template lang="html">
  <div class="container">
    <div class="row">
      <div class="col-md-9">
        <h2>{{article.title}}</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <p class="content" v-for="content in article.articleContent.split('\n')">{{ content }}</p>
        <p>by {{ article.author }}</p>
        <p>{{article.category}}</p>
      </div>
    </div>
    <div class="row">
      <div class="col-10">
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      article: {}
    }
  },
  methods: {
    getArticle () {
      let id = this.$route.query.id
      var self = this
      this.axios.get(`http://localhost:3000/api/articles/${id}`)
      .then(response => {
        self.article = response.data
      })
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    }
  }
}
</script>

<style lang="css">
.buttonme {
  font-size: 20px;
  margin: 0 10px;
  cursor: pointer;
}
</style>
