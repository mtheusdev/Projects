<template>
  <div>
    <AppToolbar v-model="drawer"/>
    <AppMenu v-model="drawer"/>
    <v-container grid-list-md>
      <v-layout>
        <v-flex xs12>
          <slot />
        </v-flex>
      </v-layout>
    </v-container>
    <AppFloatingButton/>
  </div>
</template>

<script>

import AppToolbar from './AppToolbar'
import AppFloatingButton from './AppFloatingButton'
import AppMenu from './AppMenu'

export default {
  name: 'AppLayout',
  components: {
    AppToolbar,
    AppMenu,
    AppFloatingButton
  },
  data () {
    return {
      drawer: false
    }
  }
}
</script>

<style>

</style>
