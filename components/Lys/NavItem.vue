<template>
  <li>
    <nuxt-link :to="{ name: route.name }">
      {{ route.label }}
    </nuxt-link>
    <lys-nav
      v-if="route.children"
      :routes="route.children" />
  </li>
</template>

<script>
import LysNav from '~/components/Lys/Nav.vue'
import Vue from 'vue'
export default {
  name: 'LysNavItem',
  props: {
    route: {
      type: Object,
      default () { throw 'route props in LysNavItem is required' }
    }
  },
  created () {
    this.$options.components[LysNav.name] = Vue.extend(LysNav)
  }
}
</script>
