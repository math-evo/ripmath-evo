<template>
  <div>
    <nuxt-link v-for="content in links" :key="content.path" :to="content.path">
      {{ content.title }}
    </nuxt-link>
    <pre>
      {{ contents }}
    </pre>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    return {
      contents: await $content('lezioni/algebra').without(['body']).fetch()
    }
  },
  computed: {
    links () {
      return this.contents ? this.contents : []
    }
  }
}
</script>
