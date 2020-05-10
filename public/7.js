(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/CompanySignup2.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/auth/CompanySignup2.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Categories.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Categories.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
>>>>>>> 0cace812b16184f53eb55cb7cd3befcff07d3b56
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/category_service */ "./resources/js/services/category_service.js");


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

>>>>>>> 0cace812b16184f53eb55cb7cd3befcff07d3b56
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
/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/CompanySignup2.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/auth/CompanySignup2.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.title{\r\n    color: #141414;\r\n    font-size: 24px;\r\n    -webkit-margin-before: 0.83em;\r\n            margin-block-start: 0.83em;\r\n    -webkit-margin-after: 0.83em;\r\n            margin-block-end: 0.83em;\r\n    -webkit-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\n}\n#sign_container{\r\n    width: 100%;\r\n    text-align: center;\r\n    align-content: center;\n}\nh3 {\r\n    float: left;\r\n    left:0;\r\n    font-weight: bold;\r\n    margin-top: 14px;\r\n    color: #141414;\r\n    font-size: 12px;\n}\n.str{\r\n    display: inline-block;\r\n\r\n    width: 12px;\r\n    color: #ed1c24;\r\n    font-size: 14px;\r\n    vertical-align: -2px;\n}\n.form-control{\r\n  width: 380px;\r\n  height: 40px;\r\n  border: 1px solid #666666;\n}\n#sign_form{\r\n  position:absolute;\r\n    left:40%;\r\n    top:10%;\n}\n#sign_title{\r\n  color: #666666;\r\n  font-size: 18px;\r\n  text-align: center\n}\n#login_button{\r\n  width: 310px;\r\n  height: 60px;\r\n  background: #ed1c24;\r\n  color: white;\n}\n.login_link{\r\n  text-decoration: none;\r\n  color: #141414;\r\n  font-size: 12px;\n}\n#sign_text{\r\n  margin-top: 63px;\r\n  color: #141414;\r\n  text-align: center;\n}\n#sign_up{\r\n  color: #ed1c24;\n}\n.birth{\r\n    width:120px;\r\n    height: 40px;\r\n    display: inline-block;\r\n    border: 1px solid #666666;\n}\n#birth_box{\r\n    margin-top: 20px;\n}\n#gender_group{\r\n    margin-top: 10px;\r\n    margin-right: 270px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/CompanySignup2.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/auth/CompanySignup2.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanySignup2.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/CompanySignup2.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/CompanySignup2.vue?vue&type=template&id=31a63f15&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/auth/CompanySignup2.vue?vue&type=template&id=31a63f15& ***!
  \*****************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Categories.vue?vue&type=template&id=53f0967b&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Categories.vue?vue&type=template&id=53f0967b& ***!
  \********************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
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
>>>>>>> 0cace812b16184f53eb55cb7cd3befcff07d3b56
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
<<<<<<< HEAD
    return _c("div", { attrs: { id: "sign_container" } }, [
      _c("form", { attrs: { id: "sign_form" } }, [
        _c("h2", { staticClass: "title" }, [_vm._v("기업정보를 등록하세요")]),
        _vm._v(" "),
        _c("div", [
          _c("div", { staticClass: "input_text" }, [
            _c("h3", { staticClass: "mform_stit" }, [
              _c("span", { staticClass: "str" }, [_vm._v("*")]),
              _vm._v("회사명")
            ])
          ]),
          _vm._v(" "),
          _c("input", {
            staticClass: "form-control",
            attrs: { type: "text", placeholder: "회사명" }
          })
        ]),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _c("div", [
          _c("div", { staticClass: "input_text" }, [
            _c("h3", { staticClass: "mform_stit" }, [
              _c("span", { staticClass: "str" }, [_vm._v("*")]),
              _vm._v("회사 연락처")
            ])
          ]),
          _vm._v(" "),
          _c("input", {
            staticClass: "form-control",
            attrs: { type: "text", placeholder: "회사 연락처" }
          })
        ]),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _c("div", [
          _c("div", { staticClass: "input_text" }, [
            _c("h3", { staticClass: "mform_stit" }, [
              _c("span", { staticClass: "str" }, [_vm._v("*")]),
              _vm._v("사업자 등록번호")
            ])
          ]),
          _vm._v(" "),
          _c("input", {
            staticClass: "form-control",
            attrs: { type: "text", placeholder: "사업자 등록번호" }
          })
        ]),
        _vm._v(" "),
        _c("div", [
          _c("div", { staticClass: "input_text" }, [
            _c("h3", { staticClass: "mform_stit" }, [
              _c("span", { staticClass: "str" }, [_vm._v("*")]),
              _vm._v("사원 수")
            ])
          ]),
          _vm._v(" "),
          _c("input", {
            staticClass: "form-control",
            attrs: { type: "text", placeholder: "사원 수" }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "text-center mt-4" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-indigo",
              attrs: { id: "login_button", type: "submit" }
            },
            [_vm._v("회원가입")]
          )
=======
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
>>>>>>> 0cace812b16184f53eb55cb7cd3befcff07d3b56
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/views/auth/CompanySignup2.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/auth/CompanySignup2.vue ***!
  \****************************************************/
=======
/***/ "./resources/js/services/category_service.js":
/*!***************************************************!*\
  !*** ./resources/js/services/category_service.js ***!
  \***************************************************/
/*! exports provided: createCategory, loadCategories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCategory", function() { return createCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCategories", function() { return loadCategories; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service */ "./resources/js/services/http_service.js");

function createCategory(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post('/categories', data);
}
function loadCategories() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/categories');
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
>>>>>>> 0cace812b16184f53eb55cb7cd3befcff07d3b56
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _CompanySignup2_vue_vue_type_template_id_31a63f15___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CompanySignup2.vue?vue&type=template&id=31a63f15& */ "./resources/js/views/auth/CompanySignup2.vue?vue&type=template&id=31a63f15&");
/* harmony import */ var _CompanySignup2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CompanySignup2.vue?vue&type=script&lang=js& */ "./resources/js/views/auth/CompanySignup2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CompanySignup2_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CompanySignup2.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/auth/CompanySignup2.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
=======
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
>>>>>>> 0cace812b16184f53eb55cb7cd3befcff07d3b56

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
  _CompanySignup2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CompanySignup2_vue_vue_type_template_id_31a63f15___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CompanySignup2_vue_vue_type_template_id_31a63f15___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
=======
var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Categories_vue_vue_type_template_id_53f0967b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Categories_vue_vue_type_template_id_53f0967b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
>>>>>>> 0cace812b16184f53eb55cb7cd3befcff07d3b56
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
<<<<<<< HEAD
component.options.__file = "resources/js/views/auth/CompanySignup2.vue"
=======
component.options.__file = "resources/js/views/Categories.vue"
>>>>>>> 0cace812b16184f53eb55cb7cd3befcff07d3b56
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/views/auth/CompanySignup2.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/auth/CompanySignup2.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
=======
/***/ "./resources/js/views/Categories.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/Categories.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
>>>>>>> 0cace812b16184f53eb55cb7cd3befcff07d3b56
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySignup2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanySignup2.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/CompanySignup2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySignup2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/auth/CompanySignup2.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/auth/CompanySignup2.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySignup2_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanySignup2.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/CompanySignup2.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySignup2_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySignup2_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySignup2_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySignup2_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySignup2_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/auth/CompanySignup2.vue?vue&type=template&id=31a63f15&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/auth/CompanySignup2.vue?vue&type=template&id=31a63f15& ***!
  \***********************************************************************************/
=======
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Categories.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Categories.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Categories.vue?vue&type=template&id=53f0967b&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/Categories.vue?vue&type=template&id=53f0967b& ***!
  \**************************************************************************/
>>>>>>> 0cace812b16184f53eb55cb7cd3befcff07d3b56
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySignup2_vue_vue_type_template_id_31a63f15___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanySignup2.vue?vue&type=template&id=31a63f15& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/CompanySignup2.vue?vue&type=template&id=31a63f15&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySignup2_vue_vue_type_template_id_31a63f15___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySignup2_vue_vue_type_template_id_31a63f15___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
=======
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_template_id_53f0967b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Categories.vue?vue&type=template&id=53f0967b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Categories.vue?vue&type=template&id=53f0967b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_template_id_53f0967b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_template_id_53f0967b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
>>>>>>> 0cace812b16184f53eb55cb7cd3befcff07d3b56



/***/ })

}]);