<template>
  <div>
    <pre>
      {{ contents }}
    </pre>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    return {
      contents: await $content('lezioni/algebra').without(['body']).fetch(),
    }
  },
}
</script>
