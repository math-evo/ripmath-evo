<template>
  <nuxt-content :document="page" />
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    console.log(params)
    const page = await $content('lezioni', params.slug).fetch()
    return { page }
  },
}
</script>
