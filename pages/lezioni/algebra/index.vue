<template>
  <div>
    <nuxt-link v-for="link in links" :key="link.path" :to="link.path">
      {{ link.title }}
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
      content: (await $content('lezioni').where({ slug: { $eq: 'algebra' } }).fetch())[0],
      contents: await $content('lezioni/algebra').without(['body']).fetch()
    }
  },
  head () {
    return {
      title: this.content.title
    }
  },
  computed: {
    links () {
      return this.contents ? this.contents : []
    }
  }
}
</script>
