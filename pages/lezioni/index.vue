<template>
  <nuxt-content :document="lezioni" />
</template>

<script>
export default {
  async asyncData ({ $content }) {
    debugger
    return {
      lezioni: (await $content('').where({ slug: { $eq: 'lezioni' } }).fetch())[0]
    }
  }
}
</script>
