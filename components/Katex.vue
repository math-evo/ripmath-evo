<template>
  <span ref="katex" class="math formula latex" v-html="formula"></span>
</template>

<script>
import katex from 'katex'

export default {
  name: 'Katex',
  data () {
    return {
      formula: 'loading...'
    }
  },
  mounted () {
    const formula = this.$slots.default.map(vnode => vnode.text).join('\n')
    this.formula = katex.renderToString(formula)
  }
}
</script>
