<template>
    <div>
        <div class="profile">
            <div class="profile_contents">
                <img src="http://placehold.it/200x200" alt="">
            </div>
            <div class="table_flex">
                <table class="table_margin">
                    <tr>
                        <th>사용자ID</th>
                        <td>{{profiles.userid}}</td>
                    </tr>
                    <tr>
                        <th>성별</th>
                        <td v-if="profiles.gender == true">여성</td>
                        <td v-if="profiles.gender == false">남성</td>
                    </tr>
                    <tr>
                        <th>등급</th>
                        <td v-if="profiles.class == 1">ARTIST</td>
                        <td v-if="profiles.class == 2">EXPERT</td>
                        <td v-if="profiles.class == 3">PRODUCER</td>
                    </tr>
                    <tr>
                        <th>소개</th>
                        <td>{{profiles.introduction}}</td>
                    </tr>
                    <tr>
                        <th>가입일</th>
                        <td>{{String(profiles.created_at)}}</td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="score">
            <div>
                <img src="http://placehold.it/500x250" alt="">
            </div>
            <div>
                <!-- <button>전문가 등업 신청</button> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'profile',
    data() {
        return {
            profiles: [],
            profileData: {
                name: '',
                image: '',
            },
            editProfileData: {},
            errors: {}
        }
    },
    mounted() {
        this.loadProfile();
    },
    methods: {
        loadProfile: async function() {
            const url = 'api/mypage/profile';

            this.axios.get(url).then(response => {
                console.log(response.data);
                this.profiles = response.data;
            });
        },
    }
}
</script>

<style>
.profile {
    display: flex;
    padding: 1vw;
}
.table_flex {
    display: flex;
}
.table_margin {
    border-collapse: separate;
    border-spacing: 1vh;
}
.score {
    display: flex;
    flex-direction: column;
    padding: 1vw;
}
</style>