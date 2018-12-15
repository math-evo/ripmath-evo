<template>
  <div>{{ title }}</div>
</template>

<script>
export default {
  data () {
    return {
      title: "Le potenze"
    }
  },
  fetch ({ store }) {
    store.dispatch('Nav/setTitle', 'Le potenze')
  }
}
</script>
