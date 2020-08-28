<template>
  <nuxt-content :document="lezioni" />
</template>

<script>
export default {
  async asyncData({ $content }) {
    debugger
    return {
      lezioni: await $content('lezioni', 'index').fetch(),
    }
  },
}
</script>
