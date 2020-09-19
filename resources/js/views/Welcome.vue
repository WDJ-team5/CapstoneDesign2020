  
<template>
    <div class="homeContainer">
        <!-- <br> -->
        <section class="section section--demo-4">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <agile
                            class="main"
                            ref="main"
                            :options="options1"
                            :as-nav-for="asNavFor1"
                        >
                            <div
                                class="slide slide_main"
                                v-for="(slide, index) in slides"
                                :key="index"
                                :class="`slide--${index}`"
                            >
                                <router-link :to="slidesUrl[index]">
                                    <div id="slideBox">
                                        <div id="slideBoxTitle">{{slidesTitle[index]}}</div>
                                        <div id="slideBoxContent">{{slidesContent[index]}}</div>
                                    </div>
                                    <img :src="slide" />
                                </router-link>
                            </div>
                        </agile>
                    </div>
                    <div class="col-xs-12">
                        <agile
                            class="thumbnails"
                            ref="thumbnails"
                            :options="options2"
                            :as-nav-for="asNavFor2"
                        >
                            <div
                                class="slide slide--thumbniail"
                                v-for="(slide, index) in slides"
                                :key="index"
                                :class="`slide--${index}`"
                                @click="$refs.thumbnails.goTo(index)"
                            >
                                <img :src="slide" />
                            </div>
                            <template slot="prevButton">
                                &lt;
                                <!-- <i class="fas fa-angle-left">  </i> -->
                            </template>
                            <template slot="nextButton">
                                &gt;
                                <!-- <i class="fas fa-angle-left">  </i> -->
                            </template>
                        </agile>
                    </div>
                </div>
            </div>
        </section>

        <div class="homeContainerChild">
            <hr />
            <h4>専門家</h4>
            <hr>
            <div id="popular">
                <div id="popularMain">
                    <a href="#">
                        <img :src="`${$store.state.serverPath}/storage/${expertsImage[0]}`"/>
                    </a>
                </div>
                <div id="popularSub">
                    <div class="popular-sub-child">
                        <a href="#">
                            <img :src="`${$store.state.serverPath}/storage/${expertsImage[1]}`"/>
                        </a>
                    </div>
                    <div class="popular-sub-child">
                        <a href="#">
                            <img :src="`${$store.state.serverPath}/storage/${expertsImage[2]}`"/>
                        </a>
                    </div>
                </div>
            </div>
            <hr />
            <h4>オーディション</h4>
            <hr />
            <div class="home_list" v-for="(audition, index) in auditions" :key="index">
                <router-link :to="auditionsUrl[index]"><img :src="`${$store.state.serverPath}/storage/${audition.aud_image}`"/></router-link>
            </div>
            <br />
        </div>
    </div>
</template>

<script>
import * as homeService from "../services/home.service";
import { VueAgile } from "vue-agile";

export default {
    name: "home",
    components: {
        agile: VueAgile
    },
    data() {
        return {
            contents: [],
            auditions: [],
            lectures: [],
            experts: [],
            contentData: {
                name: ""
            },
            editContentData: {},
            errors: {},

            // vue-agile
            asNavFor1: [],
            asNavFor2: [],
            options1: {
                dots: false,
                fade: true,
                navButtons: false
            },
            options2: {
                autoplay: true,
                autoplaySpeed: 5000,
                centerMode: true,
                dots: false,
                navButtons: false,
                slidesToShow: 3,
                responsive: [
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 5
                        }
                    },
                    {
                        breakpoint: 1000,
                        settings: {
                            navButtons: true
                        }
                    }
                ]
            },
            slides: [
                "test",
                "test",
                "test",
                "test",
                "test",
                "test",
                "test",
            ],
            slidesTitle: [
                "test",
                "test",
                "test",
                "test",
                "test",
                "test",
                "test",
            ],
            slidesContent: [
                "test",
                "test",
                "test",
                "test",
                "test",
                "test",
                "test",
            ],
            slidesUrl: [
                "test",
                "test",
                "test",
                "test",
                "test",
                "test",
                "test",
            ],
            auditionsUrl: [
                "test",
                "test",
                "test",
                "test",
                "test",
                "test",
                "test",
                "test",
            ],
            expertsImage: [
                "test",
                "test",
                "test",
            ],
            expertsName: [
                "test",
                "test",
                "test",
            ],
            expertsIntro: [
                "test",
                "test",
                "test",
            ]
            // vue-agile
        };
    },
    mounted() {
        this.loadHomeContents();
        this.asNavFor1.push(this.$refs.thumbnails);
        this.asNavFor2.push(this.$refs.main);
    },
    methods: {
        loadHomeContents: async function() {
            try {
                const response = await homeService.loadHomeContents();
                // [0] : auditions
                // [1] : lectures
                this.auditions = response.data[0];
                this.auditionsUrl = [];
                for(var i = 0; i < this.auditions.length; i ++){
                    this.auditionsUrl.push(`/auditiondetail/${this.auditions[i].id}`);
                }

                this.lectures = response.data[1];
                this.slides = [];
                this.slidesTitle = [];
                this.slidesContent = [];
                this.slidesUrl = [];
                for(var i = 0; i < this.lectures.length; i ++){
                    this.slides.push(`http://localhost:8000/storage/${this.lectures[i].image}`);
                    this.slidesTitle.push(this.lectures[i].title);
                    this.slidesContent.push(this.lectures[i].content)
                    this.slidesUrl.push(`/lecturePlay/${this.lectures[i].id}`);
                }

                this.experts = response.data[2];
                this.expertsImage = [];
                this.expertsName = [];
                this.expertsIntro = [];
                for(var i = 0; i < this.experts.length; i ++){
                    this.expertsImage.push(this.experts[i].image);
                    this.expertsName.push(this.experts[i].name);
                    this.expertsIntro.push(this.experts[i].introduction);
                }
            } catch (error) {
                // console.log(error);
                // this.flashMessage.success({
                //     message: "에러발생...여긴...Read...",
                //     time: 3000
                // });
            }
        }
        // CRUD : Create
        // Home은 Create가 필요없다.
        // CRUD : Update
        // Home은 Update가 필요없다.
        // CRUD : Delete
        // Home은 Delete가 필요없다.
    }
};
window.addEventListener("resize", function handleResize(event) {
    event.stopImmediatePropagation();
});
</script>

<style>
.homeContainer {
    width: 100%;
}
.homeContainerChild {
    width: 70%;
    margin: 0 auto;
}
div > a > img {
    width: 100%;
    height: 100%;
    transition: transform 0.5s;
}
#popular {
    width: 75%;
    display: flex;
    flex-direction: row;
    margin: 0 auto;
}
#popularMain {
    width: 65vw;
    overflow: hidden;
}
#popularMain > a > img {
    transition: 0.5s;
    filter: grayscale(100%);
}
#popularMain > a > img:hover {
    transition: 0.5s;
    /* opacity: 0.9; */
    filter: none;
    transform: translateZ(0);
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
    overflow: hidden;
}
.popular-sub-child > a > img {
    transition: 0.5s;
    filter: grayscale(100%);
}
.popular-sub-child > a > img:hover {
    transition: 0.5s;
    filter: none;
    /* opacity: 0.75; */
    transform: translateZ(0);
}
.home_list {
    width: 100%;
    display: flex;
    flex-direction: row;
}
.home_list > a {
    overflow: hidden;
}
.home_list > a > img {
    transition: 0.5s;
    /* filter: grayscale(100%); */
}
.home_list > a > img:hover {
    opacity: 0.75;
    transition: 0.5s;
    /* filter: none; */
}

/* ===== carousel css ===== */
.fas fa-chevron-left {
    visibility: visible;
}
.fas fa-chevron-right {
    visibility: visible;
}
.col-xs-12 {
    width: 100%;
}
.section--demo-4 .main {
    margin-bottom: 30px;
}

.section--demo-4 .thumbnails {
    margin: 0 -5px;
    width: calc(100% + 10px);
}

.section--demo-4 .agile__actions {
    position: static;
}

.section--demo-4 .agile__nav-button {
    background: transparent;
    border: none;
    color: #ccc;
    cursor: pointer;
    font-size: 24px;
    transition-duration: 0.3s;
}

.section--demo-4 .agile__nav-button:hover {
    color: #888;
}

.section--demo-4 .agile__dot {
    margin: 0 10px;
}

.section--demo-4 .agile__dot button {
    background-color: #eee;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: block;
    height: 10px;
    font-size: 0;
    line-height: 0;
    margin: 0;
    padding: 0;
    transition-duration: 0.3s;
    width: 10px;
}

.section--demo-4 .agile__dot--current button,
.section--demo-4 .agile__dot:hover button {
    background-color: #888;
}

.section--demo-4 .thumbnails .agile__nav-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}

.section--demo-4 .thumbnails .agile__nav-button--prev {
    left: -45px;
}
.section--demo-4 .thumbnails .agile__nav-button--next {
    right: -45px;
}
.section--demo-4 .slide {
    align-items: center;
    box-sizing: border-box;
    color: #fff;
    display: flex;
    height: 550px;
    justify-content: center;
}

.section--demo-4 .slide--thumbniail {
    cursor: pointer;
    height: 100px;
    padding: 0 5px;
    transition: opacity 0.3s;
}

.section--demo-4 .slide--thumbniail:hover {
    opacity: 0.75;
}

.section--demo-4 .slide img {
    height: 100%;
    object-fit: cover;
    object-position: center;
    width: 100%;
}

.slide:hover {
    transition: opacity 0.3s;
    opacity: 0.75;
}

#slideBox {
    background-color: rgba(50, 50, 50, 0.8);
    position: absolute;
    bottom: 5%;
    right: 0%;
    width: 60%;
    height: 15%;
    color: white;
}

#slideBoxTitle {
    font-size: 125%;
    font-weight: 700;
}
</style>
