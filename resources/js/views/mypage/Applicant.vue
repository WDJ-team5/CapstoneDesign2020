<template>
    <div id="applicant_container">
        <div id="search_button">
            <button class="search_button_content" type="submit" v-on:click="searchAll">全体検索</button>
            <button class="search_button_content" type="submit" v-on:click="searchConsideration(0)">検討中検索</button>
            <button class="search_button_content" type="submit" v-on:click="searchPassed(2)">合格検索</button>
            <button class="search_button_content" type="submit" v-on:click="searchFailed(1)">不合格検索</button>
        </div>
        <br>
        <div class="applicant_wrapper" v-for="(applicant, index) in applicants" :key="index">
            <div class="applicant">
                <div>点数: {{applicant.score}}</div>
                <div>メッセージ: {{applicant.message}}</div>
                <div>申し込み日: {{String(applicant.created_at).substr(0, 10)}}</div>
                <div class="applicant_result">結果: 
                    <div v-if="applicant.result == 0">検討中</div>
                    <div v-else-if="applicant.result == 1">不合格</div>
                    <div v-else>合格</div>
                </div>
                <div class="applicant_button" v-if="applicant.result == 0">
                    <form v-on:submit.prevent="passApplicant">
                        <button class="applicant_button_pass" type="submit" v-on:click="chosenId(applicant)">合格</button>
                    </form>
                    <form v-on:submit.prevent="failApplicant">
                        <button class="applicant_button_fail" type="submit" v-on:click="chosenId(applicant)">不合格</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Applicant',
    data() {
        const applyId = Number(this.$route.params.id);

        return {
            id: applyId,
            applicants: [],
            applicantData: {
                name: '',
                image: '',
            },
            editApplicantData: {},
            errors: {}
        }
    },
    mounted() {
        this.loadApplyData();
    },
    methods: {
        searchConsideration: function(value) {
            this.axios.get(`/api/mypage/applicants/${this.id}/` + value, {value}).then(response => {
                this.applicants = response.data;
                console.log('searchConsideration: ', response);
            });
        },
        searchPassed: function(value) {
            this.axios.get(`/api/mypage/applicants/${this.id}/` + value, {value}).then(response => {
                this.applicants = response.data;
                console.log('searchPassed: ', response);
            });
        },
        searchFailed: function(value) {
            this.axios.get(`/api/mypage/applicants/${this.id}/` + value, {value}).then(response => {
                this.applicants = response.data;
                console.log('searchFailed: ', response);
            });
        },
        searchAll: function() {
            const url = `/api/mypage/applicants/${this.id}`;

            this.axios.get(url).then(response => {
                this.applicants = response.data;
                console.log('searchAll: ', response);
            });
        },
        chosenId: function(applicant) {
            this.editApplicantData = {...applicant};
            console.log('chosenId: ', this.editApplicantData);
        },
        loadApplyData: async function() {
            const url = `/api/mypage/applicants/${this.id}`;

            this.axios.get(url).then(response => {
                this.applicants = response.data;
                console.log('loadApplyData: ', response);
            });
        },

        passApplicant: async function() {
            try {
                this.axios.put(`/api/mypage/applicants/${this.id}/` + this.editApplicantData, {value:2, applicant:this.editApplicantData}).then(response => {
                    console.log('passApplicant: ', response);
                    this.applicants.map(applicant => {
                        if (applicant.id == response.data.id) {
                            for(let key in response.data) {
                                applicant[key] = response.data[key];
                            }
                        }
                    });
                });
            } catch (error) {
                console.log(error);
            }
        },

        failApplicant: async function() {
            try {
                this.axios.put(`/api/mypage/applicants/${this.id}/` + this.editApplicantData, {value:1, applicant:this.editApplicantData}).then(response => {
                    console.log('failApplicant: ', response);
                    this.applicants.map(applicant => {
                        if (applicant.id == response.data.id) {
                            for(let key in response.data) {
                                applicant[key] = response.data[key];
                            }
                        }
                    });
                });
            } catch (error) {
                console.log(error);
            }
        },
    }
}
</script>

<style>
#applicant_container {
    width: 70%;
    margin: 0 auto;
}
#search_button {
    display: flex;
    height: 5vh;
    text-align: center;
    align-items: center;
    border-bottom: 1px solid #e7e7e7;
}
#applicant_head {
    display: flex;
}
.applicant_wrapper {
    margin-bottom: 1%;
}
#profileImg {
    width: 266px;
    height: 266px;
    border-radius: 133px;
    overflow: hidden;
}
#profileImg > img {
    width: 100%;
    height: 100%;
}
.applicant {
    display: flex;
}
.applicant_result {
    display: flex;
}
.search_button_content {
    background-color: #fff;
    color: black;
    border: none;
}
.applicant_button {
    display: flex;
}

#search_button > button:hover {
    color: #f86941;
    font-weight: 700;
    text-decoration: none;
    transition:all 0.8s ease;
}
.search_button_content:nth-child(1):nth-last-child(4),
.search_button_content:nth-child(1):nth-last-child(4) ~ .search_button_content {
    width: calc(100% / 4);
    height: 5vh;
    display: inline-block;
    line-height: 5vh;
    overflow: hidden;
}

.search_button_content:hover {
    background-color: #f5f5f5;
    transition:all 0.8s ease;
}

.applicant_button_pass {
    background-color:#f86941;
    border: solid 2px #f86941;
    color: #fff;
}
.applicant_button_fail {
    border: solid 2px #f86941;
    background-color: none;
}
</style>