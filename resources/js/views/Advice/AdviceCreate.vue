<template>
    <div>

        <div class="feedback-create-page">
            <div class="feedback-create-form"> 


                <form v-if="aid > 0" v-on:submit.prevent="updateFeedback">

                    <div class="row">

                        <div class="col-lg-4">

                            <h4>研究生 {{editFeedbackData.name}} 様に</h4>
                            <h6>フィードバックをお願いします</h6>

                            <hr />

                            <h5>ユーザーの動画 </h5>
                            <div class="img-box">
                                <video class="preview" controls width="300px" height="200px" :src="`${$store.state.serverPath}/storage/${editFeedbackData.video}`" type="video/mp4">
                                </video>
                            </div>

                        </div>


                        <div class="col-lg-8">

                            <div class="feedback-title-form">
                                <label class="feedback-title">RE : {{editFeedbackData.title}}</label>
                            </div>

                            <b-form-textarea id="textarea-rows" v-model="editFeedbackData.answer" placeholder="内容を入力してください" rows="15"></b-form-textarea>

                        </div>
                        
                    </div>

                    <div class="feedback-btn">
                        <b-button class="feedback-send-btn" type="submit" variant="primary">送る</b-button>
                        <b-button variant="danger" @click="cancle">戻る</b-button>
                    </div>

                </form> 



                <form v-else v-on:submit.prevent="createFeedback">

                    <div class="row">

                        <div class="col-lg-4">

                            <h4>専門家 {{this.$route.params.contentName}} に</h4>
                            <h6>アドバイスをもらいましょう</h6>

                            <hr />

                            <h5>動画アップロード</h5>
                            <div class="img-box">
                                <video class="preview" controls width="300px" height="200px" :src='imageData' type="video/mp4">
                                </video>
                            </div>

                            <div>
                                <label class="video">
                                    <div class="video-form file is-info has-name">
                                        <label class="file-label">
                                            <input class="file-input" type="file" ref="file" name="file" @change="addFile()">
                                            <span class="file-name" v-if="attachment.name" v-html="attachment.name"></span>
                                        </label>
                                    </div>
                                </label>
                            </div>

                        </div>


                        <div class="col-lg-8">

                            <div class="feedback-title-form">
                                <b-form-input class="feedback-title" size="lg" v-model="feedbackData.title" placeholder="タイトルを入力してください"></b-form-input>
                            </div>


                            <b-form-textarea id="textarea-rows" v-model="feedbackData.content" placeholder="内容を入力してください" rows="15"></b-form-textarea>


                        </div>
                        
                    </div>



                    <div class="feedback-btn">
                        <b-button class="feedback-send-btn" type="submit" variant="primary">送る</b-button>
                        <b-button variant="danger" @click="cancle">戻る</b-button>
                    </div>

            
                
                </form>  

            </div>
        </div>


    </div>

    


</template>

<script>
import * as feedbackService from "../../services/feedback_service";
export default {
    name:'FeedbackCreate',
    data() {
        const articleId = Number(this.$route.params.articleId);
        const expertId = Number(this.$route.params.expertId);
        return {
            files: {},
            file: {},
            fileName: '',
            attachment: '',
            editFeedbackData:[],
            feedbackData:{
                title : '',
                content : '',
                video : '',
                answer : '',
                expert_id : '',
            },
            errors:{},
            state:false,
            aid:articleId,
            eid:expertId,
            imageData:'',
        }
    },
    created(){
        // if (this.$route.params.articleId > 0) {
        //     // this.aid = Number(this.$route.params.articleId);
        //     this.loadDetailFeedback();
        // }
    },
    mounted(){
        if (this.aid > 0) {
            // this.aid = Number(this.$route.params.articleId);
            this.loadDetailFeedback();
        }
        console.log(this.$route.params);
    },
    methods:{
        addFile() {
            this.attachment = this.$refs.file.files[0];
            
            var input = this.$refs.file;
            // Ensure that you have a file before attempting to read it
            if (input.files && input.files[0]) {
                // create a new FileReader to read this image and convert to base64 format
                var reader = new FileReader();
                // Define a callback function to run, when FileReader finishes its job
                reader.onload = (e) => {
                    // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
                    // Read image as base64 and set to imageData
                    this.imageData = e.target.result;
                    console.log(e.target.result);
                }
                // Start the reader job - read file as a data url (base64 format)
                reader.readAsDataURL(input.files[0]);
            }
        },
        createFeedback: async function(){
            let formData=new FormData();
            formData.append('title',this.feedbackData.title);
            formData.append('content',this.feedbackData.content);
            formData.append('file', this.attachment);
            formData.append('answer',null);
            formData.append('answer_date',null);
            formData.append('expert_id',this.$route.params.contentId);
            // console.log(...formData);
            try{
                const response=await feedbackService.createFeedback(formData);
                // console.log("일단 요청은 성공적");

                history.back();
                
            }catch(error){
                console.log(error.response.data);
                switch (error.response.status) {
                    case 422:
                        this.errors=error.response.data.errors;
                        break; 
                    default:
                        this.flashMessage.error({
                            message: '안돼영',
                            time:5000
                        });
                }
            }
        },
        loadDetailFeedback: async function(){
            try{
                const response=await feedbackService.loadDetailFeedback(this.aid, this.eid);
                console.log('피드백 디테일 정보',response.data[0]);
                this.editFeedbackData.unshift(response.data[0]);
                this.editFeedbackData=response.data[0]; 
                // this.state=true;
            }catch(error){
                this.flashMessage.error({
                    message: '데이터 받기 실패',
                    time:5000
                });
            }
        },
        updateFeedback: async function(){
            let formData=new FormData();
            formData.append('title',this.editFeedbackData.title);
            formData.append('content',this.editFeedbackData.content);
            formData.append('video',this.editFeedbackData.video);
            formData.append('answer',this.editFeedbackData.answer);
            formData.append('answer_date',null);
            formData.append('expert_id',this.eid);
            formData.append('user_id',this.editFeedbackData.user_id);
            formData.append('_method','put');
            try{
                const response=await feedbackService.updateFeedback(this.aid,formData);
                console.log('업데이트성공');
                console.log(response.data);
                // console.log("업데이트한 내용", response.data);

                history.back();
                
            }catch(error){
                // console.log(error.response.data);
                switch (error.response.status) {
                    case 422:
                        this.errors=error.response.data.errors;
                        break; 
                    default:
                        this.flashMessage.error({
                            message: '보내기 실패',
                            time:5000
                        });
                }
            }
        },
        cancle(){
            this.$router.push({
                path:'/expert/list'
            })
        }
    }
}
</script>

<style>

    .feedback-create-page {
        width: 100%;
        margin-top: 20px;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .feedback-create-form {
        width: 1000px;
    }

    .feedback-title-form {
        margin-bottom: 20px;
    
    }

    .form-control{
        background-color:#f5f5f5;
    }

    .feedback-info {
        height: 60px;
    }

    .video {
        float:right;
    }

    .video-form{
        width: 300px;
        display: inline-block;
        margin: 0 0 0 0;
        padding: 0 0 0 0;
    }

    .receiver {
        float:left;
        margin-top:8px;
        margin-left:5px;
    }

    .feedback-btn {
        margin-top : 30px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-bottom: 30px;
    }

    .feedback-send-btn {
        margin-right: 5px;
    }

</style>