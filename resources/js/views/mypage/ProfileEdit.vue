<template>
    <div>
        <div class="edit">
            <h4>Profile</h4>
            <div class="edit_container">
                <table>
                    <thead>
                        <tr>
                            <td>
                                <img src="http://placehold.it/250x250" alt="">
                                <input type="file" class="form-control">
                            </td>
                        </tr>
                        <tr>
                            <th>名前</th>
                            <td>{{profiles.name}}</td>
                        </tr>
                        <tr>
                            <th>性別</th>
                            <td v-if="profiles.gender == false">男性</td>
                            <td v-else>女性</td>
                        </tr>
                        <tr>
                            <th>等級</th>
                            <td v-if="profiles.class == 1">ARTIST</td>
                            <td v-else-if="profiles.class == 2">EXPERT</td>
                            <td v-else>PRODUCER</td>
                        </tr>
                        <tr>
                            <th>アイディ</th>
                            <td>{{profiles.userid}}</td>
                        </tr>
                        <tr>
                            <th>加入日</th>
                            <td>{{profiles.created_at}}</td>
                        </tr>
                        <tr>
                            <th>修正日</th>
                            <td>{{profiles.updated_at}}</td>
                        </tr>
                        <tr>
                            <th>ランク</th>
                            <td>{{profiles.rank_name}}</td>
                        </tr>
                        <tr>
                            <th>生年月日</th>
                            <td>{{profiles.birthday}}</td>
                        </tr>
                        <tr>
                            <th>連絡先</th>
                            <td><input type="text"></td>
                        </tr>
                        <tr>
                            <th>所属事務所</th>
                            <td><input type="text"></td>
                        </tr>
                        <tr>
                            <th>自己紹介</th>
                            <td><input type="textarea"></td>
                        </tr>
                        <tr v-if="profiles.class == 3">
                            <th>社名</th>
                            <td><input type="text" :value="`${profiles.company_name}`"></td>
                        </tr>
                    </thead>
                </table>
            </div>
                <button class='editButton'>貯蔵</button>
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
            const url = '/api/mypage/profileedit';

            this.axios.get(url).then(response => {
                console.log(response.data);
                this.profiles = response.data;
            });
        },
    }
}
</script>

<style>
.edit {
    display: flex;
    flex-direction: column;
    padding: 1vw;
}
.edit_container {
    display: flex;
    width: fit-content;
}
table {
    border-collapse: separate;
    border-spacing: 2vh;
}
.editButton {
    border: solid 1px #f86941;
}
</style>