<template>
    <div class="mypage_container">
        <br>
        <div class="mypage_wrap">
            <h2 v-if="mypages.class == 1">ARTIST</h2>
            <h2 v-else-if="mypages.class == 2">EXPERT</h2>
            <h2 v-else>PRODUCER</h2>
            <div class="mypage_flex">
                <div class="mypage_profile">
                    <div id="profileImg">
                        <img :src="`${$store.state.serverPath}/storage/${mypages.image}`" />
                    </div>
                    <div class="profile_info">
                        <h4>Profile</h4>
                        <div class="table_flex">
                            <table>
                                <tr>
                                    <th>名前</th>
                                    <td>{{mypages.name}}</td>
                                </tr>
                                <tr>
                                    <th>生年月日</th>
                                    <td>{{mypages.birthday}}</td>
                                </tr>
                                <tr>
                                    <th>住所</th>
                                    <td>{{mypages.address}}</td>
                                </tr>
                                <tr>
                                    <th>連絡先</th>
                                    <td>{{mypages.call_number}}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="mypage_header">
                    <div class="mypage_header_content">
                        <h3>{{mypages.name}}</h3>
                        <h5>{{mypages.userid}}</h5>
                    </div>
                    <div class="mypage_navigation">
                        <div class="mypage_nav_link">
                            <!-- <router-link to="/mypage/profile" class="profile_link"> -->
                            <router-link :to="{name:'Profile', params: {data: mypages}}" class="profile_link">
                                <span>プロフィール</span>
                            </router-link>
                            <router-link to="/mypage/lecture" class="profile_link">
                                <span>受講講座</span>
                            </router-link>
                            <router-link to="/mypage/apply" class="profile_link">
                                <span>支援状況</span>
                            </router-link>
                            <router-link to="/mypage/auditionlist" class="profile_link" v-if="mypages.class == 3">
                                <span>オーディションの登録内訳</span>
                            </router-link>
                            <router-link to="/mypage/profileedit" class="profile_link">
                                <span>修整</span>
                            </router-link>
                        </div>
                        <router-view id="routerView"></router-view>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Mypage',

    data() {
        return {
            mypages: [],
            mypageData: {
                name: '',
                image: '',
            },
            editMypageData: {},
            errors: {}
        }
    },
    mounted() {
        this.loadProfile();
    },
    methods: {
        loadProfile: async function() {
            const url = '/api/mypage';

            try {
                this.axios.get(url).then(response => {
                    this.mypages = response.data;
                });
            } catch(error) {
                console.log(error);
            }
        },
    },
}
</script>

<style>
a {
    color: black;
    transition: all .9s;
}
.mypage_wrap {
    width: 90%;
    margin: 0 auto;
}
.mypage_wrap > h2 {
    margin-bottom: 5vh;
    color: red;
}
.mypage_flex {
    display: flex;
}
.mypage_profile {
    width: 30%;
    min-height: 65vh;
    display: flex;
    flex-flow: column;
    align-items: center;
    margin-top: 133px;
    background-color: #e7e7e7;
}
#profileImg {
    width: 266px;
    height: 266px;
    margin-top: -133px;
    border-radius: 133px;
    overflow: hidden;
}
#profileImg > img {
    width: 100%;
    height: 100%;
}
.mypage_nav_link{
    display: flex;
    height: 5vh;
    text-align: center;
    align-items: center;
    border-top: 1px solid #e7e7e7;
}
#routerView {
    background-color: #f5f5f5;
}
.mypage_nav_link > a:hover {
    color: #f86941;
    font-weight: 700;
    text-decoration: none;
    transition:all 0.8s ease;
}
.profile_info {
    width: fit-content;
}
.table_flex {
    display: flex;
}
.mypage_header {
    width: 70%;
}
.mypage_header_content {
    height: 133px;
}

.profile_link:nth-child(1):nth-last-child(4),
.profile_link:nth-child(1):nth-last-child(4) ~ .profile_link {
    width: calc(100% / 4);
    height: 5vh;
    display: inline-block;
    line-height: 5vh;
    overflow: hidden;
}
.profile_link:nth-child(1):nth-last-child(5),
.profile_link:nth-child(1):nth-last-child(5) ~ .profile_link {
    width: calc(100% / 5);
    height: 5vh;
    display: inline-block;
    line-height: 5vh;
    overflow: hidden;
}

.profile_link:hover {
    background-color: #f5f5f5;
    transition:all 0.8s ease;
}
.profile_link.router-link-exact-active.router-link-active {
    background-color: #f5f5f5;
}
.profile_link.router-link-exact-active.router-link-active > span {
    color: #f86941;
    font-weight: 700;
}
</style>