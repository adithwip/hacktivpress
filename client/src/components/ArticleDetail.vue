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
        <p>by {{ article.author.username }}</p>
        <p>{{article.category}}</p>
      </div>
    </div>
    <div class="row">
      <div class="col-10">
      </div>
      <div class="col-2" v-if="user._id === article.author._id">
        <i class="fa fa-trash buttonme" aria-hidden="true" @click="doRemove" style="color: red"></i>
        <i class="fa fa-pencil-square-o buttonme" aria-hidden="true" @click="editArticle"></i>

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
    },
    doRemove () {
      var self = this
      let id = self.$route.query.id
      if (window.confirm('Are you sure?')) {
        this.axios.delete(`http://localhost:3000/api/articles/${id}`, {
          token: localStorage.getItem('token')
        })
        .then(response => {
          console.log(response)
          self.$store.dispatch('getArticles')
          self.$router.push('/')
        })
      }
    },
    editArticle () {

    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    }
  },
  created () {
    this.getArticle()
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
