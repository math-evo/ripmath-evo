<template>
  <nuxt-content :document="content" />
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    console.log(params)
    const content = await $content('lezioni/algebra', params.slug).fetch()
    return { content }
  },
  head () {
    return {
      title: this.content.title
    }
  }
}
</script>
