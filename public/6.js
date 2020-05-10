(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/audition/Audition.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/audition/Audition.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
=======
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/UserSignup.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/auth/UserSignup.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
>>>>>>> 0ac58b75f35e9ea475e790797f2ba1b4cae05197
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
=======
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./resources/js/services/user.service.js");


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
// import data from '@/data'
/* harmony default export */ __webpack_exports__["default"] = ({
<<<<<<< HEAD
  name: 'Audition',
  data: function data() {
    // 게시판 최신 순 정렬
    // let items = data.Content.sort((a,b) => {return b.content_id - a.content_id})
    // 유저 네임 속성 추가(게시판의 유저아이디와 데이터의 유저아이디가 동일 할 경우에)
    // items = items.map(contentItem => {return {...contentItem, user_name: data.User.filter(userItem => userItem.user_id === contentItem.user_id)[0].name}})
    return {
      // 게시글의 보여주고싶은 필드 보이도록 설정
      fields: [{
        key: 'content_id',
        label: '글번호'
      }, {
        key: 'title',
        label: '제목'
      }, {
        key: 'created_at',
        label: '작성일'
      }, {
        key: 'user_name',
        label: '글쓴이'
      }],
      items: [{
        content_id: 1,
        user_id: 1,
        title: '빅 엔터테인먼트 공개 오디션',
        context: '아직 미정입니다',
        date: '2019-03-29',
        rank: 'A랭크 이상',
        created_at: '2019-01-01 13:11:42',
        updated_at: null,
        video: 'https://www.youtube.com/embed/zpOULjyy-n8?rel=0',
        sub_image: 'https://www.jjilbo.com/news/photo/201506/122901_48168_3522.jpg'
      }]
    };
  },
  methods: {
    rowClick: function rowClick(item, index, e) {
      this.$router.push({
        path: "/auditiondetail//".concat(item.content_id)
      });
    },
    writeContent: function writeContent() {
      this.$router.push({
        path: '/auditioncreate'
      });
    }
=======
  name: "user",
  data: function data() {
    return {
      userData: {
        name: '',
        userid: '',
        password: '',
        address: '',
        call_number: ''
      }
    };
  },
  methods: {
    createUser: function () {
      var _createUser = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var formData, _response;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                //request!
                formData = new FormData();
                formData.append("name", this.userData.name);
                formData.append("userid", this.userData.userid);
                formData.append("password", this.userData.password);
                formData.append("address", this.userData.address);
                formData.append("call_number", this.userData.call_number);
                console.dir(formData);
                _context.prev = 7;
                _context.next = 10;
                return _services_user_service__WEBPACK_IMPORTED_MODULE_1__["createUser"](formData);

              case 10:
                _response = _context.sent;
                console.log(_response);
                console.log('회원가입 성공~'); // this.flashMessage.success({
                //   message: "Category stored successfully!",
                //   time: 5000
                // });

                _context.next = 19;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](7);
                console.log(response);
                console.log(_context.t0); // switch (error.response.status) {
                //   case 422:
                //     this.errors = error.response.data.errors;
                //     break;
                //   default:
                //     this.flashMessage.error({
                //       message: "Some error occurred, Please try again!",
                //       time: 5000
                //     });
                //     break;
                // }

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[7, 15]]);
      }));

      function createUser() {
        return _createUser.apply(this, arguments);
      }

      return createUser;
    }()
>>>>>>> 0ac58b75f35e9ea475e790797f2ba1b4cae05197
  }
});

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/audition/Audition.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/audition/Audition.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/UserSignup.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/auth/UserSignup.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
>>>>>>> 0ac58b75f35e9ea475e790797f2ba1b4cae05197
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
<<<<<<< HEAD
exports.push([module.i, "\n.hovereffect:hover img {\n     opacity: 0.6;\n     filter: alpha(opacity=60);\n     transform: translate3d(0,0,0);\n}\n.hovereffect:hover .overlay:before\n      {\n     opacity: 1;\n     filter: alpha(opacity=100);\n     transform: translate3d(0,0,0);\n}\n#items{\n     width: 1800px;\n     display: inline-block;\n     margin:0;\n     padding:0;\n}\n#item{\n     width: 400px;\n     height: 500px;\n     float: left;\n     color: black;\n     background-color: white;\n     border: 1px solid #ced4da;\n     margin: 0 0 0 0;\n     padding: 0 0 0 0;\n     margin-left: 20px;\n     margin-top: 10px;\n     border-radius:5px;\n}\n#card-image{\n     margin-top:3px;\n     border-radius:5px;\n     width: 350px;\n     height: 400px;\n}\n", ""]);
=======
exports.push([module.i, "\n.title {\r\n  color: #141414;\r\n  font-size: 24px;\r\n  -webkit-margin-before: 0.83em;\r\n          margin-block-start: 0.83em;\r\n  -webkit-margin-after: 0.83em;\r\n          margin-block-end: 0.83em;\r\n  -webkit-margin-start: 0px;\r\n          margin-inline-start: 0px;\r\n  -webkit-margin-end: 0px;\r\n          margin-inline-end: 0px;\r\n  font-weight: bold;\n}\n#sign_container {\r\n  width: 100%;\r\n  text-align: center;\r\n  align-content: center;\n}\nh3 {\r\n  float: left;\r\n  left: 0;\r\n  font-weight: bold;\r\n  margin-top: 14px;\r\n  color: #141414;\r\n  font-size: 12px;\n}\n.str {\r\n  display: inline-block;\r\n\r\n  width: 12px;\r\n  color: #ed1c24;\r\n  font-size: 14px;\r\n  vertical-align: -2px;\n}\n.form-control {\r\n  width: 380px;\r\n  height: 40px;\r\n  border: 1px solid #666666;\n}\n#sign_form {\r\n  position: absolute;\r\n  left: 40%;\r\n  top: 10%;\n}\n#sign_title {\r\n  color: #666666;\r\n  font-size: 18px;\r\n  text-align: center;\n}\n#login_button {\r\n  width: 310px;\r\n  height: 60px;\r\n  background: #ed1c24;\r\n  color: white;\n}\n.login_link {\r\n  text-decoration: none;\r\n  color: #141414;\r\n  font-size: 12px;\n}\n#sign_text {\r\n  margin-top: 63px;\r\n  color: #141414;\r\n  text-align: center;\n}\n#sign_up {\r\n  color: #ed1c24;\n}\n.birth {\r\n  width: 120px;\r\n  height: 40px;\r\n  display: inline-block;\r\n  border: 1px solid #666666;\n}\n#birth_box {\r\n  margin-top: 20px;\n}\n#gender_group {\r\n  margin-top: 10px;\r\n  margin-right: 270px;\n}\r\n", ""]);
>>>>>>> 0ac58b75f35e9ea475e790797f2ba1b4cae05197

// exports


/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/audition/Audition.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/audition/Audition.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/UserSignup.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/auth/UserSignup.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
>>>>>>> 0ac58b75f35e9ea475e790797f2ba1b4cae05197
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


<<<<<<< HEAD
var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Audition.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/audition/Audition.vue?vue&type=style&index=0&lang=css&");
=======
var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserSignup.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/UserSignup.vue?vue&type=style&index=0&lang=css&");
>>>>>>> 0ac58b75f35e9ea475e790797f2ba1b4cae05197

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
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/audition/Audition.vue?vue&type=template&id=139d5580&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/audition/Audition.vue?vue&type=template&id=139d5580& ***!
  \***************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/UserSignup.vue?vue&type=template&id=f11f0c0a&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/auth/UserSignup.vue?vue&type=template&id=f11f0c0a& ***!
  \*************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c("h1", [_vm._v(_vm._s(_vm.items.user_id))]),
      _vm._v(" "),
      _c(
        "b-list-group",
        { attrs: { id: "items" } },
        _vm._l(_vm.items, function(items) {
          return _c(
            "b-list-group-item",
            {
              key: items.name,
              staticClass: "flex-column align-items-start",
              attrs: { id: "item", href: "#", active: "" },
              on: {
                click: function($event) {
                  return _vm.rowClick(items)
                }
              }
            },
            [
              _c("div", { staticClass: "hovereffect" }, [
                _c("img", { attrs: { id: "card-image", src: items.sub_image } })
              ]),
              _vm._v(" "),
              _c("div", [
                _c(
                  "div",
                  [
                    _c("b-badge", { attrs: { pill: "", variant: "primary" } }, [
                      _vm._v("마감일:  " + _vm._s(items.date))
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  [
                    _c("b-badge", { attrs: { pill: "", variant: "success" } }, [
                      _vm._v(_vm._s(items.rank))
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticStyle: { "margin-top": "12px" } }, [
                  _c(
                    "h5",
                    {
                      staticClass: "mb-1",
                      attrs: { sytle: "margin-top:10px" }
                    },
                    [_vm._v(_vm._s(items.title))]
                  )
                ])
              ])
            ]
          )
        }),
        1
      ),
      _vm._v(" "),
      _c(
        "b-button",
        {
          staticStyle: { "margin-top": "10px", width: "200px", height: "60px" },
          attrs: { variant: "dark" },
          on: { click: _vm.writeContent }
        },
        [_vm._v("오디션 공고 등록")]
=======
  return _c("div", { attrs: { id: "sign_container" } }, [
    _c(
      "form",
      {
        attrs: { id: "sign_form" },
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.createUser($event)
          }
        }
      },
      [
        _c("h2", { staticClass: "title" }, [_vm._v("기본정보를 등록하세요")]),
        _vm._v(" "),
        _c("div", [
          _vm._m(0),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.userData.name,
                expression: "userData.name"
              }
            ],
            staticClass: "form-control",
            attrs: { type: "text", placeholder: "이름", id: "name" },
            domProps: { value: _vm.userData.name },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.userData, "name", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _c("div", [
          _vm._m(1),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.userData.userid,
                expression: "userData.userid"
              }
            ],
            staticClass: "form-control",
            attrs: { type: "text", placeholder: "아이디", id: "userid" },
            domProps: { value: _vm.userData.userid },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.userData, "userid", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _c("div", [
          _vm._m(2),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.userData.password,
                expression: "userData.password"
              }
            ],
            staticClass: "form-control",
            attrs: {
              type: "password",
              placeholder: "비밀번호",
              id: "password"
            },
            domProps: { value: _vm.userData.password },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.userData, "password", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _vm._m(3),
        _vm._v(" "),
        _c("div", [
          _vm._m(4),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.userData.address,
                expression: "userData.address"
              }
            ],
            staticClass: "form-control",
            attrs: { type: "text", placeholder: "주소", id: "address" },
            domProps: { value: _vm.userData.address },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.userData, "address", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", [
          _vm._m(5),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.userData.call_number,
                expression: "userData.call_number"
              }
            ],
            staticClass: "form-control",
            attrs: { type: "text", placeholder: "연락처", id: "call_number" },
            domProps: { value: _vm.userData.call_number },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.userData, "call_number", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _vm._m(6)
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input_text" }, [
      _c("h3", { staticClass: "mform_stit" }, [
        _c("span", { staticClass: "str" }, [_vm._v("*")]),
        _vm._v("이름\n        ")
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
        _vm._v("아이디\n        ")
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
        _vm._v("비밀번호\n        ")
      ])
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
          _vm._v("비밀번호 확인\n        ")
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
    return _c("div", { staticClass: "input_text" }, [
      _c("h3", { staticClass: "mform_stit" }, [
        _c("span", { staticClass: "str" }, [_vm._v("*")]),
        _vm._v("주소\n        ")
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
        _vm._v("연락처\n        ")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center mt-4" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-indigo",
          attrs: { id: "login_button", type: "submit" }
        },
        [_vm._v("회원가입")]
>>>>>>> 0ac58b75f35e9ea475e790797f2ba1b4cae05197
      )
    ])
  }
]
render._withStripped = true



/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/views/audition/Audition.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/audition/Audition.vue ***!
  \**************************************************/
=======
/***/ "./resources/js/services/user.service.js":
/*!***********************************************!*\
  !*** ./resources/js/services/user.service.js ***!
  \***********************************************/
/*! exports provided: createUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUser", function() { return createUser; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service */ "./resources/js/services/http_service.js");

function createUser(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('/users', data);
} // export function loadCategories() {
//     return http().get('/categories');
// }

/***/ }),

/***/ "./resources/js/views/auth/UserSignup.vue":
/*!************************************************!*\
  !*** ./resources/js/views/auth/UserSignup.vue ***!
  \************************************************/
>>>>>>> 0ac58b75f35e9ea475e790797f2ba1b4cae05197
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _Audition_vue_vue_type_template_id_139d5580___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Audition.vue?vue&type=template&id=139d5580& */ "./resources/js/views/audition/Audition.vue?vue&type=template&id=139d5580&");
/* harmony import */ var _Audition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Audition.vue?vue&type=script&lang=js& */ "./resources/js/views/audition/Audition.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Audition_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Audition.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/audition/Audition.vue?vue&type=style&index=0&lang=css&");
=======
/* harmony import */ var _UserSignup_vue_vue_type_template_id_f11f0c0a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserSignup.vue?vue&type=template&id=f11f0c0a& */ "./resources/js/views/auth/UserSignup.vue?vue&type=template&id=f11f0c0a&");
/* harmony import */ var _UserSignup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserSignup.vue?vue&type=script&lang=js& */ "./resources/js/views/auth/UserSignup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _UserSignup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserSignup.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/auth/UserSignup.vue?vue&type=style&index=0&lang=css&");
>>>>>>> 0ac58b75f35e9ea475e790797f2ba1b4cae05197
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
<<<<<<< HEAD
  _Audition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Audition_vue_vue_type_template_id_139d5580___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Audition_vue_vue_type_template_id_139d5580___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
=======
  _UserSignup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserSignup_vue_vue_type_template_id_f11f0c0a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserSignup_vue_vue_type_template_id_f11f0c0a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
>>>>>>> 0ac58b75f35e9ea475e790797f2ba1b4cae05197
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
<<<<<<< HEAD
component.options.__file = "resources/js/views/audition/Audition.vue"
=======
component.options.__file = "resources/js/views/auth/UserSignup.vue"
>>>>>>> 0ac58b75f35e9ea475e790797f2ba1b4cae05197
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/views/audition/Audition.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/audition/Audition.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
=======
/***/ "./resources/js/views/auth/UserSignup.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/auth/UserSignup.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
>>>>>>> 0ac58b75f35e9ea475e790797f2ba1b4cae05197
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Audition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Audition.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/audition/Audition.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Audition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/audition/Audition.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/audition/Audition.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************/
=======
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSignup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserSignup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/UserSignup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSignup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/auth/UserSignup.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/auth/UserSignup.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************/
>>>>>>> 0ac58b75f35e9ea475e790797f2ba1b4cae05197
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Audition_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Audition.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/audition/Audition.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Audition_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Audition_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Audition_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Audition_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Audition_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/audition/Audition.vue?vue&type=template&id=139d5580&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/audition/Audition.vue?vue&type=template&id=139d5580& ***!
  \*********************************************************************************/
=======
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSignup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserSignup.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/UserSignup.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSignup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSignup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSignup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSignup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSignup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/auth/UserSignup.vue?vue&type=template&id=f11f0c0a&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/auth/UserSignup.vue?vue&type=template&id=f11f0c0a& ***!
  \*******************************************************************************/
>>>>>>> 0ac58b75f35e9ea475e790797f2ba1b4cae05197
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Audition_vue_vue_type_template_id_139d5580___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Audition.vue?vue&type=template&id=139d5580& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/audition/Audition.vue?vue&type=template&id=139d5580&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Audition_vue_vue_type_template_id_139d5580___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Audition_vue_vue_type_template_id_139d5580___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
=======
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSignup_vue_vue_type_template_id_f11f0c0a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserSignup.vue?vue&type=template&id=f11f0c0a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/UserSignup.vue?vue&type=template&id=f11f0c0a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSignup_vue_vue_type_template_id_f11f0c0a___WEBPACK_IMPORTED_MODULE_0__["render"]; });
>>>>>>> 0ac58b75f35e9ea475e790797f2ba1b4cae05197

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSignup_vue_vue_type_template_id_f11f0c0a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });


<<<<<<< HEAD
=======

>>>>>>> 0ac58b75f35e9ea475e790797f2ba1b4cae05197
/***/ })

}]);