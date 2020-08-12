<template>
    <div id="content">
        <div class="auditiondetails_content">
            <h2 class="auditiondetails_title"></h2>
            <div class="auditiondetails_boxtit">
                <p class="text">오디션 신청</p>
            </div>

            <!-- <p class="auditiondetails_recruitment">{{this.name}}</p> -->
            <form v-on:submit.prevent="createAudition">
                <div class="auditiondetails_content_ingap">
                    <hr class="hr_line">
                    <p class="auditiondetails_title02">自分の情報を入力してください</p>
                    <div id="user_detail">
                        <div class="imgbox">
                            <img src="http://blogfiles.naver.net/MjAyMDAyMTlfMTgz/MDAxNTgyMDY1NzU1Mjg4.0KW7Pcai1MPMyrEbw_L4ZtbY42cGrOtC__QEZrVAUsMg.TBE7t8LPNGYWBF3r8ly5aWtzRvU1vxE_CeiK6JVQPJgg.JPEG.everonly4u/31588462_wYo49E2H_9.jpg" alt="" style="width: 100%;height:auto"> 
                        </div>
                        <div class="infodetail">
                            <table class="tbl_infodetail">
                                <colgroup>
                                    <col style="width:90px">
                                    <col>
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <th>名前</th>
                                        <td> <b-form-input id="title" v-model="auditions.name" placeholder="제목을 입력해주세요"></b-form-input></td>
                                        <th>ランク</th>
                                        <td>{{auditions.rank_name}}</td>
                                    </tr>
                                    <tr>
                                        <th>生年月日</th>
                                        <td> <b-form-input id="title" v-model="auditions.birthday" placeholder="제목을 입력해주세요"></b-form-input></td>
                                        <th>等級</th>
                                        <td>練習生</td>
                                    </tr>
                                    <tr>
                                        <th>住所</th>
                                        <td> <b-form-input id="title" v-model="auditions.address" placeholder="제목을 입력해주세요"></b-form-input></td>
                                        <th>連絡先</th>
                                        <td> <b-form-input id="title" v-model="auditions.call_number" placeholder="제목을 입력해주세요"></b-form-input></td>
                                    </tr>
                                    <tr>
                                        
                                    </tr>
                                    <tr>
                                        <th>点数</th>
                                        <td>{{this.score}}</td>
                                    </tr>
                                </tbody>
                            </table>
                            
                        </div>

                        <hr class="hr_line">
                        <p class="auditiondetails_title02">個人情報処理方針</p>
                        <div class="policy">
                            <p>
                                情報通信網法の規定に基づき、ミナオドでオーディションを申請される方に収集する個人情報の項目、個人情報の収集及び利用目的、個人情報の保有及び利用期間を案内しますので、詳細を読んだ後、同意してください。

                                1.収集する個人情報
                                利用者は会員登録をしなくても、情報検索、ニュース閲覧などほとんどのみなおどサービスを会員と同様に利用できます。 利用者がメール、カレンダー、カフェ、ブログなどの個人化、または会員制サービスの利用のために会員登録をする場合、みなおどはサービスの利用のために必要最小限の個人情報を収集します。

                                会員登録時点でミナオドが利用者から収集する個人情報は以下の通りです。
                                - 会員登録時に「ID、パスワード、氏名、生年月日、性別、携帯電話番号」を必須項目として収集します。 もし、利用者が入力する生年月日が満14歳未満の児童の場合は、法定代理人情報(法定代理人の氏名、生年月日、性別、重複加入確認情報(DI)、携帯電話番号)が追加収集されます。 そして、選択項目としてメールアドレス、プロフィール情報を収集します。
                                - 団体IDで会員登録の際は、団体ID、パスワード、団体名、Eメールアドレス、携帯電話番号を必須項目として収集します。 そして団体代表者名を選択項目として収集します。
                                サービスの利用過程で利用者から収集する個人情報は以下の通りです。
                                NAVER内の個別サービスの利用、イベントへの応募及び景品申請過程において、当該サービスの利用者に限り、追加の個人情報収集が発生することがあります。 追加で個人情報を収集する場合は、当該個人情報を収集した時点で利用者に「収集する個人情報項目、個人情報の収集及び利用目的、個人情報の保管期間」について案内し、同意を得ます。

                                サービス利用過程でIPアドレス、クッキー、サービス利用記録、機器情報、位置情報が生成され収集されることがあります。 また、画像および音声を利用した検索サービスなどから、画像や音声が収集されることがあります。
                                具体的に1)サービスの利用過程で利用者に関する情報を自動化された方法で生成し、これを保存(収集)したり、
                                2) 利用者の機器固有の情報を元の値を確認できないように安全に変換して収集します。 サービスの利用過程で位置情報が収集されることがあり、
                                美直島が提供する位置基盤サービスについては、「美直島位置情報利用約款」で詳しく規定しています。
                                このように、収集した情報は個人情報との連携可否などによって個人情報に該当することがあり、個人情報に該当しない場合があります。

                                2.収集した個人情報の利用
                                みなおど及びみなおど関連の諸サービス(モバイルウェブアプリ含む)の会員管理、サービス開発·提供·向上、安全なインターネット利用環境の構築など、以下の目的でのみ個人情報を利用しております。

                                - 会員登録意思の確認、年齢の確認及び法定代理人の同意進行、利用者及び法定代理人の本人確認、利用者の識別、会員退会意思の確認など、会員管理のために個人情報を利用します。
                                - コンテンツなど既存のサービス提供(広告を含む)に加え、人口統計学的分析、サービス訪問及び利用記録の分析、個人情報及び関心に基づいた利用者間の関係形成、知人及び関心事などに基づいたオーダーメード型サービス提供など、新規サービス要素の発掘及び既存サービスの改善などのために個人情報を利用します。
                                - 法令およびミナオド利用約款に違反する会員に対する利用制限措置、不正利用行為を含むサービスの円滑な運営に支障をきたす行為に対する防止および制裁、アカウント利用および不正取引防止、約款改正などの告知事項の伝達、紛争調整のための記録保存、苦情処理など利用者の保護およびサービス運営のために個人情報を利用します。
                                - 有料サービス提供による本人認証、購入·料金決済、商品·サービスの配送のために個人情報を利用します。
                                - イベント情報及び参加機会の提供、広告性情報の提供などマーケティング及びプロモーション目的で個人情報を利用します。
                                - サービスの利用記録とアクセス頻度の分析、サービスの利用に関する統計、サービスの分析及び統計に基づくサービスの提供及び広告の掲載などに個人情報を利用します。
                                - セキュリティ、プライバシー、安全の面で利用者が安心して利用できるサービス利用環境の構築のために個人情報を利用します。
                                3.個人情報の破棄
                                会社は原則的に利用者の個人情報を会員退会時に遅滞なく破棄しております。
                                ただし、利用者に個人情報の保管期間について別途の同意を得た場合、又は法令において一定期間、情報保管義務を課す場合は、当該期間、個人情報を安全に保管します。

                                利用者に個人情報の保管期間について会員登録時またはサービス登録時に同意を得た場合は、以下の通りです。
                                不正登録及び懲戒記録等の不正利用記録は不正登録及び利用防止のため、収集時点から6か月間保管し破棄しています。 不正利用記録内の個人情報は、登録認証された携帯電話番号(満14歳未満の会員の場合、法定代理人DI)があります。
                                不正利用により懲戒を受ける前に、会員加入及び退会を繰り返しながら不正利用するサービスを防ぐため、退会した利用者の携帯電話番号を復号化できない一方向暗号化(ハッシュ処理)して6ヶ月間保管します。 QRコードサービスで連絡先を登録してから、QRコード削除時に復旧要請対応のため削除時点から6ヶ月間保管します。 スマートプレイスサービスで携帯電話番号を登録した場合、紛争調停およびお客様のお問い合わせなどを目的に業者登録修正を要請する際、または登録後に業者削除を要請する際から最大1年間保管することが、

                                電子商取引等における消費者保護に関する法律、電子金融取引法、通信秘密保護法等の法令で一定期間情報の保管を規定する場合は以下の通りです。 みなおどは、この期間中、法令の規定に基づいて個人情報を保管し、本情報を他の目的には絶対に利用いたしません。
                                - 電子商取引等における消費者保護に関する法律
                                契約または契約の申込みの撤回等に関する記録:5年保管
                                代金決済及び財貨などの供給に関する記録:5年間保管
                                消費者の不満または紛争処理に関する記録:3年間保管
                                - 電子金融取引法
                                電子金融に関する記録:5年間保管
                                - 通信秘密保護法
                                ログイン記録:3か月
                                会員退会、サービス終了、利用者から同意を得た個人情報保有期間の到来など、個人情報の収集及び利用目的が達成した個人情報は再生が不可能な方法で破棄されます。 法令で保存義務を課した情報についても、当該期間が経過した後、遅滞なく再生が不可能な方法で破棄します。

                                電子ファイル形態の場合、復旧及び再生がされないよう技術的な方法で安全に削除し、出力物などは粉砕または焼却する方法などで破棄します。

                                ちなみに、みなおどは「個人情報有効期間制」により、1年間サービスを利用していない会員の個人情報を別途に分離·保管して管理しています。
                            </p>
                        </div>
                        <div class="policy_check">
                            <span class="checkbox">
                                <input type="checkbox" id="personal_agree" value="Y">
                                <em class="checkmark"></em>
                                <label for="personal_agree">内容を確認した上で同意します。</label>
                            </span>
                        </div>
                        <hr class="hr_line">
                        <p class="auditiondetails_title02">オーディション担当者に伝えるメッセージ</p>
                        <b-form-textarea
                        id="textarea"
                        v-model="text"
                        placeholder="伝える内容を入力してください。"
                        rows="3"
                        max-rows="6"
                        ></b-form-textarea>


                       
                        <!-- <p class="auditiondetails_title02">영상링크 첨부</p>
                        <b-form-input
                        id="video_link"
                        v-model="video"
                        required
                        placeholder="영상링크를 입력해주세요"
                        ></b-form-input> -->
                    </div>
                
                </div>
                
            </form>
                
        </div>
        <div id="button_area">
            <b-button variant="primary" @click="submitAudition">申し込む</b-button>
        </div>        
    </div>
</template>

<script>
import * as auditionService from "../../services/audition_service";
export default {
    data(){
        return{
            text:'',
            // video:'',
            auditions: [],
            aid:'',
            score:''
        }
    },
    mounted() {
    this.aid = Number(this.$route.params.contentId);
    this.score = Number(this.$route.params.score);
    this.applyAudition();
    },

    methods:{

    // addVideo() {
    //     this.video = this.$refs.file.files[0];
    //     console.log(this.video);
    // },

    // 유저 데이터 로드
    applyAudition: async function() {
      try {
        const response = await auditionService.applyAudition();
        this.auditions = response.data;
        console.log(this.score);
        this.state = true;
      } catch (error) {
        this.flashMessage.error({
          message: "ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ",
          time: 5000
        });
      }
    },
    submitAudition: async function(){
            let formData=new FormData();
            formData.append('name',this.auditions.name);
            formData.append('rank_name',this.auditions.rank_name);
            formData.append('birthday',this.auditions.birthday);
            formData.append('call_number',this.auditions.call_number);
            formData.append('score',this.score);
            formData.append('text',this.text);
            // formData.append('video',this.video);
            formData.append('audition_id',this.aid);
            console.log(...formData);
            this.$router.push({
                path:'/audition'
            });


            try{
                const response=await auditionService.submitAudition(formData);

                this.flashMessage.success({
                    message: '申し込みが完了しました',
                    time:5000
                });
                
                
            }catch(error){
                console.log(error.response.status);
                switch (error.response.status) {
                    case 422:
                        this.errors=error.response.data.errors;
                        break;
                
                    default:
                        this.flashMessage.error({
                            message: 'トラブルが発生しました。',
                            time:5000
                        });
                }
            }
        },
    }
}
</script>

<style scoped>
div,h2,p,form,p{
    padding: 0;
    border: 0;
    outline: 0;
}

p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    color:black;
}


/* 전체 박스 */
.auditiondetails_content {
    width: 1200px;
    margin: -25px auto 0;
    padding-bottom: 152px;
}

/* 유저정보 박스 */
#user_detail{
    width: 100%;
    height: 270px;
}

/* 카테고리 제목 */
.auditiondetails_title {
    font-size: 24px;
    font-weight: bold;
}

/* 카테고리 제목박스 */
.auditiondetails_boxtit {
    overflow: hidden;
    margin-top: 15px;
    padding: 18px 31px 18px 27px;
    box-sizing: border-box;
    background: #ed1c24;
}

/* 카테고리박스 텍스트 */
.auditiondetails_boxtit .text {
    float: left;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
}

/* 본문 텍스트 */
.auditiondetails_recruitment {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
}

/* 본문박스 */
.auditiondetails_content_ingap {
    padding: 0 31px 0 29px;
}

/* 구분선 */
.auditiondetails_content_ingap > .hr_line:first-child {
    margin-top: 56px;
}

.hr_line {
    height: 1px;
    margin: 39px 0 40px;
    border: none;
    background: #666666;
    font-size: 0;
    line-height: 0;
}

hr {
    display: block;
    unicode-bidi: isolate;
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
    margin-inline-start: auto;
    margin-inline-end: auto;
    overflow: hidden;
}

form{
    height: 900px;
}

/* 유저정보 확인 제목 */
.auditiondetails_title02 {
    color: #666;
    font-size: 18px;
    font-weight: bold;
}

/* 유저정보 이미지 */
.imgbox {
    display: inline-block;
    position: relative;
    vertical-align: top;
    width: 254px;
    height: 240px;
    margin-top: 15px;
}

/* 유저정보 디테일 */
.infodetail {
    width: 800px;
    display: inline-block;
    height: 240px;
    margin-left: 55px;
    max-width: 340px;
}

/* 유저정보 디테일 테이블 */
.tbl_infodetail {
    margin-top: 14px;
    width: 500px;
    height: 240px;
}

/* 약관 */
.policy{
    width: 1150px;
    height: 240px;
    overflow:scroll;
}

.policy_check {
    float: right;
    margin-top: 17px;
    font-size: 11.65px;
    color: #333;
}

.checkbox {
    position: relative;
    display: inline-block;
    vertical-align: top;
    padding-left: 16px;
}



.policy_check label {
    margin-left: 4px;
    line-height: 15px;
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: top;
    background: transparent;
    font-style: normal;
}

.policy_check {
    float: right;
    margin-top: 17px;
    font-size: 11.65px;
    color: #333;
}


table {
    display: table;
    box-sizing: border-box;
    border-collapse: collapse;
    border-spacing: 0;
}

colgroup {
    display: table-column-group;
}

/* 유저정보 디테일 테이블 바디 */
tbody {
    display: table-row-group;
    vertical-align: middle;
}

tr{
    display: table-row;
    vertical-align: inherit;
}

th{
    display: table-cell;
    vertical-align: inherit;
    font-weight: bold;
}

 th {
    width: 80px;
    padding-bottom: 16px;
    color: #666;
    font-size: 12px;
    text-align: left;
    
}

td {
    width: 216px;
    padding-bottom: 16px;
    color: black;
    font-size: 12px;
    font-weight: bold;
}

#button_area{
  position: relative;
  font-size: 0;
  line-height: 0;
  text-align: center;
}

button {
    display: inline-block;
    width: 152px;
    height: 48px;
    border: none;
    background: #ed1c24;
    color: #fff;
    font-size: 16px;
    line-height: 1;
}


</style>