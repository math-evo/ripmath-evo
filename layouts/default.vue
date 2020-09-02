<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="link of toc"
          :key="link.path"
          :to="link.path"
        >
          <v-list-item-title>{{ link.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <!-- <v-toolbar-title v-text="title" /> -->
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      miniVariant: false,
      toc: null
    }
  },
  computed: {
    menu () {
      return this.toc ? this.toc : []
    }
  },
  async created () {
    this.toc = await this.$content('', { deep: true })
      .where({
        dir: {
          $regex: '^/(?!regole)'
        }
      })
      .fetch()
  }
}
</script>
