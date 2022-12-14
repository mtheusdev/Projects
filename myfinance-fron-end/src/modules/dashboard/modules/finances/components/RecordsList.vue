<template>
  <div>
    <TotalBalance class="mb-2"/>
    <ToolbarByMonth :month="month || $route.query.month" :color="toolbarColor" class="mb-2" format="MM-YYYY" @month="changeMonth" :showSlot="true">
      <RecordsFilter @filter="filter"/>
    </ToolbarByMonth>
    <v-card>
      <v-card-text v-if="mappedRecordsLength === 0" class="text-center">
        <v-icon size="100" color="grey">mdi-calendar-text</v-icon>
        <p class="font-weight-light subheading grey--text">
          Nenhum lançamento no período
        </p>
      </v-card-text>
    <v-list v-else two-line subheader>
      <template v-for="(records, date, index) in mappedRecords">
        <v-subheader :key="date">{{ date }}</v-subheader>
        <RecordsListItem v-for="record in records" :key="record.id" :record=record />
        <v-divider :key="`${date}-${index}`" v-if="showDivider(index, mappedRecords)"></v-divider>
      </template>
    </v-list>
    <v-footer class="pa-2">
      <v-flex text-right>
        <h3 class="font-weight-light">
          <span :class="amountColor(totalAmount)">Saldo do mês:</span>
          <strong class="ml-5" :class="amountColor(totalAmount)">{{ formatCurrency(totalAmount) }}</strong>
        </h3>
      </v-flex>
    </v-footer>
  </v-card>
  </div>
</template>

<script>

import amountColorMixin from './../mixins/amount-color'
import moment from 'moment'
import { groupBy } from '@/utils'
import RecordsListItem from './RecordsListItem'
import RecordsFilter from './RecordsFilter'
import RecordsService from './../services/records-service'
import formatCurrencyMixin from '@/mixins/format-currency'
import ToolbarByMonth from './ToolbarByMonth'
import TotalBalance from './TotalBalance'
import { Subject } from 'rxjs'
import { mergeMap } from 'rxjs/operators'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('finances')
export default {
  name: 'RecordsList',
  components: {
    RecordsListItem,
    ToolbarByMonth,
    TotalBalance,
    RecordsFilter
  },
  data: () => ({
    records: [],
    filtersSubject$: new Subject(),
    subscriptions: []
  }),
  mixins: [
    amountColorMixin,
    formatCurrencyMixin
  ],
  created () {
    this.setRecords()
  },
  computed: {
    mappedRecords () {
      return groupBy(this.records, 'date', (record, dateKey) => {
        return moment(record[dateKey].substr(0, 10)).format('DD/MM/YYYY')
      })
    },
    totalAmount () {
      return this.records.reduce((sum, record) => sum + record.amount, 0)
    },
    mappedRecordsLength () {
      return Object.keys(this.mappedRecords).length
    },
    toolbarColor () {
      return this.totalAmount < 0 ? 'error2' : 'greenPool2'
    },
    ...mapState(['filters', 'month'])
  },
  methods: {
    showDivider (index, object) {
      return index < Object.keys(object).length - 1
    },
    changeMonth (month) {
      this.$router.push({
        path: this.$route.path,
        query: { month }
      })
      this.filtersSubject$.next({ month })
      this.setMonth({ month })
      this.filter()
    },
    setRecords () {
      this.subscriptions.push(
        this.filtersSubject$.pipe(
          mergeMap(variables => RecordsService.records(variables))
        ).subscribe(records => (this.records = records))
      )
    },
    ...mapActions(['setMonth']),
    filter () {
      this.filtersSubject$.next({ month: this.month, ...this.filters })
    }
  },
  destroyed () {
    this.subscriptions.forEach(s => s.unsubscribe())
  }
}
</script>

<style>

</style>
