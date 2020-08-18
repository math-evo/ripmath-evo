<template>
  <v-card>
    <v-tabs>
      <v-tab to="a~potenze/aa1~definizione">DEFINIZIONE</v-tab>
      <v-tab to="a~potenze/aa">PRODOTTO DI POTENZE CON LA STESSA BASE</v-tab>
      <v-tab to="a~potenze/aa">QUOZIENTE DI POTENZE CON LA STESSA BASE</v-tab>
      <v-tab to="a~potenze/aa">POTENZA DI UNA POTENZA</v-tab>
      <v-tab to="a~potenze/aa">POTENZA DI UN PRODOTTO</v-tab>
    </v-tabs>
    <v-card-text>
      <nuxt-child></nuxt-child>
    </v-card-text>
  </v-card>
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
