<template lang="html">
  <div class="mynav">
    <b-navbar toggleable type="inverse" variant="primary">

      <b-nav-toggle target="nav_collapse"></b-nav-toggle>

      <b-link class="navbar-brand" to="./">
        <span>Hacktivpress</span>
      </b-link>

      <b-collapse is-nav id="nav_collapse">
        <b-nav v-if="user._id" is-nav-bar class="ml-auto">
          <b-button to="./create" size="" variant="info" href="">
          Create New Article
        </b-button>
          <b-nav-item>Welcome, {{ user.username }}</b-nav-item>

          <b-nav-item-dropdown right>

            <!-- Using text slot -->
            <template slot="text">
              <span style="font-weight: bold;">User</span>
            </template>

            <b-dropdown-item to="#">Profile</b-dropdown-item>
            <b-dropdown-item @click="doLogout">Signout</b-dropdown-item>
          </b-nav-item-dropdown>

        </b-nav>
        <b-nav v-else is-nav-bar class="ml-auto">
          <b-nav-item to="./registration">Register/Login</b-nav-item>
        </b-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  methods: {
    doLogout () {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      this.$store.commit('logout')
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
.mynav {
  margin-bottom: 60px;
}
</style>
