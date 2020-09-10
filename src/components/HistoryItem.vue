<template>
    <li class="list-group-item">
                        <span :class="item.type === 'debit' ? 'text-success' : 'text-danger'">
                            {{ item.type === 'debit' ? '+' : '-'}}
                            {{ item.amount }} {{ this.$store.state.currency }}
                        </span>
        <br>
        <span class="float-left"><small>{{ item.comment }}</small></span>
        <span class="float-right"><small>{{ item.date }}</small></span>
    </li>
</template>
<script>
    export default {
        props: ['item']
    }
</script>
