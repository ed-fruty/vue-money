<template>
    <div class="btn-group" role="group" aria-label="Basic example">
        <button @click="$store.commit('changeCurrency', 'USD')"
                class="btn btn-success">USD</button>
        <button @click="$store.commit('changeCurrency', 'EUR')"  class="btn btn-primary">EUR</button>
        <button @click="$store.commit('changeCurrency', 'UAH')"  class="btn btn-warning">UAH</button>
    </div>
</template>
