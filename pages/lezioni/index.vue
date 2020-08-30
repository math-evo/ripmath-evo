<template>
  <nuxt-content :document="content" />
</template>

<script>
export default {
  async asyncData ({ $content }) {
    debugger
    return {
      content: (await $content('').where({ slug: { $eq: 'lezioni' } }).fetch())[0]
    }
  },
  head () {
    return {
      title: this.content.title
    }
  }
}
</script>
