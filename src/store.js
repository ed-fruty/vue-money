import moment from "moment";

export  default  {
    state: {
        history: [],
            currency: '$',
    },
    getters: {
        total: (state) =>  {
            return state.history.reduce((sum, row) => {
                return row.type === 'debit' ? sum + row.amount : sum - row.amount;
            }, 0).toFixed(2);
        }
    },
    mutations: {
        changeCurrency(state, newCurrency) {
            state.currency = newCurrency;
        },

        addHistory(state, {amount, type, comment, date = moment().format('YYYY.MM.DD HH:mm:ss')}) {
            state.history.push({amount, type, comment, date});

        },

        replaceHistory(state, arrayOfHistory) {
            arrayOfHistory.forEach(history => {
                if (! history.date) {
                    history.date = moment().format('YYYY.MM.DD HH:mm:ss');
                }
            });

            state.history = arrayOfHistory;
        }
    },
    actions: {
        async fetchHistory({commit, state}) {
            console.log('FETCH START', new Date());
            state.history = [];
            const history = localStorage.getItem('history');

            if (history) {
                const historyArray = JSON.parse(history);

                historyArray.forEach(item => commit('addHistory', item));
            }
        },

        async addHistory({commit, state}, history) {
            commit('addHistory', history);

            localStorage.setItem('history', JSON.stringify(state.history));
        }
    }
}
