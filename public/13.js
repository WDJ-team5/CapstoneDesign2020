(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/audition/AuditionCreate.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/audition/AuditionCreate.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Categories.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Categories.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
>>>>>>> 0ac58b75f35e9ea475e790797f2ba1b4cae05197
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
<<<<<<< HEAD
/* harmony import */ var _services_audition_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/audition_service */ "./resources/js/services/audition_service.js");
=======
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/category_service */ "./resources/js/services/category_service.js");
>>>>>>> 0ac58b75f35e9ea475e790797f2ba1b4cae05197


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
>>>>>>> 0ac58b75f35e9ea475e790797f2ba1b4cae05197
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AuditionCreate',
  data: function data() {
    return {
      auditionData: {
        title: '',
        context: '',
        userId: 1,
        date: '',
        image: '',
        selected: '',
        video: ''
      },
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
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
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
              case "end":
                return _context.stop();
            }
          }
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
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/audition/AuditionCreate.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/audition/AuditionCreate.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#form_input{\n        width: 1400px;\n        margin-left: 160px;\n        margin-top: 20px;\n}\n#select_area{\n    width: 2200px;\n    float: left;\n    margin:0;\n    padding:0;\n}\n.select_item{\n    width: 300px;\n    display: inline-block;\n    margin: 0 0 0 0;\n    padding: 0 0 0 0;\n}\n\n/* 제목 */\n#title{\n    height: 60px;\n}\n\n/* 날짜 */\n.b-form-datepicker {\n    width: 300px;\n    margin:0 0 0 0;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/audition/AuditionCreate.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/audition/AuditionCreate.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AuditionCreate.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/audition/AuditionCreate.vue?vue&type=style&index=0&lang=css&");
=======
>>>>>>> 0ac58b75f35e9ea475e790797f2ba1b4cae05197

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'category',
  data: function data() {
    return {
      categoryData: {
        name: '',
        image: ''
      }
    };
  },
  methods: {
    attachImage: function attachImage() {
      // 첨부된 파일을 data의 image속성에 저장
      this.categoryData.image = this.$refs.newCategoryImage.files[0]; // 첨부된 파일을 읽음

      var reader = new FileReader(); //파일이 로드되었을 경우에 reader에 로드된 것을 newCategoryImageDisplay에 띄움

      reader.addEventListener('load', function () {
        this.$refs.newCategoryImageDisplay.src = reader.result;
      }.bind(this), false); // categoryData에 저장된 image 속성의 데이터를 읽음

      reader.readAsDataURL(this.categoryData.image);
    },
    // 모달창 숨기기
    hideNewCategoryModal: function hideNewCategoryModal() {
      this.$refs.newCategoryModal.hide();
    },
    // 모달창 보이기
    showNewCategoryModal: function showNewCategoryModal() {
      this.$refs.newCategoryModal.show();
    },
    // 저장버튼 클릭시
    createCategory: function () {
      var _createCategory = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                formData = new FormData();
                formData.append('name', this.categoryData.name);
                formData.append('image', this.categoryData.image);
                _context.prev = 3;
                _context.next = 6;
                return _services_category_service__WEBPACK_IMPORTED_MODULE_1__["createCategory"](formData);

              case 6:
                response = _context.sent;
                console.log(response);
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](3);
                alert('안된다 시발');

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 10]]);
      }));

      function createCategory() {
        return _createCategory.apply(this, arguments);
      }

      return createCategory;
    }()
  }
});

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/audition/AuditionCreate.vue?vue&type=template&id=4188269c&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/audition/AuditionCreate.vue?vue&type=template&id=4188269c& ***!
  \*********************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Categories.vue?vue&type=template&id=53f0967b&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Categories.vue?vue&type=template&id=53f0967b& ***!
  \********************************************************************************************************************************************************************************************************/
>>>>>>> 0ac58b75f35e9ea475e790797f2ba1b4cae05197
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
}
var staticRenderFns = []
=======
  return _c(
    "div",
    { staticClass: "container-fluid" },
    [
      _c("h1", { staticClass: "mt-4" }, [_vm._v("Dashboard")]),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-xl-6" }, [
          _c("div", { staticClass: "card mb-4" }, [
            _c("div", { staticClass: "card-header d-flex" }, [
              _vm._m(1),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-primary btn-sm ml-auto",
                  on: { click: _vm.showNewCategoryModal }
                },
                [_c("span", { staticClass: "fa fa-plus" }), _vm._v("만들기")]
              )
            ]),
            _vm._v(" "),
            _vm._m(2)
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "newCategoryModal",
          attrs: { "hide-footer": "", title: "새로운 카테고리를 추가" }
        },
        [
          _c("div", { staticClass: "d-block" }, [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.createCategory($event)
                  }
                }
              },
              [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "name" } }, [
                    _vm._v("이름넣으삼")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.categoryData.name,
                        expression: "categoryData.name"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      "aria-describedby": "emailHelp",
                      id: "name",
                      placeholder: "카테고리 이름을 입력"
                    },
                    domProps: { value: _vm.categoryData.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.categoryData, "name", $event.target.value)
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "image" } }, [
                    _vm._v("이미지를 선택하세여")
                  ]),
                  _vm._v(" "),
                  _vm.categoryData.image.name
                    ? _c("div", [
                        _c("img", {
                          ref: "newCategoryImageDisplay",
                          staticClass: "w-150px",
                          attrs: { src: "" }
                        })
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("input", {
                    ref: "newCategoryImage",
                    staticClass: "form-control ",
                    attrs: { type: "file", id: "image" },
                    on: { change: _vm.attachImage }
                  })
                ]),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c("div", { staticClass: "text-right" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-default",
                      attrs: { type: "button" },
                      on: { click: _vm.hideNewCategoryModal }
                    },
                    [_vm._v("취소")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "submit" }
                    },
                    [_c("span", { staticClass: "fa fa-check" }), _vm._v("저장")]
                  )
                ])
              ]
            )
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ol", { staticClass: "breadcrumb mb-4" }, [
      _c("li", { staticClass: "breadcrumb-item active" }, [_vm._v("Dashboard")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", [
      _c("i", { staticClass: "fas fa-chart-area mr-1" }),
      _vm._v("카테고리 경영\n          ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-body" }, [
      _c("table", { staticClass: "table" }, [
        _c("tr", [
          _c("thead", [
            _c("tr", [
              _c("td", [_vm._v("아이디")]),
              _vm._v(" "),
              _c("td", [_vm._v("이름")]),
              _vm._v(" "),
              _c("td", [_vm._v("사진")]),
              _vm._v(" "),
              _c("td", [_vm._v("액션")])
            ])
          ]),
          _vm._v(" "),
          _c("tbody", [
            _c("td", [_vm._v("1")]),
            _vm._v(" "),
            _c("td", [_vm._v("장성현")]),
            _vm._v(" "),
            _c("td", [_vm._v("이미지")]),
            _vm._v(" "),
            _c("td", [
              _c("button", { staticClass: "btn btn-primary btn-sm" }, [
                _c("span", { staticClass: "fa fa-edit" })
              ]),
              _vm._v(" "),
              _c("button", { staticClass: "btn btn-primary btn-sm" }, [
                _c("span", { staticClass: "fa fa-trash" })
              ])
            ])
          ])
        ])
      ])
    ])
  }
]
>>>>>>> 0ac58b75f35e9ea475e790797f2ba1b4cae05197
render._withStripped = true



/***/ }),

<<<<<<< HEAD
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

function createAudition(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post('/audition', data);
}
function loadAudition() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/audition');
}

/***/ }),

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

/***/ "./resources/js/store.js":
/*!*******************************!*\
  !*** ./resources/js/store.js ***!
  \*******************************/
/*! exports provided: default */
=======
/***/ "./resources/js/services/category_service.js":
/*!***************************************************!*\
  !*** ./resources/js/services/category_service.js ***!
  \***************************************************/
/*! exports provided: createCategory, loadCategories */
>>>>>>> 0ac58b75f35e9ea475e790797f2ba1b4cae05197
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vuex__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (new vuex__WEBPACK_IMPORTED_MODULE_1__["default"].Store({
  state: {
    apiURL: 'http://localhost:8000/api',
    serverPath: 'http://localhost:8000' // apiURL: 'http://127.0.0.1:8000/api',
    // serverPath: 'http://127.0.0.1:8000'

  },
  // state: {
  //     apiURL: 'http://192.168.0.6:8000/api',
  //     serverPath: 'http://192.168.0.6:8000'
  // },
  // state: {
  //     apiURL: 'http://localhost:9000/api',
  //     serverPath: 'http://localhost:9000'
  // },
  mutations: {},
  actions: {}
}));

/***/ }),

/***/ "./resources/js/views/audition/AuditionCreate.vue":
/*!********************************************************!*\
  !*** ./resources/js/views/audition/AuditionCreate.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AuditionCreate_vue_vue_type_template_id_4188269c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuditionCreate.vue?vue&type=template&id=4188269c& */ "./resources/js/views/audition/AuditionCreate.vue?vue&type=template&id=4188269c&");
/* harmony import */ var _AuditionCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuditionCreate.vue?vue&type=script&lang=js& */ "./resources/js/views/audition/AuditionCreate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AuditionCreate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AuditionCreate.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/audition/AuditionCreate.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
=======
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCategory", function() { return createCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCategories", function() { return loadCategories; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service */ "./resources/js/services/http_service.js");
>>>>>>> 0ac58b75f35e9ea475e790797f2ba1b4cae05197

function createCategory(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post('/categories', data);
}
function loadCategories() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/categories');
}

/***/ }),

/***/ "./resources/js/views/Categories.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/Categories.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Categories_vue_vue_type_template_id_53f0967b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Categories.vue?vue&type=template&id=53f0967b& */ "./resources/js/views/Categories.vue?vue&type=template&id=53f0967b&");
/* harmony import */ var _Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Categories.vue?vue&type=script&lang=js& */ "./resources/js/views/Categories.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

<<<<<<< HEAD
var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AuditionCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AuditionCreate_vue_vue_type_template_id_4188269c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AuditionCreate_vue_vue_type_template_id_4188269c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
=======
var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Categories_vue_vue_type_template_id_53f0967b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Categories_vue_vue_type_template_id_53f0967b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
>>>>>>> 0ac58b75f35e9ea475e790797f2ba1b4cae05197
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
<<<<<<< HEAD
component.options.__file = "resources/js/views/audition/AuditionCreate.vue"
=======
component.options.__file = "resources/js/views/Categories.vue"
>>>>>>> 0ac58b75f35e9ea475e790797f2ba1b4cae05197
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/views/audition/AuditionCreate.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/audition/AuditionCreate.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
=======
/***/ "./resources/js/views/Categories.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/Categories.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
>>>>>>> 0ac58b75f35e9ea475e790797f2ba1b4cae05197
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuditionCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AuditionCreate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/audition/AuditionCreate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuditionCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/audition/AuditionCreate.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/audition/AuditionCreate.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuditionCreate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AuditionCreate.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/audition/AuditionCreate.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuditionCreate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuditionCreate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuditionCreate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuditionCreate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuditionCreate_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/audition/AuditionCreate.vue?vue&type=template&id=4188269c&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/audition/AuditionCreate.vue?vue&type=template&id=4188269c& ***!
  \***************************************************************************************/
=======
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Categories.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Categories.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Categories.vue?vue&type=template&id=53f0967b&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/Categories.vue?vue&type=template&id=53f0967b& ***!
  \**************************************************************************/
>>>>>>> 0ac58b75f35e9ea475e790797f2ba1b4cae05197
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuditionCreate_vue_vue_type_template_id_4188269c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AuditionCreate.vue?vue&type=template&id=4188269c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/audition/AuditionCreate.vue?vue&type=template&id=4188269c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuditionCreate_vue_vue_type_template_id_4188269c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuditionCreate_vue_vue_type_template_id_4188269c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
=======
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_template_id_53f0967b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Categories.vue?vue&type=template&id=53f0967b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Categories.vue?vue&type=template&id=53f0967b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_template_id_53f0967b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_template_id_53f0967b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
>>>>>>> 0ac58b75f35e9ea475e790797f2ba1b4cae05197



/***/ })

}]);