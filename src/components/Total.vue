<template>
    <h1 class="text-center text-primary font-weight-bold">
        <strong>{{ this.$store.getters['total'] }}</strong> {{ this.$store.state.currency }}
    </h1>
</template>
