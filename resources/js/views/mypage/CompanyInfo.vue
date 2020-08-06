<template>
    <div>
        <div class="company_profile">
            <h4>Profile</h4>
            <div class="company_container">
                <table>
                    <thead>
                        <tr>
                            <th>名前</th>
                            <td>{{companies.company_name}}</td>
                        </tr>
                        <tr>
                            <th>性別</th>
                            <td></td>
                        </tr>
                        <tr>
                            <th>身長</th>
                        </tr>
                        <tr>
                            <th>アイディ</th>
                        </tr>
                        <tr>
                            <th>ニックネーム</th>
                        </tr>
                        <tr>
                            <th>加入日</th>
                        </tr>
                        <tr>
                            <th>メール</th>
                        </tr>
                        <tr>
                            <th>所属事務所</th>
                        </tr>
                        <tr>
                            <th>分野</th>
                        </tr>
                    </thead>
                </table>
            </div>
                <button>貯蔵</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'company',
    data() {
        return {
            companies: [],
            companyData: {
                name: '',
                image: '',
            },
            editCompanyData: {},
            errors: {}
        }
    },
    mounted() {
        this.loadCompanyInfo();
    },
    methods: {
        loadCompanyInfo: async function() {
            const url = '/api/mypage/companyinfo';

            this.axios.get(url).then(response => {
                console.log(response.data);
                this.companies = response.data;
            });
        },
    }
}
</script>

<style>
.company_profile {
    display: flex;
    flex-direction: column;
    padding: 1vw;
}
.company_container {
    display: flex;
}
table {
    padding: 1vw;
}
</style>