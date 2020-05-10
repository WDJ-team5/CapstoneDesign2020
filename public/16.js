(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/audition/AuditionDetail.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/audition/AuditionDetail.vue?vue&type=script&lang=js& ***!
=======
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/audition/AuditionCreate.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/audition/AuditionCreate.vue?vue&type=script&lang=js& ***!
>>>>>>> 0cace812b16184f53eb55cb7cd3befcff07d3b56
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_audition_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/audition_service */ "./resources/js/services/audition_service.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
<<<<<<< HEAD
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AuditionDetail",
  data: function data() {
    var contentId = Number(this.$route.params.contentId); // params로 받은 게시글 아이디를 저장
    // const contentData = data.Content.filter(item => item.content_id === contentId)[0]
    // 현재 게시글에 해당하는 데이터를 가져옴

    return {
      auditionData: {
        id: '',
=======

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AuditionCreate',
  data: function data() {
    return {
      auditionData: {
>>>>>>> 0cace812b16184f53eb55cb7cd3befcff07d3b56
        title: '',
        context: '',
        userId: 1,
        date: '',
        image: '',
        selected: '',
        video: ''
      },
<<<<<<< HEAD
      cid: contentId
    };
  },
  mounted: function mounted() {
    this.loadAudition();
  },
  methods: {
    // 데이터 로드
    loadAudition: function () {
      var _loadAudition = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
=======
      errors: {},
      // subject: '',
      // context: '',
      // userId: 1,
      // date:'',
      // createdAt: '2019-04-17 11:32:42',
      // updatedAt: null,
      // updateObject:null,
      // updateMode:this.$route.params.contentId>0?true:false,
      // selectedFile:null,
      // selected: null,
      // sub_image:null,
      // video:null,
      options: [{
        value: null,
        text: '랭크 설정'
      }, {
        value: 'A랭크 이상',
        text: 'A랭크 이상'
      }, {
        value: 'B랭크 이상',
        text: 'B랭크 이상'
      }, {
        value: 'C랭크 이상',
        text: 'C랭크 이상'
      }, {
        value: '랭크무관',
        text: '랭크무관'
      }]
    };
  },
  created: function created() {// if (this.$route.params.contentId > 0) {
    //     const contentId = Number(this.$route.params.contentId)
    //     this.updateObject = data.Content.filter(item => item.content_id === contentId)[0]
    //     this.subject = this.updateObject.title;
    //     this.context = this.updateObject.context;
    //     this.date = this.updateObject.date;
    //     this.selected = this.updateObject.rank;
    //     this.sub_image=this.updateObject.sub_image;
    //     this.video=this.updateObject.video;
    // }
  },
  methods: {
    // 사진첨부
    attachImage: function attachImage() {
      this.auditionData.image = this.$refs.newAuditionImage.files[0];
      var reader = new FileReader(); // reader.addEventListener('load',function(){
      //     this.$refs.newAuditionImageDisplay.src=reader.result;
      // }.bind(this),false);

      reader.readAsDataURL(this.auditionData.image);
    },
    //오디션 만들기
    createAudition: function () {
      var _createAudition = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var formData, response;
>>>>>>> 0cace812b16184f53eb55cb7cd3befcff07d3b56
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
<<<<<<< HEAD
                _context.prev = 0;
                _context.next = 3;
                return _services_audition_service__WEBPACK_IMPORTED_MODULE_1__["loadAudition"]();

              case 3:
                response = _context.sent;
                this.auditions = response.data.data;
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                this.flashMessage.error({
                  message: '에러가 발생했습니다!',
                  time: 5000
                });

              case 10:
=======
                formData = new FormData();
                formData.append('title', this.auditionData.title);
                formData.append('date', this.auditionData.date);
                formData.append('context', this.auditionData.context);
                formData.append('image', this.auditionData.image);
                formData.append('selected', this.auditionData.selected);
                _context.prev = 6;
                _context.next = 9;
                return _services_audition_service__WEBPACK_IMPORTED_MODULE_1__["createAudition"](formData);

              case 9:
                response = _context.sent;
                console.log(response);
                _context.next = 23;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](6);
                console.log(_context.t0.response.status);
                _context.t1 = _context.t0.response.status;
                _context.next = _context.t1 === 422 ? 19 : 21;
                break;

              case 19:
                this.errors = _context.t0.response.data.errors;
                return _context.abrupt("break", 23);

              case 21:
                alert('문제가 발생했어용!!');
                return _context.abrupt("break", 23);

              case 23:
>>>>>>> 0cace812b16184f53eb55cb7cd3befcff07d3b56
              case "end":
                return _context.stop();
            }
          }
<<<<<<< HEAD
        }, _callee, this, [[0, 7]]);
      }));

      function loadAudition() {
        return _loadAudition.apply(this, arguments);
      }

      return loadAudition;
    }() // 삭제를 수행하는 함수
    // deleteData() {
    //   const content_index = data.Content.findIndex(item => item.content_id === this.contentId);
    //   // findIndex: 조건이 만족할 경우 index를 반환해줌
    //   data.Content.splice(content_index, 1)
    //   // 데이터 삭제 수행
    //   this.$router.push({
    //     path: '/board/free'
    //   })
    // },
    // 수정을 수행하는 함수
    // updateData() {
    //   this.$router.push({
    //     path: `/board/free/create/${this.contentId}`
    //   })
    // }

=======
        }, _callee, this, [[6, 13]]);
      }));

      function createAudition() {
        return _createAudition.apply(this, arguments);
      }

      return createAudition;
    }(),
    // 저장 시
    uploadContet: function uploadContet() {// let items=data.Content.sort((a,b)=>{return b.content_id-a.content_id})
      // const content_id=items[0].content_id+1
      // data.Content.push({
      //     content_id:content_id,
      //     user_id:this.userId,
      //     title:this.subject,
      //     context:this.context,
      //     created_at:this.createdAt,
      //     date:this.date,
      //     sub_image:this.sub_image,
      //     video:this.video,
      //     rank:this.selected,
      //     updated_at:null,
      //     })
      //     this.$router.push({
      //     path:'/board/free'
      //     })
    },
    // 수정 후 저장시
    // updateContent(){
    //     this.updateObject.title=this.subject;
    //     this.updateObject.context=this.context;
    //     this.updateObject.date = this.date;
    //     this.updateObject.rank = this.selected;
    //     this.updateObject.sub_image=this.sub_image;
    //     this.updateObject.video=this.video;
    //     this.$router.push({
    //         path:'/board/free'
    //     })
    // },
    // uploadImage(e){
    //     let file=e.target.files;
    //     let reader=new FileReader();
    //     reader.readAsDataURL(file[0]);
    //     reader.onload=e=>{
    //         this.sub_image=e.target.result;
    //     }
    // },
    cancle: function cancle() {
      this.$router.push({
        path: '/board/free'
      });
    }
>>>>>>> 0cace812b16184f53eb55cb7cd3befcff07d3b56
  }
});

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/audition/AuditionDetail.vue?vue&type=style&index=0&id=9bb2291e&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/audition/AuditionDetail.vue?vue&type=style&index=0&id=9bb2291e&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/audition/AuditionCreate.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/audition/AuditionCreate.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
>>>>>>> 0cace812b16184f53eb55cb7cd3befcff07d3b56
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
<<<<<<< HEAD
exports.push([module.i, "\n#text_area[data-v-9bb2291e]{\r\n  width: 900px;\r\n  height: 600px;\r\n  border: 1px solid #ced4da;\r\n  margin-left: 700px;\r\n  margin-top: 40px;\n}\n#sub_image[data-v-9bb2291e]{\r\n  width: 600px;\r\n  height: 600px;\r\n  margin-left: 30px;\r\n  float: left;\n}\n.content-detail-content-info[data-v-9bb2291e] {\r\n  border: 1px solid #ced4da;\r\n  display: flex;\r\n  justify-content: space-between;\n}\n.content-detail-content-info-left[data-v-9bb2291e] {\r\n  width: 1420px;\r\n  /* display: flex;\r\n  flex-direction: row; */\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 1rem;\n}\n.content-detail-content-info-right[data-v-9bb2291e] {\r\n  width: 300px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 1rem;\n}\n.content-detail-content[data-v-9bb2291e] {\r\n  border: 1px solid #ced4da;\r\n  margin-top: 1rem;\r\n  padding-top: 1rem;\r\n  min-height: 700px;\n}\n.content-detail-button[data-v-9bb2291e] {\r\n  margin-top: 1rem;\r\n  padding: 2rem;\n}\n.content-detail-comment[data-v-9bb2291e] {\r\n  border: 1px solid #ced4da;\r\n  margin-top: 1rem;\r\n  padding: 2rem;\n}\r\n", ""]);
=======
exports.push([module.i, "\n#form_input{\n        width: 1400px;\n        margin-left: 160px;\n        margin-top: 20px;\n}\n#select_area{\n    width: 2200px;\n    float: left;\n    margin:0;\n    padding:0;\n}\n.select_item{\n    width: 300px;\n    display: inline-block;\n    margin: 0 0 0 0;\n    padding: 0 0 0 0;\n}\n\n/* 제목 */\n#title{\n    height: 60px;\n}\n\n/* 날짜 */\n.b-form-datepicker {\n    width: 300px;\n    margin:0 0 0 0;\n}\n\n", ""]);
>>>>>>> 0cace812b16184f53eb55cb7cd3befcff07d3b56

// exports


/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/audition/AuditionDetail.vue?vue&type=style&index=0&id=9bb2291e&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/audition/AuditionDetail.vue?vue&type=style&index=0&id=9bb2291e&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/audition/AuditionCreate.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/audition/AuditionCreate.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
>>>>>>> 0cace812b16184f53eb55cb7cd3befcff07d3b56
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


<<<<<<< HEAD
var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AuditionDetail.vue?vue&type=style&index=0&id=9bb2291e&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/audition/AuditionDetail.vue?vue&type=style&index=0&id=9bb2291e&scoped=true&lang=css&");
=======
var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AuditionCreate.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/audition/AuditionCreate.vue?vue&type=style&index=0&lang=css&");
>>>>>>> 0cace812b16184f53eb55cb7cd3befcff07d3b56

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/audition/AuditionDetail.vue?vue&type=template&id=9bb2291e&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/audition/AuditionDetail.vue?vue&type=template&id=9bb2291e&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/audition/AuditionCreate.vue?vue&type=template&id=4188269c&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/audition/AuditionCreate.vue?vue&type=template&id=4188269c& ***!
  \*********************************************************************************************************************************************************************************************************************/
>>>>>>> 0cace812b16184f53eb55cb7cd3befcff07d3b56
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
<<<<<<< HEAD
  return _c(
    "div",
    { attrs: { id: "content" } },
    [
      _c("b-card", [
        _c("div", { staticClass: "content-detail-content-info" }, [
          _c("div", { staticClass: "content-detail-content-info-left" }, [
            _c("h1", [_vm._v(_vm._s(_vm.cid))]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "content-detail-content-info-left-subject",
                staticStyle: { "margin-left": "200px" }
              },
              [_c("h1", [_vm._v("d")])]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticStyle: { "margin-left": "200px" } },
              [
                _c(
                  "b-button",
                  { attrs: { variant: "primary" } },
                  [
                    _vm._v("\n            마감일:  "),
                    _c("b-badge", { attrs: { variant: "light" } }, [
                      _vm._v("d")
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c("b-button", { attrs: { variant: "warning" } }, [
                  _vm._v("\n            랭크: d\n          ")
                ])
              ],
              1
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "content-detail-content" }, [
          _c("div", [
            _c("div", { attrs: { id: "text_area" } }, [
              _c("h1", [_vm._v("영상과제")])
            ])
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "content-detail-button" },
          [
            _c("b-button", { attrs: { variant: "primary" } }, [_vm._v("수정")]),
            _vm._v(" "),
            _c("b-button", { attrs: { variant: "danger" } }, [_vm._v("삭제")])
          ],
          1
        )
      ])
    ],
    1
  )
=======
  return _c("div", { attrs: { id: "form_input" } }, [
    _c(
      "form",
      {
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.createAudition($event)
          }
        }
      },
      [
        _c(
          "div",
          { attrs: { id: "form_header" } },
          [
            _c("b-form-input", {
              attrs: { id: "title", placeholder: "제목을 입력해주세요" },
              model: {
                value: _vm.auditionData.title,
                callback: function($$v) {
                  _vm.$set(_vm.auditionData, "title", $$v)
                },
                expression: "auditionData.title"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { attrs: { id: "selct_area" } }, [
          _c(
            "div",
            { staticClass: "select_item" },
            [
              _c("b-form-datepicker", {
                staticClass: "mb-2",
                attrs: {
                  placeholder: "마감기한 설정",
                  id: "example-datepicker"
                },
                model: {
                  value: _vm.auditionData.date,
                  callback: function($$v) {
                    _vm.$set(_vm.auditionData, "date", $$v)
                  },
                  expression: "auditionData.date"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "select_item" }, [
            _c(
              "div",
              [
                _c("b-form-select", {
                  attrs: { options: _vm.options },
                  model: {
                    value: _vm.auditionData.selected,
                    callback: function($$v) {
                      _vm.$set(_vm.auditionData, "selected", $$v)
                    },
                    expression: "auditionData.selected"
                  }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("label", { staticStyle: { "margin-left": "20px" } }, [
            _vm._v("템플릿 선택: ")
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "select_item" }, [
            _c("input", {
              ref: "newAuditionImage",
              staticClass: "form-control ",
              attrs: { type: "file", id: "image" },
              on: { change: _vm.attachImage }
            })
          ]),
          _vm._v(" "),
          _c("label", [_vm._v("영상과제: ")]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "select_item" },
            [
              _c("b-form-input", {
                attrs: { id: "video", placeholder: "링크를 삽입해주세요" },
                model: {
                  value: _vm.auditionData.video,
                  callback: function($$v) {
                    _vm.$set(_vm.auditionData, "video", $$v)
                  },
                  expression: "auditionData.video"
                }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("b-form-textarea", {
          attrs: {
            id: "textarea-rows",
            placeholder: "내용을 입력해주세요",
            rows: "22"
          },
          model: {
            value: _vm.auditionData.context,
            callback: function($$v) {
              _vm.$set(_vm.auditionData, "context", $$v)
            },
            expression: "auditionData.context"
          }
        }),
        _vm._v(" "),
        _c("b-button", { attrs: { type: "submit", variant: "primary" } }, [
          _vm._v("저장")
        ]),
        _vm._v(" "),
        _c(
          "b-button",
          { attrs: { variant: "danger" }, on: { click: _vm.cancle } },
          [_vm._v("취소")]
        )
      ],
      1
    )
  ])
>>>>>>> 0cace812b16184f53eb55cb7cd3befcff07d3b56
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/services/audition_service.js":
/*!***************************************************!*\
  !*** ./resources/js/services/audition_service.js ***!
  \***************************************************/
/*! exports provided: createAudition, loadAudition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAudition", function() { return createAudition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadAudition", function() { return loadAudition; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service */ "./resources/js/services/http_service.js");
<<<<<<< HEAD
 // 오디션 생성

function createAudition(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post('/audition', data);
} // 오디션 리스트 로드

=======

function createAudition(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post('/audition', data);
}
>>>>>>> 0cace812b16184f53eb55cb7cd3befcff07d3b56
function loadAudition() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/audition');
}

/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/services/http_service.js":
/*!***********************************************!*\
  !*** ./resources/js/services/http_service.js ***!
  \***********************************************/
/*! exports provided: http, httpFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "http", function() { return http; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpFile", function() { return httpFile; });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store */ "./resources/js/store.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function http() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
    baseURL: _store__WEBPACK_IMPORTED_MODULE_0__["default"].state.apiURL
  });
}
function httpFile() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
    baseURL: _store__WEBPACK_IMPORTED_MODULE_0__["default"].state.apiURL,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
}

/***/ }),

/***/ "./resources/js/views/audition/AuditionDetail.vue":
/*!********************************************************!*\
  !*** ./resources/js/views/audition/AuditionDetail.vue ***!
=======
/***/ "./resources/js/views/audition/AuditionCreate.vue":
/*!********************************************************!*\
  !*** ./resources/js/views/audition/AuditionCreate.vue ***!
>>>>>>> 0cace812b16184f53eb55cb7cd3befcff07d3b56
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _AuditionDetail_vue_vue_type_template_id_9bb2291e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuditionDetail.vue?vue&type=template&id=9bb2291e&scoped=true& */ "./resources/js/views/audition/AuditionDetail.vue?vue&type=template&id=9bb2291e&scoped=true&");
/* harmony import */ var _AuditionDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuditionDetail.vue?vue&type=script&lang=js& */ "./resources/js/views/audition/AuditionDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AuditionDetail_vue_vue_type_style_index_0_id_9bb2291e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AuditionDetail.vue?vue&type=style&index=0&id=9bb2291e&scoped=true&lang=css& */ "./resources/js/views/audition/AuditionDetail.vue?vue&type=style&index=0&id=9bb2291e&scoped=true&lang=css&");
=======
/* harmony import */ var _AuditionCreate_vue_vue_type_template_id_4188269c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuditionCreate.vue?vue&type=template&id=4188269c& */ "./resources/js/views/audition/AuditionCreate.vue?vue&type=template&id=4188269c&");
/* harmony import */ var _AuditionCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuditionCreate.vue?vue&type=script&lang=js& */ "./resources/js/views/audition/AuditionCreate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AuditionCreate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AuditionCreate.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/audition/AuditionCreate.vue?vue&type=style&index=0&lang=css&");
>>>>>>> 0cace812b16184f53eb55cb7cd3befcff07d3b56
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
<<<<<<< HEAD
  _AuditionDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AuditionDetail_vue_vue_type_template_id_9bb2291e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AuditionDetail_vue_vue_type_template_id_9bb2291e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9bb2291e",
=======
  _AuditionCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AuditionCreate_vue_vue_type_template_id_4188269c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AuditionCreate_vue_vue_type_template_id_4188269c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
>>>>>>> 0cace812b16184f53eb55cb7cd3befcff07d3b56
  null
  
)

/* hot reload */
if (false) { var api; }
<<<<<<< HEAD
component.options.__file = "resources/js/views/audition/AuditionDetail.vue"
=======
component.options.__file = "resources/js/views/audition/AuditionCreate.vue"
>>>>>>> 0cace812b16184f53eb55cb7cd3befcff07d3b56
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/views/audition/AuditionDetail.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/audition/AuditionDetail.vue?vue&type=script&lang=js& ***!
=======
/***/ "./resources/js/views/audition/AuditionCreate.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/audition/AuditionCreate.vue?vue&type=script&lang=js& ***!
>>>>>>> 0cace812b16184f53eb55cb7cd3befcff07d3b56
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuditionDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AuditionDetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/audition/AuditionDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuditionDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/audition/AuditionDetail.vue?vue&type=style&index=0&id=9bb2291e&scoped=true&lang=css&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/views/audition/AuditionDetail.vue?vue&type=style&index=0&id=9bb2291e&scoped=true&lang=css& ***!
  \*****************************************************************************************************************/
=======
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuditionCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AuditionCreate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/audition/AuditionCreate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuditionCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/audition/AuditionCreate.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/audition/AuditionCreate.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************/
>>>>>>> 0cace812b16184f53eb55cb7cd3befcff07d3b56
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuditionDetail_vue_vue_type_style_index_0_id_9bb2291e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AuditionDetail.vue?vue&type=style&index=0&id=9bb2291e&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/audition/AuditionDetail.vue?vue&type=style&index=0&id=9bb2291e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuditionDetail_vue_vue_type_style_index_0_id_9bb2291e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuditionDetail_vue_vue_type_style_index_0_id_9bb2291e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuditionDetail_vue_vue_type_style_index_0_id_9bb2291e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuditionDetail_vue_vue_type_style_index_0_id_9bb2291e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuditionDetail_vue_vue_type_style_index_0_id_9bb2291e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/audition/AuditionDetail.vue?vue&type=template&id=9bb2291e&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/views/audition/AuditionDetail.vue?vue&type=template&id=9bb2291e&scoped=true& ***!
  \***************************************************************************************************/
=======
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuditionCreate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AuditionCreate.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/audition/AuditionCreate.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuditionCreate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuditionCreate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuditionCreate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuditionCreate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuditionCreate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/audition/AuditionCreate.vue?vue&type=template&id=4188269c&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/audition/AuditionCreate.vue?vue&type=template&id=4188269c& ***!
  \***************************************************************************************/
>>>>>>> 0cace812b16184f53eb55cb7cd3befcff07d3b56
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuditionDetail_vue_vue_type_template_id_9bb2291e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AuditionDetail.vue?vue&type=template&id=9bb2291e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/audition/AuditionDetail.vue?vue&type=template&id=9bb2291e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuditionDetail_vue_vue_type_template_id_9bb2291e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuditionDetail_vue_vue_type_template_id_9bb2291e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
=======
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuditionCreate_vue_vue_type_template_id_4188269c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AuditionCreate.vue?vue&type=template&id=4188269c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/audition/AuditionCreate.vue?vue&type=template&id=4188269c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuditionCreate_vue_vue_type_template_id_4188269c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuditionCreate_vue_vue_type_template_id_4188269c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
>>>>>>> 0cace812b16184f53eb55cb7cd3befcff07d3b56



/***/ })

}]);