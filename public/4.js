(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/audition/Audition.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/audition/Audition.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_audition_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/audition_service */ "./resources/js/services/audition_service.js");


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
<<<<<<< HEAD
=======
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
>>>>>>> d58a464ff40f8784410eb2e39325d61fefe9e148

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Audition',
  data: function data() {
    // 게시판 최신 순 정렬
    // let items = data.Content.sort((a,b) => {return b.content_id - a.content_id})
    // 유저 네임 속성 추가(게시판의 유저아이디와 데이터의 유저아이디가 동일 할 경우에)
    // items = items.map(contentItem => {return {...contentItem, user_name: data.User.filter(userItem => userItem.user_id === contentItem.user_id)[0].name}})
    return {
      // 게시글의 보여주고싶은 필드 보이도록 설정
      // fields:[
      //     {
      //         key:'content_id',
      //         label:'글번호'
      //     },
      //     {
      //         key:'title',
      //         label:'제목'
      //     },
      //     {
      //         key:'created_at',
      //         label:'작성일'
      //     },
      //     {
      //         key:'user_name',
      //         label:'글쓴이' 
      //     }
      // ],
      auditions: [],
      auditionData: {
        id: '',
        title: '',
        content: '',
        userId: 1,
        date: '',
        image: '',
        selected: '',
        video: ''
      },
<<<<<<< HEAD
      errors: {}
    };
  },
  mounted: function mounted() {
    this.loadAudition();
  },
  methods: {
    loadAudition: function () {
      var _loadAudition = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
=======
      editAuditionData: {
        title: '',
        content: '',
        image: ''
      },
      cid: '',
      errors: {},
      state: false,
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
  created: function created() {
    if (this.$route.params.contentId > 0) {
      this.cid = Number(this.$route.params.contentId);
      this.loadDetailAudition();
    }
  },
  methods: {
    // 사진첨부
    attachImage: function attachImage() {
      this.auditionData.image = this.$refs.newAuditionImage.files[0];
      var reader = new FileReader();
      reader.addEventListener('load', function () {
        this.$refs.newAuditionImageDisplay.src = reader.result;
      }.bind(this), false);
      reader.readAsDataURL(this.auditionData.image);
    },
    //오디션 만들기
    createAudition: function () {
      var _createAudition = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _console;

        var formData, response;
>>>>>>> d58a464ff40f8784410eb2e39325d61fefe9e148
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
                this.auditions.unshift(response.data);
                this.auditions = response.data.data;
                console.log(this.auditions);
                _context.next = 12;
=======
                formData = new FormData();
                formData.append('title', this.auditionData.title);
                formData.append('date', this.auditionData.date);
                formData.append('content', this.auditionData.content);
                formData.append('image', this.auditionData.image);
                formData.append('selected', this.auditionData.selected);

                (_console = console).log.apply(_console, _toConsumableArray(formData));

                _context.prev = 7;
                _context.next = 10;
                return _services_audition_service__WEBPACK_IMPORTED_MODULE_1__["createAudition"](formData);

              case 10:
                response = _context.sent;
                this.flashMessage.success({
                  message: '성공했다 !!!!!!!',
                  time: 5000
                });
                history.back();
                _context.next = 24;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](7);
                console.log(_context.t0.response.status);
                _context.t1 = _context.t0.response.status;
                _context.next = _context.t1 === 422 ? 21 : 23;
>>>>>>> d58a464ff40f8784410eb2e39325d61fefe9e148
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                this.flashMessage.error({
                  message: '에러가 발생했습니다!',
                  time: 5000
                });

              case 12:
              case "end":
                return _context.stop();
            }
          }
<<<<<<< HEAD
        }, _callee, this, [[0, 9]]);
=======
        }, _callee, this, [[7, 15]]);
>>>>>>> d58a464ff40f8784410eb2e39325d61fefe9e148
      }));

      function loadAudition() {
        return _loadAudition.apply(this, arguments);
      }

      return loadAudition;
    }(),
<<<<<<< HEAD
    // 오디션 클릭시    
    rowClick: function rowClick(audition, index, e) {
      this.$router.push({
        path: "/auditiondetail/".concat(audition.id)
      });
=======
    // 수정 데이터 로드
    loadDetailAudition: function () {
      var _loadDetailAudition = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _services_audition_service__WEBPACK_IMPORTED_MODULE_1__["loadDetailAudition"](this.cid);

              case 3:
                response = _context2.sent;
                this.editAuditionData = response.data;
                this.state = true;
                _context2.next = 11;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                this.flashMessage.error({
                  message: 'ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ',
                  time: 5000
                });

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 8]]);
      }));

      function loadDetailAudition() {
        return _loadDetailAudition.apply(this, arguments);
      }

      return loadDetailAudition;
    }(),
    // 사진첨부
    editAttachImage: function editAttachImage() {
      this.editAuditionData.image = this.$refs.editAuditionImage.files[0];
      var reader = new FileReader();
      reader.addEventListener('load', function () {
        this.$refs.editAuditionImageDisplay.src = reader.result;
      }.bind(this), false);
      reader.readAsDataURL(this.editAuditionData.image);
    },
    // 수정사항 저장
    updateAudition: function () {
      var _updateAudition = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var _console2, _console3;

        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                formData = new FormData();

                (_console2 = console).log.apply(_console2, _toConsumableArray(formData));

                formData.append('title', this.editAuditionData.title);
                formData.append('content', this.editAuditionData.content);
                formData.append('image', this.editAuditionData.image);
                formData.append('_method', 'put');

                (_console3 = console).log.apply(_console3, _toConsumableArray(formData));

                _context3.prev = 7;
                _context3.next = 10;
                return _services_audition_service__WEBPACK_IMPORTED_MODULE_1__["updateAudition"](this.editAuditionData.id, formData);

              case 10:
                response = _context3.sent;
                this.flashMessage.success({
                  message: '성공했다 !!!!!!!',
                  time: 5000
                });
                history.back();
                _context3.next = 18;
                break;

              case 15:
                _context3.prev = 15;
                _context3.t0 = _context3["catch"](7);
                this.flashMessage.error({
                  message: _context3.t0.response.status,
                  time: 5000
                });

              case 18:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[7, 15]]);
      }));

      function updateAudition() {
        return _updateAudition.apply(this, arguments);
      }

      return updateAudition;
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
>>>>>>> d58a464ff40f8784410eb2e39325d61fefe9e148
    },
    // 오디션 생성
    writeContent: function writeContent() {
      this.$router.push({
        path: '/auditioncreate'
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/audition/Audition.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/audition/Audition.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.hovereffect:hover img {\n    opacity: 0.6;\n    filter: alpha(opacity=60);\n    transform: translate3d(0,0,0);\n}\n.hovereffect:hover .overlay:before {\n    opacity: 1;\n    filter: alpha(opacity=100);\n    transform: translate3d(0,0,0);\n}\n#container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-bottom: 70px;\n}\n#audition-all {\n    width: 1100px;\n    display: inline-block;\n    margin-top:40px;\n    padding:0;\n}\n#audition-set {\n    width: 250px;\n    height: 370px;\n    float: left;\n    color: black;\n    background-color: white;\n    border: 1px solid #ced4da;\n    padding: 0 0 0 0;\n    margin-left: 20px;\n    margin-top: 60px;\n    border-radius:5px;\n}\n.card-image-box {\n    width: 250px;\n    height: 260px;\n}\n.card-image-box > img {\n    width: 100%;\n    height:100%;\n}\n.audition-info {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.audition-title {\n    font-size:25px;\n    font-weight:100;\n}\n.audition-add-btn {\n    margin-top:60px;\n    width:200px;\n    height:60px;\n    margin-top:50px;\n}\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/audition/Audition.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/audition/Audition.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Audition.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/audition/Audition.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/audition/Audition.vue?vue&type=template&id=139d5580&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/audition/Audition.vue?vue&type=template&id=139d5580& ***!
  \***************************************************************************************************************************************************************************************************************/
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
    { attrs: { id: "container" } },
    [
      _c(
        "div",
        [
          _c(
            "b-list-group",
            { attrs: { id: "audition-all" } },
            _vm._l(_vm.auditions, function(audition, index) {
              return _c(
                "b-list-group-item",
                {
                  key: index,
                  staticClass: "flex-column align-items-start",
                  attrs: { id: "audition-set", href: "#", active: "" },
                  on: {
                    click: function($event) {
                      return _vm.rowClick(audition)
                    }
                  }
                },
                [
                  _c("div", { staticClass: "hovereffect card-image-box" }, [
                    _c("img", {
                      attrs: {
                        id: "card-image",
                        src:
                          _vm.$store.state.serverPath +
                          "/storage/" +
                          audition.image,
                        alt: audition.title
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "audition-info" }, [
                    _c("div", { staticStyle: { "margin-top": "12px" } }, [
                      _c("h5", { staticClass: "audition-title" }, [
                        _vm._v(_vm._s(audition.title))
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _c(
                          "b-badge",
                          { attrs: { pill: "", variant: "primary" } },
                          [
                            _vm._v(
                              "마감일: 2020년 5월 15일" + _vm._s(audition.date)
                            )
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _c(
                          "b-badge",
                          { attrs: { pill: "", variant: "success" } },
                          [
                            _vm._v(
                              "랭크: B랭크 이상 지원가능" +
                                _vm._s(audition.selected)
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ])
                ]
              )
            }),
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-button",
        {
          staticClass: "audition-add-btn",
          attrs: { variant: "dark" },
          on: { click: _vm.writeContent }
        },
        [_vm._v("오디션 공고 등록")]
      )
    ],
    1
  )
=======
  return _c("div", { attrs: { id: "form_input" } }, [
    _vm.cid
      ? _c(
          "form",
          {
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.updateAudition($event)
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
                    value: _vm.editAuditionData.title,
                    callback: function($$v) {
                      _vm.$set(_vm.editAuditionData, "title", $$v)
                    },
                    expression: "editAuditionData.title"
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
                      value: _vm.editAuditionData.date,
                      callback: function($$v) {
                        _vm.$set(_vm.editAuditionData, "date", $$v)
                      },
                      expression: "editAuditionData.date"
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
                        value: _vm.editAuditionData.selected,
                        callback: function($$v) {
                          _vm.$set(_vm.editAuditionData, "selected", $$v)
                        },
                        expression: "editAuditionData.selected"
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
                  ref: "editAuditionImage",
                  staticClass: "form-control ",
                  attrs: { type: "file", id: "image" },
                  on: { change: _vm.editAttachImage }
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
                      value: _vm.editAuditionData.video,
                      callback: function($$v) {
                        _vm.$set(_vm.editAuditionData, "video", $$v)
                      },
                      expression: "editAuditionData.video"
                    }
                  })
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", [
              _vm.state
                ? _c("img", {
                    ref: "editAuditionImageDisplay",
                    staticClass: "w-150px",
                    attrs: {
                      src:
                        _vm.$store.state.serverPath +
                        "/storage/" +
                        _vm.editAuditionData.image
                    }
                  })
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("b-form-textarea", {
              attrs: {
                id: "textarea-rows",
                placeholder: "내용을 입력해주세요",
                rows: "22"
              },
              model: {
                value: _vm.editAuditionData.content,
                callback: function($$v) {
                  _vm.$set(_vm.editAuditionData, "content", $$v)
                },
                expression: "editAuditionData.content"
              }
            }),
            _vm._v(" "),
            _c("b-button", { attrs: { type: "submit", variant: "primary" } }, [
              _vm._v("수정완료")
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
      : _c(
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
            _vm.auditionData.image.name
              ? _c("div", [
                  _c("img", {
                    ref: "newAuditionImageDisplay",
                    staticClass: "w-150px",
                    attrs: { src: "" }
                  })
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("b-form-textarea", {
              attrs: {
                id: "textarea-rows",
                placeholder: "내용을 입력해주세요",
                rows: "22"
              },
              model: {
                value: _vm.auditionData.content,
                callback: function($$v) {
                  _vm.$set(_vm.auditionData, "content", $$v)
                },
                expression: "auditionData.content"
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
>>>>>>> d58a464ff40f8784410eb2e39325d61fefe9e148
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/services/audition_service.js":
/*!***************************************************!*\
  !*** ./resources/js/services/audition_service.js ***!
  \***************************************************/
/*! exports provided: createAudition, loadAudition, loadDetailAudition, deleteAudition, updateAudition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAudition", function() { return createAudition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadAudition", function() { return loadAudition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadDetailAudition", function() { return loadDetailAudition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAudition", function() { return deleteAudition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateAudition", function() { return updateAudition; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service */ "./resources/js/services/http_service.js");
 // 오디션 생성

function createAudition(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post('/audition', data);
} // 오디션 리스트 로드

function loadAudition() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/audition');
} // 오디션 상세보기 로드

function loadDetailAudition(data) {
  var anything = "/audition/" + data;
  console.log(anything);
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get(anything);
} // 오디션 삭제하기

function deleteAudition(id) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])()["delete"]("audition/".concat(id));
} // 오디션 업데이트하기

function updateAudition(id, data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post("audition/".concat(id), data);
}

/***/ }),

/***/ "./resources/js/views/audition/Audition.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/audition/Audition.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Audition_vue_vue_type_template_id_139d5580___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Audition.vue?vue&type=template&id=139d5580& */ "./resources/js/views/audition/Audition.vue?vue&type=template&id=139d5580&");
/* harmony import */ var _Audition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Audition.vue?vue&type=script&lang=js& */ "./resources/js/views/audition/Audition.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Audition_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Audition.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/audition/Audition.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Audition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Audition_vue_vue_type_template_id_139d5580___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Audition_vue_vue_type_template_id_139d5580___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/audition/Audition.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/audition/Audition.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/audition/Audition.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Audition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Audition.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/audition/Audition.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Audition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/audition/Audition.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/audition/Audition.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Audition_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Audition.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/audition/Audition.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Audition_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Audition_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Audition_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Audition_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Audition_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/audition/Audition.vue?vue&type=template&id=139d5580&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/audition/Audition.vue?vue&type=template&id=139d5580& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Audition_vue_vue_type_template_id_139d5580___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Audition.vue?vue&type=template&id=139d5580& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/audition/Audition.vue?vue&type=template&id=139d5580&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Audition_vue_vue_type_template_id_139d5580___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Audition_vue_vue_type_template_id_139d5580___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);