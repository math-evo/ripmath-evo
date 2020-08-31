<template>
  <span ref="katex" class="math formula latex" v-html="formula"></span>
</template>

<script>
import katex from 'katex'

export default {
  name: 'Katex',
  props: {
    displayMode: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      formula: 'loading...'
    }
  },
  mounted () {
    const formula = this.$slots.default.map(vnode => vnode.text).join('\n')
    console.log(this.formula, this.displayMode)
    this.formula = katex.renderToString(formula, { displayMode: this.displayMode })
  }
}
</script>
