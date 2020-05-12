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
  }
});

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

/***/ "./resources/js/views/Advice/AdviceList.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/Advice/AdviceList.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdviceList_vue_vue_type_template_id_0d2105be_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdviceList.vue?vue&type=template&id=0d2105be&scoped=true& */ "./resources/js/views/Advice/AdviceList.vue?vue&type=template&id=0d2105be&scoped=true&");
/* harmony import */ var _AdviceList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdviceList.vue?vue&type=script&lang=js& */ "./resources/js/views/Advice/AdviceList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
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