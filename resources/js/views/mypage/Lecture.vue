<template>
    <div>
        <div class="lecture">
            <div class="lecture_content">
                <div class="lecture_img">
                    <img src="http://placehold.it/150x150" alt="">
                </div>
                <div class="lecture_text">
                    <div>
                        <h5>솜방망이 춤...v-for</h5>
                    </div>
                    <div class="lecture_info">
                        <div>정확도 : 94%...v-for</div>
                        <div>날짜 : yyyy-mm-dd...v-for</div>
                    </div>
                </div>
            </div>
            <div class="lecture_content">
                <div class="lecture_img">
                    <img src="http://placehold.it/150x150" alt="">
                </div>
                <div class="lecture_text">
                    <div>
                        <h5>솜방망이 춤...v-for</h5>
                    </div>
                    <div class="lecture_info">
                        <div>정확도 : 94%...v-for</div>
                        <div>날짜 : yyyy-mm-dd...v-for</div>
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
.lecture {
    display: flex;
    flex-direction: column;
}
.lecture_content {
    display: flex;
    padding: 1vw;
}
h5 {
    font-weight: 700;
}
.lecture_text {
    display: flex;
    flex-direction: column;
    padding: 1vw;
}
</style>