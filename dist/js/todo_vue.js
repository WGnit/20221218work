const { createApp } = Vue
createApp({
    data() {
        return {
            items: [
                { status: 'pending', value: 1111 },
                { status: 'done', value: 2222 },
            ],
        }
    },
    methods: {

        addItem() {
            if (!this.valid()) {
                this.reset();
                return;
            }
            // 新增資料
            this.reset();
        },
        valid() {
            return this.$refs.itemName && this.$refs.itemName.value;
        },
        reset() {
            let itemName = this.$refs.itemName;
            if (itemName) {
                itemName.value = '';
                itemName.focus();
            }
        },
        changeStatus(index) {
            let status = this.items[index].status == 'pending' ? 'done' : 'pending';
            this.items[index].status = status;
            console.table(this.items);
        }
    }
}).mount('#app')