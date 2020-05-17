<template>
<div>
    <div class="apply">
        <div class="apply_container">
            <table id="apply_table">
                <thead>
                    <th>오디션명</th>
                    <th>지원분야</th>
                    <th>날짜</th>
                </thead>
                <tbody>
                    <tr v-for="(apply, index) in applies" :key="index">
                        <td>{{apply.content}}</td>
                        <td>{{apply.id}}</td>
                        <td>{{apply.title}}</td>
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
            const url = 'api/mypage/apply';

            this.axios.get(url).then(response => {
                console.log(response.data);
                this.applies.push(response.data);
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
th {
    text-align: center;
}
td {
    text-align: center;
}
</style>