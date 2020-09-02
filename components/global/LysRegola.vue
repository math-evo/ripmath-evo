<template>
  <v-card color="grey lighten-3" flat>
    <v-card-title>REGOLA:</v-card-title>
    <v-card-text class="indigo--text">
      {{ description }}
    </v-card-text>
    <v-card-actions>

      <v-btn
        icon
        block
        tile
        class="text-left"
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        <span v-if="!show">Se hai bisogno di aiuto per leggere la regola</span>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          <nuxt-content :document="content" />
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  name: 'LysRegola',
  props: {
    src: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      content: null,
      show: false
    }
  },
  computed: {
    description () {
      return this.content ? this.content.description : null
    }
  },
  async created () {
    this.content = await this.$content(this.src).fetch()
  }
}
</script>
