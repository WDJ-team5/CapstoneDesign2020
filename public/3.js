(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Advice/AdviceList.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Advice/AdviceList.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./resources/js/views/Advice/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
<<<<<<< HEAD
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
=======
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
      errors: {}
>>>>>>> d58a464ff40f8784410eb2e39325d61fefe9e148
    };
  },
  methods: {
<<<<<<< HEAD
    rowClick: function rowClick(item, index, e) {
=======
    loadAudition: function () {
      var _loadAudition = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
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
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 9]]);
      }));

      function loadAudition() {
        return _loadAudition.apply(this, arguments);
      }

      return loadAudition;
    }(),
    // 오디션 클릭시
    rowClick: function rowClick(audition, index, e) {
>>>>>>> d58a464ff40f8784410eb2e39325d61fefe9e148
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
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Advice/AdviceList.vue?vue&type=style&index=0&id=0d2105be&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Advice/AdviceList.vue?vue&type=style&index=0&id=0d2105be&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nh1[data-v-0d2105be] {\n  font-size: 1.5rem;\n  font-weight: bold;\n  margin : 20px 20px 20px 20px;\n}\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Advice/AdviceList.vue?vue&type=style&index=0&id=0d2105be&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Advice/AdviceList.vue?vue&type=style&index=0&id=0d2105be&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdviceList.vue?vue&type=style&index=0&id=0d2105be&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Advice/AdviceList.vue?vue&type=style&index=0&id=0d2105be&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Advice/AdviceList.vue?vue&type=template&id=0d2105be&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Advice/AdviceList.vue?vue&type=template&id=0d2105be&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/views/Advice/AdviceList.vue":
=======
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
>>>>>>> d58a464ff40f8784410eb2e39325d61fefe9e148
/*!**************************************************!*\
  !*** ./resources/js/views/Advice/AdviceList.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdviceList_vue_vue_type_template_id_0d2105be_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdviceList.vue?vue&type=template&id=0d2105be&scoped=true& */ "./resources/js/views/Advice/AdviceList.vue?vue&type=template&id=0d2105be&scoped=true&");
/* harmony import */ var _AdviceList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdviceList.vue?vue&type=script&lang=js& */ "./resources/js/views/Advice/AdviceList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AdviceList_vue_vue_type_style_index_0_id_0d2105be_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AdviceList.vue?vue&type=style&index=0&id=0d2105be&scoped=true&lang=css& */ "./resources/js/views/Advice/AdviceList.vue?vue&type=style&index=0&id=0d2105be&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AdviceList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdviceList_vue_vue_type_template_id_0d2105be_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AdviceList_vue_vue_type_template_id_0d2105be_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0d2105be",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Advice/AdviceList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Advice/AdviceList.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/Advice/AdviceList.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdviceList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdviceList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Advice/AdviceList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdviceList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Advice/AdviceList.vue?vue&type=style&index=0&id=0d2105be&scoped=true&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/views/Advice/AdviceList.vue?vue&type=style&index=0&id=0d2105be&scoped=true&lang=css& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdviceList_vue_vue_type_style_index_0_id_0d2105be_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdviceList.vue?vue&type=style&index=0&id=0d2105be&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Advice/AdviceList.vue?vue&type=style&index=0&id=0d2105be&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdviceList_vue_vue_type_style_index_0_id_0d2105be_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdviceList_vue_vue_type_style_index_0_id_0d2105be_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdviceList_vue_vue_type_style_index_0_id_0d2105be_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdviceList_vue_vue_type_style_index_0_id_0d2105be_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdviceList_vue_vue_type_style_index_0_id_0d2105be_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/Advice/AdviceList.vue?vue&type=template&id=0d2105be&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/Advice/AdviceList.vue?vue&type=template&id=0d2105be&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdviceList_vue_vue_type_template_id_0d2105be_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdviceList.vue?vue&type=template&id=0d2105be&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Advice/AdviceList.vue?vue&type=template&id=0d2105be&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdviceList_vue_vue_type_template_id_0d2105be_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdviceList_vue_vue_type_template_id_0d2105be_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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