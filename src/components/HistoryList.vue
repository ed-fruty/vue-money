<template>
    <div>
        <ul class="list-group list-group-flush text-secondary" v-for="item in this.$store.state.history" :key="item.date">
            <history-item :item="item"></history-item>
        </ul>
    </div>
</template>

<script>
    import HistoryItem from "./HistoryItem";

    export default {
        components: {'history-item': HistoryItem}
    }
</script>
