<template>
  <div>hello</div>
</template>

<script>
export default {
  fetch ({store}) {
    store.dispatch('Nav/setTitle', 'Lezioni')
  }
}
</script>
