<template>
    <div id="form_input">
        <div id="form_header">
            <b-form-input id="title" v-model="subject" placeholder="제목을 입력해주세요"></b-form-input>
        </div>
        <div id="selct_area">
            <div class="select_item">
                <b-form-datepicker v-model="date" placeholder="마감기한 설정" id="example-datepicker" class="mb-2"></b-form-datepicker>
            </div>
            <div class="select_item">
                <div>
                    <b-form-select v-model="selected" :options="options"></b-form-select>
                </div>
            </div>
            <label style="margin-left:20px">템플릿 선택: </label>
            <div class="select_item">
                <b-form-file @change="uploadImage" class="mt-3" plain></b-form-file>
            </div>
            <label>영상과제: </label>
            <div class="select_item">
                <b-form-input id="video" v-model="video" placeholder="링크를 삽입해주세요"></b-form-input>
            </div>
        </div>
        <b-form-textarea
            id="textarea-rows"
            v-model="context"
            placeholder="내용을 입력해주세요"
            rows="22"
        ></b-form-textarea>
        <!-- 업데이트 모드가 트루일 경우(수정일 경우) updateContent 호출 , 업데이트 모드가 아닐 경우는 저장 -->
        <b-button variant="primary" @click="updateMode ? updateContent() : uploadContet()">저장</b-button>
        <b-button variant="danger" @click="cancle">취소</b-button>
    </div>
</template>

<script>
import data from '@/data'

export default {
    name:'Create',
    data() {
        return {
        subject: '',
        context: '',
        userId: 1,
        date:'',
        createdAt: '2019-04-17 11:32:42',
        updatedAt: null,
        updateObject:null,
        updateMode:this.$route.params.contentId>0?true:false,
        selectedFile:null,
        selected: null,
        sub_image:null,
        video:null,
        options: [
          { value: null, text: '랭크 설정' },
          { value: 'A랭크 이상', text: 'A랭크 이상' },
          { value: 'B랭크 이상', text: 'B랭크 이상' },
          { value: 'C랭크 이상', text: 'C랭크 이상' },
          { value: '랭크무관', text: '랭크무관' },
            ]
        }
    },

    created(){
        if (this.$route.params.contentId > 0) {
            const contentId = Number(this.$route.params.contentId)
            this.updateObject = data.Content.filter(item => item.content_id === contentId)[0]
            this.subject = this.updateObject.title;
            this.context = this.updateObject.context;
            this.date = this.updateObject.date;
            this.selected = this.updateObject.rank;
            this.sub_image=this.updateObject.sub_image;
            this.video=this.updateObject.video;
        }
    },

    methods:{
        // 저장 시
        uploadContet(){
            let items=data.Content.sort((a,b)=>{return b.content_id-a.content_id})
            const content_id=items[0].content_id+1

            data.Content.push({
                content_id:content_id,
                user_id:this.userId,
                title:this.subject,
                context:this.context,
                created_at:this.createdAt,
                date:this.date,
                sub_image:this.sub_image,
                video:this.video,
                rank:this.selected,
                updated_at:null,
                })
                this.$router.push({
                path:'/board/free'
                })
            },
        
        // 수정 후 저장시
        updateContent(){
            this.updateObject.title=this.subject;
            this.updateObject.context=this.context;
            this.updateObject.date = this.date;
            this.updateObject.rank = this.selected;
            this.updateObject.sub_image=this.sub_image;
            this.updateObject.video=this.video;
            
            this.$router.push({
                path:'/board/free'
            })
        },
        uploadImage(e){
            let file=e.target.files;
            let reader=new FileReader();

            reader.readAsDataURL(file[0]);
            reader.onload=e=>{
                this.sub_image=e.target.result;
            }
        },
        cancle(){
            this.$router.push({
                path:'/board/free'
            })
        }
    }
}
</script>

<style>
    #form_input{
            width: 1400px;
            margin-left: 160px;
            margin-top: 20px;
        }

    #select_area{
        width: 2200px;
        float: left;
        margin:0;
        padding:0;
    }

    .select_item{
        width: 300px;
        display: inline-block;
        margin: 0 0 0 0;
        padding: 0 0 0 0;
    }

    /* 제목 */
    #title{
        height: 60px;
    }

    /* 날짜 */
    .b-form-datepicker {
        width: 300px;
        margin:0 0 0 0;
        }

</style>