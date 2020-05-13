

<script>
export default {

}
</script>

<style>
.profile {
    display: flex;
    padding: 1vw;
}
.img_div {
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

<template>
    <div>
        <div class="profile">
            <div class="profile_contents">
                <img src="http://placehold.it/200x200" alt="">
            </div>
            <div class="table_flex">
                <table class="table_margin">
                    <tr>수상</tr>
                    <tr>학력</tr>
                    <tr>특기</tr>
                    <tr>자기소개</tr>
                </table>
                <table class="table_margin">
                    <tr>수상경력...v-for()</tr>
                    <tr>학력...v-for()</tr>
                    <tr>특기...v-for()</tr>
                    <tr>자기소개...v-for()</tr>
                </table>
            </div>
        </div>
        <div class="score">
            <div>
                <img src="http://placehold.it/500x250" alt="">
            </div>
            <div>
                <button>전문가 등업 신청</button>
            </div>
        </div>
    </div>
</template>