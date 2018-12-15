<template>
  <ul>
    <lys-nav-item
      v-for="route in routes"
      :key="route.name"
      :route="route"
      as="lys-nav-item"
    />
  </ul>
</template>

<script>
import LysNavItem from './NavItem.vue'
export default {
  name: 'LysNav',
  components: {
    LysNavItem
  },
  props: {
    routes: {
      type: Array,
      default: () => []
    }
  }
}
</script>

