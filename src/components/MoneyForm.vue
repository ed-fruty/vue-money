<template>
    <div class="row">
        <div class="col-md-4">
            <div class="input-group">
                <div class="input-group-prepend">
                        <span class="input-group-text">
                            <img src="https://cdn3.iconfinder.com/data/icons/social-media-toolkit-1/32/comment-speak-social-media-tools-ui-512.png" width="16" alt="">
                        </span>
                </div>
                <input class="form-control" v-model="inputComment" placeholder="Comment">
            </div>
        </div>
        <div class="col-md-8">
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text">{{ this.$store.state.currency }}</span>
                </div>
                <input type="number" v-model="inputAmount"  class="form-control" placeholder="0.00">
                <div class="input-group-append">
                    <button class="btn btn-danger" type="button" @click="addHistory('credit')">-</button>
                    <button class="btn btn-success" type="button" @click="addHistory('debit')">+</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                inputComment: '',
                inputAmount: '',
            }
        },
        methods: {
            async addHistory(type) {
                const amount = parseFloat(this.inputAmount);

                if (Number.isNaN(amount) === false && (amount > 0 || amount < 0)) {
                    await this.$store.dispatch('addHistory', {
                        type,
                        amount,
                        comment: this.inputComment,
                    });

                    this.inputComment = '';
                    this.inputAmount = '';
                }

            }
        }
    }
</script>
