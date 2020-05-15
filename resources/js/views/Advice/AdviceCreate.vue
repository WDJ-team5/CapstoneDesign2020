<template>
    <div class="feedback-create-page">
        <div class="feedback-create-form"> 

            <form v-on:submit.prevent="createFeedback">

                <div class="feedback-title-form">
                    <b-form-input class="feedback-title" placeholder="제목을 입력하세요"></b-form-input>
                </div>

                <div class="feedback-info">
                    <label class="receiver">
                        <label>Receiver : </label>
                        <label>Receiver name</label>
                    </label>

                    <label class="video">
                        <label>첨부영상 : </label>
                        <div class="video-form">
                            <b-form-input id="video"  placeholder="링크를 입력하세요"></b-form-input>
                        </div>
                    </label>
                </div>

                <b-form-textarea id="textarea-rows" placeholder="내용을 입력해주세요" rows="22"></b-form-textarea>

                <div class="feedback-btn">
                    <b-button class="feedback-send-btn" type="submit" variant="primary">보내기</b-button>
                    <b-button variant="danger" @click="cancle">취소</b-button>
                </div>

            </form>  

        </div>
    </div>
</template>

<script>
import * as feedbackService from "../../services/feedback_service";
export default {
    name:'FeedbackCreate',
    data() {
        return {
            FeedbackData:{
                title:'',
                content: '',
                userId: 1,
                date:'',
                video:'',
            },
            errors:{},
            state:false,
        }
    },
    created(){

    },
    methods:{
        createFeedback: async function(){
            let formData=new FormData();
            formData.append('title',this.feedbackData.title);
            formData.append('date',this.feedbackData.date);
            formData.append('content',this.feedbackData.content);
            formData.append('video',this.feedbackData.video);
            formData.append('selected',this.feedbackData.selected);

            try{
                const response=await feedbackService.createFeedback(formData);
                history.back();
            }catch(error){
                console.log(error.response.status);
                switch (error.response.status) {
                    case 422:
                        this.errors=error.response.data.errors;
                        break; 
                    default:
                        this.flashMessage.error({
                            message: 'this is error',
                            time:5000
                        });
                }
            }
        },
        uploadContet(){

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
        width: 800px;
    }

    .feedback-title-form {
        margin-bottom: 20px;
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

    .feedback-title{
        height: 60px;
    }

    .feedback-btn {
        margin-top : 30px;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .feedback-send-btn {
        margin-right: 5px;
    }

</style>