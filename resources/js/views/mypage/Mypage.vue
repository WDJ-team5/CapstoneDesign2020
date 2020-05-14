<template>
    <div class="mypage_container">
        <br>
        <div class="mypage_wrap">
            <h2>ARTIST</h2>
            <div class="mypage_flex">
                <div class="mypage_profile">
                    <div id="profileImg">
                        <img src="http://placehold.it/266x266" />
                    </div>
                    <div class="profile_info">
                        <h4>Profile</h4>
                        <div class="table_flex">
                            <table>
                                <tr>
                                    <td>이름</td>
                                </tr>
                                <tr>
                                    <td>생년월일</td>
                                </tr>
                                <tr>
                                    <td>주소</td>
                                </tr>
                                <tr>
                                    <td>연락처</td>
                                </tr>
                                <tr>
                                    <td>소개</td>
                                </tr>
                            </table>
                            <table>
                                <tr>
                                    <td>안희건(v-for)</td>
                                </tr>
                                    <td>940330(v-for)</td>
                                <tr>
                                    <td>대구광역시 달서구(v-for)</td>
                                <tr>
                                    <td>010-6483-5850(v-for)</td>
                                </tr>
                                <tr>
                                    <td>소개안한다!(v-for)</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="mypage_header">
                    <div class="mypage_header_content">
                        <h3>안희건 AN HUIGEON</h3>
                        <h5>프로필 갱신 일전 www.facebook.com</h5>
                    </div>
                    <div class="mypage_navigation">
                        <div class="mypage_nav_link">
                            <router-link to="/mypage/profile" class="profile_link">
                                <span>프로필</span>
                            </router-link>
                            <router-link to="/mypage/lecture" class="profile_link">
                                <span>수강강좌</span>
                            </router-link>
                            <router-link to="/mypage/apply" class="profile_link">
                                <span>지원현황</span>
                            </router-link>
                            <router-link to="/mypage/companyinfo" class="profile_link">
                                <span>기업정보</span>
                            </router-link>
                            <router-link to="/mypage/auditionlist" class="profile_link">
                                <span>오디션등록내역</span>
                            </router-link>
                            <router-link to="/mypage/profileedit" class="profile_link">
                                <span>편집</span>
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
    margin-top: -133px;
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
.profile_link {
    width: calc(100% / 6);
    height: 5vh;
    display: inline-block;
    line-height: 5vh;
    overflow: hidden;
}
.profile_link:hover {
    background-color: #f5f5f5;
    transition:all 0.8s ease;
}
.profile_link:visited {
    background-color: #f5f5f5;
}
</style>