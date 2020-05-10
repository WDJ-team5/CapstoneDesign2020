(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/CompanySignup1.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/auth/CompanySignup1.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Advice/AdviceList.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Advice/AdviceList.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
>>>>>>> 0cace812b16184f53eb55cb7cd3befcff07d3b56
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
//
//
//
//
//
//
//
//
//
=======
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./resources/js/views/Advice/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

>>>>>>> 0cace812b16184f53eb55cb7cd3befcff07d3b56
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return _defineProperty({
      selected: 'A',
      options: [{
        item: 'A',
        name: 'Option A'
      }, {
        item: 'B',
        name: 'Option B'
      }, {
        item: 'D',
        name: 'Option C',
        notEnabled: true
      }, {
        item: {
          d: 1
        },
        name: 'Option D'
      }],
      gender: 'first'
    }, "options", [{
      text: '남성',
      value: 'man'
    }, {
      text: '여성',
      value: 'women'
    }]);
=======

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "AdviceList",
  data: function data() {
    var contentItems = _index_js__WEBPACK_IMPORTED_MODULE_0__["default"].Content.sort(function (a, b) {
      return b.content_id - a.content_id;
    }); // 내림차순


    var items = contentItems.map(function (contentItem) {
      return _objectSpread(_objectSpread({}, contentItem), {}, {
        user_name: _index_js__WEBPACK_IMPORTED_MODULE_0__["default"].User.filter(function (userItem) {
          return contentItem.user_id === userItem.user_id;
        })[0].name
      });
    });
    return {
      currentPage: 1,
      perPage: 10,
      // bootstrap b-table 필드 
      fields: [{
        key: "content_id",
        label: "번호"
      }, {
        key: "title",
        label: "제목"
      }, {
        key: "created_at",
        label: "작성일"
      }, {
        key: "reply",
        label: "답변"
      }],
      items: items
    };
  },
  methods: {
    rowClick: function rowClick(item, index, e) {
      this.$router.push({
        path: "/advice/detail/".concat(item.content_id)
      });
    },
    writeContent: function writeContent() {
      this.$router.push({
        path: "/board/create"
      });
    }
  },
  computed: {
    rows: function rows() {
      return this.items.length;
    }
>>>>>>> 0cace812b16184f53eb55cb7cd3befcff07d3b56
  }
});

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/CompanySignup1.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/auth/CompanySignup1.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Advice/AdviceList.vue?vue&type=style&index=0&id=0d2105be&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Advice/AdviceList.vue?vue&type=style&index=0&id=0d2105be&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
>>>>>>> 0cace812b16184f53eb55cb7cd3befcff07d3b56
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
<<<<<<< HEAD
exports.push([module.i, "\n.title{\r\n    color: #141414;\r\n    font-size: 24px;\r\n    -webkit-margin-before: 0.83em;\r\n            margin-block-start: 0.83em;\r\n    -webkit-margin-after: 0.83em;\r\n            margin-block-end: 0.83em;\r\n    -webkit-margin-start: 0px;\r\n            margin-inline-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n            margin-inline-end: 0px;\r\n    font-weight: bold;\n}\n#sign_container{\r\n    width: 100%;\r\n    text-align: center;\r\n    align-content: center;\n}\nh3 {\r\n    float: left;\r\n    left:0;\r\n    font-weight: bold;\r\n    margin-top: 14px;\r\n    color: #141414;\r\n    font-size: 12px;\n}\n.str{\r\n    display: inline-block;\r\n\r\n    width: 12px;\r\n    color: #ed1c24;\r\n    font-size: 14px;\r\n    vertical-align: -2px;\n}\n.form-control{\r\n  width: 380px;\r\n  height: 40px;\r\n  border: 1px solid #666666;\n}\n#sign_form{\r\n  position:absolute;\r\n    left:40%;\r\n    top:10%;\n}\n#sign_title{\r\n  color: #666666;\r\n  font-size: 18px;\r\n  text-align: center\n}\n#login_button{\r\n  width: 310px;\r\n  height: 60px;\r\n  background: #ed1c24;\r\n  color: white;\n}\n.login_link{\r\n  text-decoration: none;\r\n  color: #141414;\r\n  font-size: 12px;\n}\n#sign_text{\r\n  margin-top: 63px;\r\n  color: #141414;\r\n  text-align: center;\n}\n#sign_up{\r\n  color: #ed1c24;\n}\n.birth{\r\n    width:120px;\r\n    height: 40px;\r\n    display: inline-block;\r\n    border: 1px solid #666666;\n}\n#birth_box{\r\n    margin-top: 20px;\n}\n#gender_group{\r\n    margin-top: 10px;\r\n    margin-right: 270px;\n}\r\n", ""]);
=======
exports.push([module.i, "\nh1[data-v-0d2105be] {\n  font-size: 1.5rem;\n  font-weight: bold;\n  margin : 20px 20px 20px 20px;\n}\n\n\n", ""]);
>>>>>>> 0cace812b16184f53eb55cb7cd3befcff07d3b56

// exports


/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/CompanySignup1.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/auth/CompanySignup1.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Advice/AdviceList.vue?vue&type=style&index=0&id=0d2105be&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Advice/AdviceList.vue?vue&type=style&index=0&id=0d2105be&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
>>>>>>> 0cace812b16184f53eb55cb7cd3befcff07d3b56
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


<<<<<<< HEAD
var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanySignup1.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/CompanySignup1.vue?vue&type=style&index=0&lang=css&");
=======
var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdviceList.vue?vue&type=style&index=0&id=0d2105be&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Advice/AdviceList.vue?vue&type=style&index=0&id=0d2105be&scoped=true&lang=css&");
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
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/CompanySignup1.vue?vue&type=template&id=31982794&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/auth/CompanySignup1.vue?vue&type=template&id=31982794& ***!
  \*****************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Advice/AdviceList.vue?vue&type=template&id=0d2105be&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Advice/AdviceList.vue?vue&type=template&id=0d2105be&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "sign_container" } }, [
    _c("form", { attrs: { id: "sign_form" } }, [
      _c("h2", { staticClass: "title" }, [_vm._v("기본정보를 등록하세요")]),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _vm._m(2),
      _vm._v(" "),
      _vm._m(3),
      _vm._v(" "),
      _vm._m(4),
      _vm._v(" "),
      _vm._m(5),
      _vm._v(" "),
      _c("div", [
        _vm._m(6),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _c(
          "div",
          [
            _c(
              "b-form-group",
              { attrs: { id: "gender_group" } },
              [
                _c("b-form-radio-group", {
                  attrs: {
                    options: _vm.options,
                    plain: "",
                    name: "plain-inline"
                  },
                  model: {
                    value: _vm.gender,
                    callback: function($$v) {
                      _vm.gender = $$v
                    },
                    expression: "gender"
                  }
                })
              ],
              1
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", [
        _vm._m(7),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _c(
          "div",
          { attrs: { id: "birth_box" } },
          [
            _c("b-form-select", {
              staticClass: "mb-3 birth",
              attrs: {
                options: _vm.options,
                "value-field": "item",
                "text-field": "name",
                "disabled-field": "notEnabled"
              },
              model: {
                value: _vm.selected,
                callback: function($$v) {
                  _vm.selected = $$v
                },
                expression: "selected"
              }
            }),
            _vm._v(" "),
            _c("b-form-select", {
              staticClass: "mb-3 birth",
              attrs: {
                options: _vm.options,
                "value-field": "item",
                "text-field": "name",
                "disabled-field": "notEnabled"
              },
              model: {
                value: _vm.selected,
                callback: function($$v) {
                  _vm.selected = $$v
                },
                expression: "selected"
              }
            }),
            _vm._v(" "),
            _c("b-form-select", {
              staticClass: "mb-3 birth",
              attrs: {
                options: _vm.options,
                "value-field": "item",
                "text-field": "name",
                "disabled-field": "notEnabled"
              },
              model: {
                value: _vm.selected,
                callback: function($$v) {
                  _vm.selected = $$v
                },
                expression: "selected"
              }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "text-center mt-4" },
        [
          _c(
            "router-link",
            {
              staticClass: "nav-link",
              attrs: { to: "/companysignup2", id: "sign_up", exact: "" }
            },
            [
              _c(
                "button",
                {
                  staticClass: "btn btn-indigo",
                  attrs: { id: "login_button", type: "submit" }
                },
                [_vm._v("다음")]
              )
            ]
          )
        ],
        1
      )
    ])
  ])
=======
  return _c(
    "div",
    [
      _c("h1", [_vm._v("내 피드백 활동")]),
      _vm._v(" "),
      _c("b-table", {
        attrs: {
          striped: "",
          hover: "",
          items: _vm.items,
          "per-page": _vm.perPage,
          "current-page": _vm.currentPage,
          fields: _vm.fields
        },
        on: { "row-clicked": _vm.rowClick },
        scopedSlots: _vm._u([
          {
            key: "cell(reply)",
            fn: function(data) {
              return [
                data.item.reply === true
                  ? _c("b-badge", { attrs: { variant: "primary" } }, [
                      _vm._v("답변완료")
                    ])
                  : _c("b-badge", { attrs: { variant: "secondary" } }, [
                      _vm._v("미답변")
                    ])
              ]
            }
          }
        ])
      }),
      _vm._v(" "),
      _c("b-pagination", {
        attrs: {
          "total-rows": _vm.rows,
          "per-page": _vm.perPage,
          align: "center"
        },
        model: {
          value: _vm.currentPage,
          callback: function($$v) {
            _vm.currentPage = $$v
          },
          expression: "currentPage"
        }
      }),
      _vm._v(" "),
      _c(
        "b-table-column",
        [
          _vm.reply == true
            ? _c("b-badge", { attrs: { variant: "primary" } }, [
                _vm._v("답변완료")
              ])
            : _c("b-badge", { attrs: { variant: "secondary" } }, [
                _vm._v("미답변")
              ])
        ],
        1
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
    return _c("div", [
      _c("div", { staticClass: "input_text" }, [
        _c("h3", { staticClass: "mform_stit" }, [
          _c("span", { staticClass: "str" }, [_vm._v("*")]),
          _vm._v("이름")
        ])
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control",
        attrs: { type: "text", placeholder: "이름" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "input_text" }, [
        _c("h3", { staticClass: "mform_stit" }, [
          _c("span", { staticClass: "str" }, [_vm._v("*")]),
          _vm._v("이메일")
        ])
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control",
        attrs: { type: "text", placeholder: "이메일" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "input_text" }, [
        _c("h3", { staticClass: "mform_stit" }, [
          _c("span", { staticClass: "str" }, [_vm._v("*")]),
          _vm._v("비밀번호")
        ])
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control",
        attrs: { type: "password", placeholder: "비밀번호" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "input_text" }, [
        _c("h3", { staticClass: "mform_stit" }, [
          _c("span", { staticClass: "str" }, [_vm._v("*")]),
          _vm._v("비밀번호 확인")
        ])
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control",
        attrs: { type: "password", placeholder: "비밀번호 확인" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "input_text" }, [
        _c("h3", { staticClass: "mform_stit" }, [
          _c("span", { staticClass: "str" }, [_vm._v("*")]),
          _vm._v("주소")
        ])
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control",
        attrs: { type: "text", placeholder: "주소" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "input_text" }, [
        _c("h3", { staticClass: "mform_stit" }, [
          _c("span", { staticClass: "str" }, [_vm._v("*")]),
          _vm._v("연락처")
        ])
      ]),
      _vm._v(" "),
      _c("input", {
        staticClass: "form-control",
        attrs: { type: "text", placeholder: "연락처" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input_text" }, [
      _c("h3", { staticClass: "mform_stit" }, [
        _c("span", { staticClass: "str" }, [_vm._v("*")]),
        _vm._v("성별")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input_text" }, [
      _c("h3", { staticClass: "mform_stit" }, [
        _c("span", { staticClass: "str" }, [_vm._v("*")]),
        _vm._v("생년월일")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/views/auth/CompanySignup1.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/auth/CompanySignup1.vue ***!
  \****************************************************/
=======
/***/ "./resources/js/views/Advice/AdviceList.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/Advice/AdviceList.vue ***!
  \**************************************************/
>>>>>>> 0cace812b16184f53eb55cb7cd3befcff07d3b56
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _CompanySignup1_vue_vue_type_template_id_31982794___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CompanySignup1.vue?vue&type=template&id=31982794& */ "./resources/js/views/auth/CompanySignup1.vue?vue&type=template&id=31982794&");
/* harmony import */ var _CompanySignup1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CompanySignup1.vue?vue&type=script&lang=js& */ "./resources/js/views/auth/CompanySignup1.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CompanySignup1_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CompanySignup1.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/auth/CompanySignup1.vue?vue&type=style&index=0&lang=css&");
=======
/* harmony import */ var _AdviceList_vue_vue_type_template_id_0d2105be_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdviceList.vue?vue&type=template&id=0d2105be&scoped=true& */ "./resources/js/views/Advice/AdviceList.vue?vue&type=template&id=0d2105be&scoped=true&");
/* harmony import */ var _AdviceList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdviceList.vue?vue&type=script&lang=js& */ "./resources/js/views/Advice/AdviceList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AdviceList_vue_vue_type_style_index_0_id_0d2105be_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AdviceList.vue?vue&type=style&index=0&id=0d2105be&scoped=true&lang=css& */ "./resources/js/views/Advice/AdviceList.vue?vue&type=style&index=0&id=0d2105be&scoped=true&lang=css&");
>>>>>>> 0cace812b16184f53eb55cb7cd3befcff07d3b56
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
<<<<<<< HEAD
  _CompanySignup1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CompanySignup1_vue_vue_type_template_id_31982794___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CompanySignup1_vue_vue_type_template_id_31982794___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
=======
  _AdviceList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdviceList_vue_vue_type_template_id_0d2105be_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AdviceList_vue_vue_type_template_id_0d2105be_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0d2105be",
>>>>>>> 0cace812b16184f53eb55cb7cd3befcff07d3b56
  null
  
)

/* hot reload */
if (false) { var api; }
<<<<<<< HEAD
component.options.__file = "resources/js/views/auth/CompanySignup1.vue"
=======
component.options.__file = "resources/js/views/Advice/AdviceList.vue"
>>>>>>> 0cace812b16184f53eb55cb7cd3befcff07d3b56
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/views/auth/CompanySignup1.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/auth/CompanySignup1.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
=======
/***/ "./resources/js/views/Advice/AdviceList.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/Advice/AdviceList.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
>>>>>>> 0cace812b16184f53eb55cb7cd3befcff07d3b56
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySignup1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanySignup1.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/CompanySignup1.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySignup1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/auth/CompanySignup1.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/auth/CompanySignup1.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************/
=======
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdviceList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdviceList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Advice/AdviceList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdviceList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Advice/AdviceList.vue?vue&type=style&index=0&id=0d2105be&scoped=true&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/views/Advice/AdviceList.vue?vue&type=style&index=0&id=0d2105be&scoped=true&lang=css& ***!
  \***********************************************************************************************************/
>>>>>>> 0cace812b16184f53eb55cb7cd3befcff07d3b56
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySignup1_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanySignup1.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/CompanySignup1.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySignup1_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySignup1_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySignup1_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySignup1_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySignup1_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/auth/CompanySignup1.vue?vue&type=template&id=31982794&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/auth/CompanySignup1.vue?vue&type=template&id=31982794& ***!
  \***********************************************************************************/
=======
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdviceList_vue_vue_type_style_index_0_id_0d2105be_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdviceList.vue?vue&type=style&index=0&id=0d2105be&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Advice/AdviceList.vue?vue&type=style&index=0&id=0d2105be&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdviceList_vue_vue_type_style_index_0_id_0d2105be_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdviceList_vue_vue_type_style_index_0_id_0d2105be_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdviceList_vue_vue_type_style_index_0_id_0d2105be_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdviceList_vue_vue_type_style_index_0_id_0d2105be_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdviceList_vue_vue_type_style_index_0_id_0d2105be_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/Advice/AdviceList.vue?vue&type=template&id=0d2105be&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/Advice/AdviceList.vue?vue&type=template&id=0d2105be&scoped=true& ***!
  \*********************************************************************************************/
>>>>>>> 0cace812b16184f53eb55cb7cd3befcff07d3b56
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySignup1_vue_vue_type_template_id_31982794___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanySignup1.vue?vue&type=template&id=31982794& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/CompanySignup1.vue?vue&type=template&id=31982794&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySignup1_vue_vue_type_template_id_31982794___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanySignup1_vue_vue_type_template_id_31982794___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
=======
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdviceList_vue_vue_type_template_id_0d2105be_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdviceList.vue?vue&type=template&id=0d2105be&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Advice/AdviceList.vue?vue&type=template&id=0d2105be&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdviceList_vue_vue_type_template_id_0d2105be_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdviceList_vue_vue_type_template_id_0d2105be_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
>>>>>>> 0cace812b16184f53eb55cb7cd3befcff07d3b56



/***/ }),

/***/ "./resources/js/views/Advice/index.js":
/*!********************************************!*\
  !*** ./resources/js/views/Advice/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ __webpack_exports__["default"] = ({
  User: [{
    user_id: 1,
    name: "인성",
    img: "../../images/profile.png",
    created_at: "2018-09-11"
  }, {
    user_id: 2,
    name: "탁우",
    img: "../../images/profile.png",
    created_at: "2018-09-12"
  }, {
    user_id: 3,
    name: "준우",
    img: "../../images/profile.png",
    created_at: "2018-09-13"
  }, {
    user_id: 4,
    name: "채우",
    img: "../../images/profile.png",
    created_at: "2018-09-14"
  }, {
    user_id: 5,
    name: "예나",
    img: "../../images/profile.png",
    created_at: "2018-09-15"
  }],
  Expert: [{
    expert_id: 1,
    name: "김상헌",
    content: '안녕하세요',
    major: '야구응원댄스',
    awards: 'KBO 우수단장상',
    sns: '없음',
    company: '허니크루',
    img: "../../images/expert_1.png",
    created_at: "2020-09-15"
  }, {
    expert_id: 2,
    name: "구자욱",
    content: '안녕하세요',
    major: '좌익수',
    awards: 'KBO 신인상',
    sns: '없음',
    company: '삼성라이온즈',
    img: "../../images/expert_1.png",
    created_at: "2020-09-15"
  }, {
    expert_id: 3,
    name: "상수",
    content: '안녕하세요',
    major: '유격수',
    awards: 'KBO 최다도루상',
    sns: '없음',
    company: '삼성라이온즈',
    img: "../../images/expert_1.png",
    created_at: "2020-09-15"
  }, {
    expert_id: 4,
    name: "헌곤",
    content: '안녕하세요',
    major: '우익수',
    awards: 'KBO 최다홈런상',
    sns: '없음',
    company: '삼성라이온즈',
    img: "../../images/expert_1.png",
    created_at: "2020-09-15"
  }],
  Content: [_defineProperty({
    content_id: 1,
    user_id: 5,
    title: "게시판 제목",
    context: "게시판 내용",
    created_at: "2020-09-15",
    updated_at: null,
    reply: true,
    expert_id: 1,
    reply_context: "알려드릴 것이 없습니다. 하산하세요"
  }, "updated_at", "2020-05-09"), _defineProperty({
    content_id: 2,
    user_id: 1,
    title: "게시판 제목",
    context: "게시판 내용",
    created_at: "2020-09-11",
    updated_at: null,
    reply: true,
    expert_id: 1,
    reply_context: "알려드릴 것이 없습니다. 하산하세요"
  }, "updated_at", "2020-05-09"), _defineProperty({
    content_id: 3,
    user_id: 3,
    title: "게시판 제목",
    context: "게시판 내용",
    created_at: "2020-09-12",
    updated_at: null,
    reply: true,
    expert_id: 1,
    reply_context: "알려드릴 것이 없습니다. 하산하세요"
  }, "updated_at", "2020-05-09"), _defineProperty({
    content_id: 4,
    user_id: 2,
    title: "게시판 제목",
    context: "게시판 내용",
    created_at: "2020-09-13",
    updated_at: null,
    reply: true,
    expert_id: 1,
    reply_context: "알려드릴 것이 없습니다. 하산하세요"
  }, "updated_at", "2020-05-09"), _defineProperty({
    content_id: 5,
    user_id: 4,
    title: "게시판 제목",
    context: "게시판 내용",
    created_at: "2020-09-14",
    updated_at: null,
    reply: true,
    expert_id: 1,
    reply_context: "알려드릴 것이 없습니다. 하산하세요"
  }, "updated_at", "2020-05-09"), _defineProperty({
    content_id: 6,
    user_id: 5,
    title: "게시판 제목",
    context: "게시판 내용",
    created_at: "2020-09-15",
    updated_at: null,
    reply: true,
    expert_id: 1,
    reply_context: "알려드릴 것이 없습니다. 하산하세요"
  }, "updated_at", "2020-05-09"), _defineProperty({
    content_id: 7,
    user_id: 1,
    title: "게시판 제목",
    context: "게시판 내용",
    created_at: "2020-09-11",
    updated_at: null,
    reply: true,
    expert_id: 1,
    reply_context: "알려드릴 것이 없습니다. 하산하세요"
  }, "updated_at", "2020-05-09"), _defineProperty({
    content_id: 8,
    user_id: 3,
    title: "게시판 제목",
    context: "게시판 내용",
    created_at: "2020-09-12",
    updated_at: null,
    reply: true,
    expert_id: 1,
    reply_context: "알려드릴 것이 없습니다. 하산하세요"
  }, "updated_at", "2020-05-09"), _defineProperty({
    content_id: 9,
    user_id: 2,
    title: "게시판 제목",
    context: "게시판 내용",
    created_at: "2020-09-13",
    updated_at: null,
    reply: true,
    expert_id: 1,
    reply_context: "알려드릴 것이 없습니다. 하산하세요"
  }, "updated_at", "2020-05-09"), _defineProperty({
    content_id: 10,
    user_id: 4,
    title: "게시판 제목",
    context: "게시판 내용",
    created_at: "2020-09-14",
    updated_at: null,
    reply: true,
    expert_id: 1,
    reply_context: "알려드릴 것이 없습니다. 하산하세요"
  }, "updated_at", "2020-05-09"), _defineProperty({
    content_id: 11,
    user_id: 5,
    title: "게시판 제목",
    context: "게시판 내용",
    created_at: "2020-09-15",
    updated_at: null,
    reply: true,
    expert_id: 1,
    reply_context: "알려드릴 것이 없습니다. 하산하세요"
  }, "updated_at", "2020-05-09"), _defineProperty({
    content_id: 12,
    user_id: 1,
    title: "게시판 제목",
    context: "게시판 내용",
    created_at: "2020-09-11",
    updated_at: null,
    reply: true,
    expert_id: 1,
    reply_context: "알려드릴 것이 없습니다. 하산하세요"
  }, "updated_at", "2020-05-09"), _defineProperty({
    content_id: 13,
    user_id: 3,
    title: "게시판 제목",
    context: "게시판 내용",
    created_at: "2020-09-12",
    updated_at: null,
    reply: true,
    expert_id: 1,
    reply_context: "알려드릴 것이 없습니다. 하산하세요"
  }, "updated_at", "2020-05-09"), _defineProperty({
    content_id: 14,
    user_id: 2,
    title: "게시판 제목",
    context: "게시판 내용",
    created_at: "2020-09-13",
    updated_at: null,
    reply: true,
    expert_id: 1,
    reply_context: "알려드릴 것이 없습니다. 하산하세요"
  }, "updated_at", "2020-05-09"), _defineProperty({
    content_id: 15,
    user_id: 4,
    title: "게시판 제목",
    context: "게시판 내용",
    created_at: "2020-09-14",
    updated_at: null,
    reply: false,
    expert_id: 1,
    reply_context: null
  }, "updated_at", "2020-05-09"), _defineProperty({
    content_id: 16,
    user_id: 5,
    title: "안녕하세요. 상헌 전문가님",
    context: "안녕하세요. 김상수 선수 응원가 안무 연습 중인데요, 삼성의 승리를 위해 안타안타~ 하는 부분이 어려워요.. ",
    created_at: "2020-09-15",
    updated_at: null,
    reply: true,
    expert_id: 1,
    reply_context: "네, 안녕하세요. 피드백 신청 감사합니다. 말씀해 주신 부분은 팔을 곧게 펴고 추는 게 좋습니다."
  }, "updated_at", "2020-05-09")]
});

/***/ })

}]);