<template lang="html">
  <div>
    <b-list-group>

      <b-list-group-item v-for="article in articles" :to="{ path: 'article', query: { id: article._id }}" :key="article._id">{{article.title}}</b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: '',
      selection: ''
      }]
    }
  },
  computed: {
    articles () {
      return this.$store.getters.articles
    }
  }
}
</script>

<style lang="css" scoped>
</style>
