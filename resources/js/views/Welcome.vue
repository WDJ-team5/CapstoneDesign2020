<template>
    <div class="homeContainer">
        <h4>인기 동영상</h4>
        <div id="popular">
            <div id="popularMain">
                <a href="/"><img src="images/dance1.jpg" alt="x"/></a>
            </div>
            <div id="popularSub">
                <div class="popular-sub-child">
                    <a href="#"><img src="images/dance2.jpg" alt="x"/></a>
                </div>
                <div class="popular-sub-child">
                    <a href="#"><img src="images/dance3.jpg" alt="x"/></a>
                </div>
            </div>
        </div>
        <hr />
        <h4>기업연계</h4>
        <hr />
        <div class="home_list">
            <a href="#"><img src="images/dance4.jpg" alt="x"/></a>
            <a href="#"><img src="images/dance5.jpg" alt="x"/></a>
            <a href="#"><img src="images/dance6.jpg" alt="x"/></a>
            <a href="#"><img src="images/dance7.jpg" alt="x"/></a>
        </div>
        <hr />
        <h4>댄스경연</h4>
        <hr />
        <div class="home_list">
            <a href="#"><img src="images/dance8.jpg" alt="x"/></a>
            <a href="#"><img src="images/dance9.jpg" alt="x"/></a>
            <a href="#"><img src="images/dance10.jpg" alt="x"/></a>
            <a href="#"><img src="images/dance11.jpg" alt="x"/></a>
        </div>
        <hr />
        <h4>카테고리</h4>
        <hr />
        <div class="home_list">
            <a href="#"><img src="images/dance1.jpg" alt="x"/></a>
            <a href="#"><img src="images/dance2.jpg" alt="x"/></a>
            <a href="#"><img src="images/dance3.jpg" alt="x"/></a>
            <a href="#"><img src="images/dance4.jpg" alt="x"/></a>
        </div>
        <hr />
    </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      contents: [],
      contentData: {
        name:'',
      },
      editContentData: {},
      errors: {}
    }
  },
  mounted() {
    this.loadHomeContents();
  }
};
</script>

<style>
.homeContainer {
    width: 90%;
    margin: 0 auto;
}
img {
    width: 100%;
    height: 100%;
}
#popular {
    width: 100%;
    display: flex;
    flex-direction: row;
}
#popularMain {
    width: 65vw;
}
#popularSub {
    width: 35vw;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
}
.popular-sub-child {
    width: 100%;
    height: 100%;
}
.home_list {
    width: 100%;
    display: flex;
    flex-direction: row;
}
.carousel-inner > .carousel-item > img {
    /* width: 640px; height: 720px;  */
}
#demo {
    width: 100%;
}
</style>
