<template>
    <div>
        <div class="edit">
            <h4>Profile</h4>
            <div class="edit_container">
                <table>
                    <thead>
                        <tr>
                            <th>이름</th>
                            <th>v-for</th>
                        </tr>
                        <tr>
                            <th>성별</th>
                            <td>v-for</td>
                        </tr>
                        <tr>
                            <th>키</th>
                            <td>v-for</td>

                        </tr>
                        <tr>
                            <th>아이디</th>
                            <td>v-for</td>
                        </tr>
                        <tr>
                            <th>닉네임</th>
                            <td><input type="text"></td>
                        </tr>
                        <tr>
                            <th>가입일</th>
                            <td>v-for</td>
                        </tr>
                        <tr>
                            <th>이메일</th>
                            <td>v-for</td>
                        </tr>
                        <tr>
                            <th>소속사</th>
                            <td><input type="text"></td>
                        </tr>
                        <tr>
                            <th>분야</th>
                            <td><input type="text"></td>
                        </tr>
                    </thead>
                </table>
            </div>
                <button>저장하기</button>
        </div>
    </div>
</template>

<script>
export default {

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
}
table {
    border-collapse: separate;
    border-spacing: 2vh;
}
</style>