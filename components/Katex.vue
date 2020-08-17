<template>
  <span
    ref="katex"
    class="math formula latex"
    v-html="formula"
  ></span>
</template>

<script>
import katex from 'katex'
export default {
  name: 'Katex',
  data () {
    return {
      formula: "loading..."
    }
  },
  mounted () {
    let el = this.$slots.default.map(vnode => vnode.text).join("\n")
    debugger
    this.formula = katex.renderToString(el)
    console.log(el, this.formula)
  }
}
</script>