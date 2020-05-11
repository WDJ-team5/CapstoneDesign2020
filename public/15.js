(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/UserSignup.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/auth/UserSignup.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
=======
<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/audition/Audition.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/audition/Audition.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
=======
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Categories.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Categories.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
>>>>>>> 0cace812b16184f53eb55cb7cd3befcff07d3b56
>>>>>>> 0ac58b75f35e9ea475e790797f2ba1b4cae05197
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
<<<<<<< HEAD
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./resources/js/services/user.service.js");
=======
<<<<<<< HEAD
/* harmony import */ var _services_audition_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/audition_service */ "./resources/js/services/audition_service.js");
=======
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/category_service */ "./resources/js/services/category_service.js");
>>>>>>> 0cace812b16184f53eb55cb7cd3befcff07d3b56
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
//
//
//
//
//
//
//
//
//
//
//
//
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
        context: '',
        userId: 1,
        date: '',
        image: '',
        selected: '',
        video: ''
      },
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
<<<<<<< HEAD
    createUser: function () {
      var _createUser = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var formData, _response;

=======
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
>>>>>>> 0cace812b16184f53eb55cb7cd3befcff07d3b56
>>>>>>> 0ac58b75f35e9ea475e790797f2ba1b4cae05197
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
<<<<<<< HEAD
                //request!
=======
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
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                this.flashMessage.error({
                  message: '에러가 발생했습니다!',
                  time: 5000
                });

              case 12:
=======
>>>>>>> 0ac58b75f35e9ea475e790797f2ba1b4cae05197
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

<<<<<<< HEAD
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
=======
              case 13:
>>>>>>> 0cace812b16184f53eb55cb7cd3befcff07d3b56
>>>>>>> 0ac58b75f35e9ea475e790797f2ba1b4cae05197
              case "end":
                return _context.stop();
            }
          }
<<<<<<< HEAD
        }, _callee, this, [[7, 15]]);
=======
<<<<<<< HEAD
        }, _callee, this, [[0, 9]]);
      }));

      function loadAudition() {
        return _loadAudition.apply(this, arguments);
      }

      return loadAudition;
    }(),
    // 오디션 클릭시
    rowClick: function rowClick(audition, index, e) {
      this.$router.push({
        path: "/auditiondetail//".concat(audition.id)
      });
    },
    // 오디션 생성
    writeContent: function writeContent() {
      this.$router.push({
        path: '/auditioncreate'
      });
    }
=======
        }, _callee, this, [[3, 10]]);
>>>>>>> 0ac58b75f35e9ea475e790797f2ba1b4cae05197
      }));

      function createUser() {
        return _createUser.apply(this, arguments);
      }

      return createUser;
    }()
>>>>>>> 0cace812b16184f53eb55cb7cd3befcff07d3b56
  }
});

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/UserSignup.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/auth/UserSignup.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
=======
<<<<<<< HEAD
/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/audition/Audition.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/audition/Audition.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
>>>>>>> 0ac58b75f35e9ea475e790797f2ba1b4cae05197
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
<<<<<<< HEAD
exports.push([module.i, "\n.title {\r\n  color: #141414;\r\n  font-size: 24px;\r\n  -webkit-margin-before: 0.83em;\r\n          margin-block-start: 0.83em;\r\n  -webkit-margin-after: 0.83em;\r\n          margin-block-end: 0.83em;\r\n  -webkit-margin-start: 0px;\r\n          margin-inline-start: 0px;\r\n  -webkit-margin-end: 0px;\r\n          margin-inline-end: 0px;\r\n  font-weight: bold;\n}\n#sign_container {\r\n  width: 100%;\r\n  text-align: center;\r\n  align-content: center;\n}\nh3 {\r\n  float: left;\r\n  left: 0;\r\n  font-weight: bold;\r\n  margin-top: 14px;\r\n  color: #141414;\r\n  font-size: 12px;\n}\n.str {\r\n  display: inline-block;\r\n\r\n  width: 12px;\r\n  color: #ed1c24;\r\n  font-size: 14px;\r\n  vertical-align: -2px;\n}\n.form-control {\r\n  width: 380px;\r\n  height: 40px;\r\n  border: 1px solid #666666;\n}\n#sign_form {\r\n  position: absolute;\r\n  left: 40%;\r\n  top: 10%;\n}\n#sign_title {\r\n  color: #666666;\r\n  font-size: 18px;\r\n  text-align: center;\n}\n#login_button {\r\n  width: 310px;\r\n  height: 60px;\r\n  background: #ed1c24;\r\n  color: white;\n}\n.login_link {\r\n  text-decoration: none;\r\n  color: #141414;\r\n  font-size: 12px;\n}\n#sign_text {\r\n  margin-top: 63px;\r\n  color: #141414;\r\n  text-align: center;\n}\n#sign_up {\r\n  color: #ed1c24;\n}\n.birth {\r\n  width: 120px;\r\n  height: 40px;\r\n  display: inline-block;\r\n  border: 1px solid #666666;\n}\n#birth_box {\r\n  margin-top: 20px;\n}\n#gender_group {\r\n  margin-top: 10px;\r\n  margin-right: 270px;\n}\r\n", ""]);
=======
exports.push([module.i, "\n.hovereffect:hover img {\n     opacity: 0.6;\n     filter: alpha(opacity=60);\n     transform: translate3d(0,0,0);\n}\n.hovereffect:hover .overlay:before\n      {\n     opacity: 1;\n     filter: alpha(opacity=100);\n     transform: translate3d(0,0,0);\n}\n#items{\n     width: 1800px;\n     display: inline-block;\n     margin:0;\n     padding:0;\n}\n#item{\n     width: 400px;\n     height: 500px;\n     float: left;\n     color: black;\n     background-color: white;\n     border: 1px solid #ced4da;\n     margin: 0 0 0 0;\n     padding: 0 0 0 0;\n     margin-left: 20px;\n     margin-top: 10px;\n     border-radius:5px;\n}\n#card-image{\n     margin-top:3px;\n     border-radius:5px;\n     width: 350px;\n     height: 400px;\n}\n", ""]);
>>>>>>> 0ac58b75f35e9ea475e790797f2ba1b4cae05197

// exports


/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/UserSignup.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/auth/UserSignup.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/audition/Audition.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/audition/Audition.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
>>>>>>> 0ac58b75f35e9ea475e790797f2ba1b4cae05197
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


<<<<<<< HEAD
var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserSignup.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/UserSignup.vue?vue&type=style&index=0&lang=css&");
=======
var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Audition.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/audition/Audition.vue?vue&type=style&index=0&lang=css&");
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
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/UserSignup.vue?vue&type=template&id=f11f0c0a&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/auth/UserSignup.vue?vue&type=template&id=f11f0c0a& ***!
  \*************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/audition/Audition.vue?vue&type=template&id=139d5580&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/audition/Audition.vue?vue&type=template&id=139d5580& ***!
  \***************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Categories.vue?vue&type=template&id=53f0967b&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Categories.vue?vue&type=template&id=53f0967b& ***!
  \********************************************************************************************************************************************************************************************************/
>>>>>>> 0cace812b16184f53eb55cb7cd3befcff07d3b56
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
=======
  return _c(
    "div",
<<<<<<< HEAD
    [
      _c(
        "b-list-group",
        { attrs: { id: "items" } },
        _vm._l(_vm.auditions, function(audition, index) {
          return _c(
            "b-list-group-item",
            {
              key: index,
              staticClass: "flex-column align-items-start",
              attrs: { id: "item", href: "#", active: "" },
              on: {
                click: function($event) {
                  return _vm.rowClick(audition)
                }
              }
            },
            [
              _c("div", { staticClass: "hovereffect" }, [
                _c("img", {
                  attrs: {
                    id: "card-image",
                    src:
                      _vm.$store.state.serverPath +
                      "/storage/" +
                      audition.image,
                    alt: audition.name
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", [
                _c(
                  "div",
                  [
                    _c("b-badge", { attrs: { pill: "", variant: "primary" } }, [
                      _vm._v("마감일:  " + _vm._s(audition.date))
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  [
                    _c("b-badge", { attrs: { pill: "", variant: "success" } }, [
                      _vm._v("랭크: " + _vm._s(audition.selected))
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
                    [_vm._v(_vm._s(audition.title))]
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
>>>>>>> 0ac58b75f35e9ea475e790797f2ba1b4cae05197
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
<<<<<<< HEAD
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
=======
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
>>>>>>> 0cace812b16184f53eb55cb7cd3befcff07d3b56
      )
    ],
    1
  )
>>>>>>> 0ac58b75f35e9ea475e790797f2ba1b4cae05197
}
<<<<<<< HEAD
var staticRenderFns = []
=======
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
      )
    ])
  }
]
>>>>>>> 0cace812b16184f53eb55cb7cd3befcff07d3b56
render._withStripped = true



/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/services/http_service.js":
/*!***********************************************!*\
  !*** ./resources/js/services/http_service.js ***!
  \***********************************************/
/*! exports provided: http, httpFile */
=======
<<<<<<< HEAD
/***/ "./resources/js/services/audition_service.js":
/*!***************************************************!*\
  !*** ./resources/js/services/audition_service.js ***!
  \***************************************************/
/*! exports provided: createAudition, loadAudition */
=======
/***/ "./resources/js/services/category_service.js":
/*!***************************************************!*\
  !*** ./resources/js/services/category_service.js ***!
  \***************************************************/
/*! exports provided: createCategory, loadCategories */
>>>>>>> 0cace812b16184f53eb55cb7cd3befcff07d3b56
>>>>>>> 0ac58b75f35e9ea475e790797f2ba1b4cae05197
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
=======
<<<<<<< HEAD
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAudition", function() { return createAudition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadAudition", function() { return loadAudition; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service */ "./resources/js/services/http_service.js");
 // 오디션 생성

function createAudition(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post('/audition', data);
} // 오디션 리스트 로드

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
>>>>>>> 0ac58b75f35e9ea475e790797f2ba1b4cae05197
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "http", function() { return http; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpFile", function() { return httpFile; });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store */ "./resources/js/store.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
<<<<<<< HEAD
=======


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
=======
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCategory", function() { return createCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCategories", function() { return loadCategories; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service */ "./resources/js/services/http_service.js");
>>>>>>> 0ac58b75f35e9ea475e790797f2ba1b4cae05197


function http() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
    baseURL: _store__WEBPACK_IMPORTED_MODULE_0__["default"].state.apiURL
  });
}
<<<<<<< HEAD
function httpFile() {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
    baseURL: _store__WEBPACK_IMPORTED_MODULE_0__["default"].state.apiURL,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
=======
function loadCategories() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/categories');
>>>>>>> 0cace812b16184f53eb55cb7cd3befcff07d3b56
>>>>>>> 0ac58b75f35e9ea475e790797f2ba1b4cae05197
}

/***/ }),

<<<<<<< HEAD
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

/***/ "./resources/js/store.js":
/*!*******************************!*\
  !*** ./resources/js/store.js ***!
  \*******************************/
=======
<<<<<<< HEAD
/***/ "./resources/js/views/audition/Audition.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/audition/Audition.vue ***!
  \**************************************************/
=======
/***/ "./resources/js/views/Categories.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/Categories.vue ***!
  \*******************************************/
>>>>>>> 0cace812b16184f53eb55cb7cd3befcff07d3b56
>>>>>>> 0ac58b75f35e9ea475e790797f2ba1b4cae05197
/*! exports provided: default */
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

/***/ "./resources/js/views/auth/UserSignup.vue":
/*!************************************************!*\
  !*** ./resources/js/views/auth/UserSignup.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserSignup_vue_vue_type_template_id_f11f0c0a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserSignup.vue?vue&type=template&id=f11f0c0a& */ "./resources/js/views/auth/UserSignup.vue?vue&type=template&id=f11f0c0a&");
/* harmony import */ var _UserSignup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserSignup.vue?vue&type=script&lang=js& */ "./resources/js/views/auth/UserSignup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _UserSignup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserSignup.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/auth/UserSignup.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

=======
<<<<<<< HEAD
/* harmony import */ var _Audition_vue_vue_type_template_id_139d5580___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Audition.vue?vue&type=template&id=139d5580& */ "./resources/js/views/audition/Audition.vue?vue&type=template&id=139d5580&");
/* harmony import */ var _Audition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Audition.vue?vue&type=script&lang=js& */ "./resources/js/views/audition/Audition.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Audition_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Audition.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/audition/Audition.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

=======
/* harmony import */ var _Categories_vue_vue_type_template_id_53f0967b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Categories.vue?vue&type=template&id=53f0967b& */ "./resources/js/views/Categories.vue?vue&type=template&id=53f0967b&");
/* harmony import */ var _Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Categories.vue?vue&type=script&lang=js& */ "./resources/js/views/Categories.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
>>>>>>> 0cace812b16184f53eb55cb7cd3befcff07d3b56
>>>>>>> 0ac58b75f35e9ea475e790797f2ba1b4cae05197





/* normalize component */

<<<<<<< HEAD
var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UserSignup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserSignup_vue_vue_type_template_id_f11f0c0a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserSignup_vue_vue_type_template_id_f11f0c0a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
=======
<<<<<<< HEAD
var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Audition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Audition_vue_vue_type_template_id_139d5580___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Audition_vue_vue_type_template_id_139d5580___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
=======
var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Categories_vue_vue_type_template_id_53f0967b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Categories_vue_vue_type_template_id_53f0967b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
>>>>>>> 0cace812b16184f53eb55cb7cd3befcff07d3b56
>>>>>>> 0ac58b75f35e9ea475e790797f2ba1b4cae05197
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
<<<<<<< HEAD
component.options.__file = "resources/js/views/auth/UserSignup.vue"
=======
<<<<<<< HEAD
component.options.__file = "resources/js/views/audition/Audition.vue"
=======
component.options.__file = "resources/js/views/Categories.vue"
>>>>>>> 0cace812b16184f53eb55cb7cd3befcff07d3b56
>>>>>>> 0ac58b75f35e9ea475e790797f2ba1b4cae05197
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/views/auth/UserSignup.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/auth/UserSignup.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
=======
<<<<<<< HEAD
/***/ "./resources/js/views/audition/Audition.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/audition/Audition.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
=======
/***/ "./resources/js/views/Categories.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/Categories.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
>>>>>>> 0cace812b16184f53eb55cb7cd3befcff07d3b56
>>>>>>> 0ac58b75f35e9ea475e790797f2ba1b4cae05197
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSignup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserSignup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/UserSignup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSignup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/auth/UserSignup.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/auth/UserSignup.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************/
=======
<<<<<<< HEAD
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Audition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Audition.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/audition/Audition.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Audition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/audition/Audition.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/audition/Audition.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************/
>>>>>>> 0ac58b75f35e9ea475e790797f2ba1b4cae05197
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSignup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserSignup.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/UserSignup.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSignup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSignup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSignup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSignup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSignup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/auth/UserSignup.vue?vue&type=template&id=f11f0c0a&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/auth/UserSignup.vue?vue&type=template&id=f11f0c0a& ***!
  \*******************************************************************************/
=======
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
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Categories.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Categories.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Categories.vue?vue&type=template&id=53f0967b&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/Categories.vue?vue&type=template&id=53f0967b& ***!
  \**************************************************************************/
>>>>>>> 0cace812b16184f53eb55cb7cd3befcff07d3b56
>>>>>>> 0ac58b75f35e9ea475e790797f2ba1b4cae05197
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSignup_vue_vue_type_template_id_f11f0c0a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserSignup.vue?vue&type=template&id=f11f0c0a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/UserSignup.vue?vue&type=template&id=f11f0c0a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSignup_vue_vue_type_template_id_f11f0c0a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserSignup_vue_vue_type_template_id_f11f0c0a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
=======
<<<<<<< HEAD
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Audition_vue_vue_type_template_id_139d5580___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Audition.vue?vue&type=template&id=139d5580& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/audition/Audition.vue?vue&type=template&id=139d5580&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Audition_vue_vue_type_template_id_139d5580___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Audition_vue_vue_type_template_id_139d5580___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
=======
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_template_id_53f0967b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Categories.vue?vue&type=template&id=53f0967b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Categories.vue?vue&type=template&id=53f0967b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_template_id_53f0967b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_template_id_53f0967b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
>>>>>>> 0cace812b16184f53eb55cb7cd3befcff07d3b56
>>>>>>> 0ac58b75f35e9ea475e790797f2ba1b4cae05197



/***/ })

}]);