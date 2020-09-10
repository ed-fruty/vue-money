<template>
  <div class="container" id="app">
    <currency-switcher></currency-switcher>
    <div class="row">
      <div class="col-md-12 mt-5">
        <total></total>
      </div>
    </div>
    <money-form></money-form>
    <div class="row">

      <div class="col-md-12 py-4">
        <history-list></history-list>
      </div>
    </div>
  </div>
</template>

<script>

import Total from './components/Total';
import MoneyForm from "./components/MoneyForm";
import HistoryList from './components/HistoryList';
import CurrencySwitcher from './components/CurrencySwitcher';

export default {
  name: 'App',
  components: {
    Total,
    MoneyForm,
    HistoryList,
    CurrencySwitcher,
  },
  async mounted() {
    await this.$store.dispatch('fetchHistory');
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
