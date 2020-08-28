<template>
  <nuxt-content :document="page" />
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    console.log(params)
    const { slug = 'index' } = params
    const page = await $content('lezioni', slug).fetch()
    return { page }
  },
}
</script>
