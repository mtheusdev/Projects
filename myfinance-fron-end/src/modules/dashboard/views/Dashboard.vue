<template>
  <AppLayout>
    <router-view />
  </AppLayout>
</template>

<script>
import { registerVuexModule } from '@/utils'
import finnancesStore from './../modules/finances/store'
import AppLayout from './../components/AppLayout'
export default {
  name: 'Dashboard',
  components: {
    AppLayout
  },
  created () {
    registerVuexModule(this.$store, 'finances', finnancesStore)
  }
}
</script>

<style>

</style>
