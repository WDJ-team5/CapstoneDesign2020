<template>
<div>
    <div class="apply">
        <div class="apply_container">
            <table id="apply_table">
                <thead>
                    <th>オーディション名</th>
                    <th>その他のメッセージ</th>
                    <th>課題点数</th>
                    <th>合格・不合格</th>
                </thead>
                <tbody>
                    <tr v-for="(apply, index) in applies" :key="index">
                        <td>{{apply.audition.title}}</td>
                        <td>{{apply.message}}</td>
                        <td>{{apply.score}}</td>
                        <td v-if="apply.result == 0">検討中</td>
                        <td v-else-if="apply.result == 1">合格</td>
                        <td v-else>不合格</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'apply',
    data() {
        return {
            applies: [],
            applyData: {
                name: '',
                image: '',
            },
            editApplyData: {},
            errors: {}
        }
    },
    mounted() {
        this.loadMyResume();
    },
    methods: {
        loadMyResume: async function() {
            const url = '/api/mypage/apply';

            this.axios.get(url).then(response => {
                console.log("00000000000000000000000000000");
                console.log(response.data);
                // this.applies.push(response.data);
                this.applies = response.data;
            });
        },
    }
}
</script>

<style>
.apply_container {
    padding: 1vw;
}
#apply_table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 2vh;
}
thead {
    border-bottom: solid black 1px;
}
th {
    text-align: center;
}
td {
    text-align: center;
}
</style>