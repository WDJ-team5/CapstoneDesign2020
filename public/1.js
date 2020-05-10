(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Advice/AdviceDetail.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Advice/AdviceDetail.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./resources/js/views/Advice/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "AdviceDetail",
  data: function data() {
    var contentId = Number(this.$route.params.contentId);

    var contentData = _index_js__WEBPACK_IMPORTED_MODULE_0__["default"].Content.filter(function (contentItem) {
      return contentItem.content_id === contentId;
    })[0];

    return {
      contentId: contentId,
      title: contentData.title,
      context: contentData.context,
      user_name: _index_js__WEBPACK_IMPORTED_MODULE_0__["default"].User.filter(function (item) {
        return item.user_id === contentData.user_id;
      })[0].name,
      created: contentData.created_at,
      expert_name: _index_js__WEBPACK_IMPORTED_MODULE_0__["default"].Expert.filter(function (item) {
        return item.expert_id === contentData.expert_id;
      })[0].name,
      reply_context: contentData.reply_context,
      updated: contentData.updated_at,
      expert_img: _index_js__WEBPACK_IMPORTED_MODULE_0__["default"].Expert.filter(function (item) {
        return item.expert_id === contentData.expert_id;
      })[0].img,
      user_img: _index_js__WEBPACK_IMPORTED_MODULE_0__["default"].User.filter(function (item) {
        return item.user_id === contentData.user_id;
      })[0].img
    };
  },
  methods: {
    deleteData: function deleteData() {
      var _this = this;

      var content_index = _index_js__WEBPACK_IMPORTED_MODULE_0__["default"].Content.findIndex(function (contentItem) {
        return contentItem.content_id === _this.contentId;
      });

      _index_js__WEBPACK_IMPORTED_MODULE_0__["default"].Content.splice(content_index, 1); // 데이터 삭제


      this.$router.push({
        path: "/"
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Advice/AdviceDetail.vue?vue&type=style&index=0&id=346519f1&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Advice/AdviceDetail.vue?vue&type=style&index=0&id=346519f1&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.content[data-v-346519f1] {\r\n  border: 1px solid black;\r\n  margin-top : 30px;\n}\n.content-detail-content-info[data-v-346519f1] {\r\n  display: flex;\r\n  justify-content: space-between;\n}\n.content-detail-content-info-left[data-v-346519f1] {\r\n  width: 130px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 1rem;\r\n  margin-left:20px;\r\n  margin-top:20px;\n}\n.content-detail-content-info-right[data-v-346519f1] {\r\n  width: 300px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 1rem;\n}\n.content-detail-content[data-v-346519f1] {\r\n  margin-top: 1rem;\r\n  padding-top: 1rem;\r\n  height:auto;\r\n  min-height: 300px;\r\n  font-size: 2em;\r\n  margin:10px 30px 30px 30px;\n}\n.content-detail-button[data-v-346519f1] {\r\n  border: 1px solid black;\r\n  margin-top: 1rem;\r\n  padding: 2rem;\n}\n.content-detail-comment[data-v-346519f1] {\r\n  border: 1px solid black;\r\n  margin-top: 1rem;\r\n  padding: 2rem;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Advice/AdviceDetail.vue?vue&type=style&index=0&id=346519f1&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Advice/AdviceDetail.vue?vue&type=style&index=0&id=346519f1&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdviceDetail.vue?vue&type=style&index=0&id=346519f1&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Advice/AdviceDetail.vue?vue&type=style&index=0&id=346519f1&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Advice/AdviceDetail.vue?vue&type=template&id=346519f1&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Advice/AdviceDetail.vue?vue&type=template&id=346519f1&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
      _c("b-card", [
        _c("div", { staticClass: "content" }, [
          _c("div", { staticClass: "content-detail-content-info" }, [
            _c("div", { staticClass: "content-detail-content-info-left" }, [
              _c("img", {
                attrs: {
                  src: _vm.user_img,
                  alt: "",
                  width: "50px",
                  height: "50px"
                }
              }),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "content-detail-content-info-left-number" },
                [_vm._v(_vm._s(_vm.user_name))]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "content-detail-content" }, [
            _vm._v(_vm._s(_vm.context))
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "content" }, [
          _c("div", { staticClass: "content-detail-content-info" }, [
            _c("div", { staticClass: "content-detail-content-info-left" }, [
              _c("img", {
                attrs: {
                  src: _vm.user_img,
                  alt: "",
                  width: "50px",
                  height: "50px"
                }
              }),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "content-detail-content-info-left-number" },
                [_vm._v(_vm._s(_vm.expert_name))]
              )
            ])
          ]),
          _vm._v(" "),
          _vm.reply_context == null
            ? _c("div", { staticClass: "content-detail-content" }, [
                _vm._v("아직 피드백이 작성되지 않았습니다.")
              ])
            : _c("div", { staticClass: "content-detail-content" }, [
                _vm._v(_vm._s(_vm.reply_context))
              ])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Advice/AdviceDetail.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/Advice/AdviceDetail.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdviceDetail_vue_vue_type_template_id_346519f1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdviceDetail.vue?vue&type=template&id=346519f1&scoped=true& */ "./resources/js/views/Advice/AdviceDetail.vue?vue&type=template&id=346519f1&scoped=true&");
/* harmony import */ var _AdviceDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdviceDetail.vue?vue&type=script&lang=js& */ "./resources/js/views/Advice/AdviceDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AdviceDetail_vue_vue_type_style_index_0_id_346519f1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AdviceDetail.vue?vue&type=style&index=0&id=346519f1&scoped=true&lang=css& */ "./resources/js/views/Advice/AdviceDetail.vue?vue&type=style&index=0&id=346519f1&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AdviceDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdviceDetail_vue_vue_type_template_id_346519f1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AdviceDetail_vue_vue_type_template_id_346519f1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "346519f1",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Advice/AdviceDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Advice/AdviceDetail.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/Advice/AdviceDetail.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdviceDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdviceDetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Advice/AdviceDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdviceDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Advice/AdviceDetail.vue?vue&type=style&index=0&id=346519f1&scoped=true&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/views/Advice/AdviceDetail.vue?vue&type=style&index=0&id=346519f1&scoped=true&lang=css& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdviceDetail_vue_vue_type_style_index_0_id_346519f1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdviceDetail.vue?vue&type=style&index=0&id=346519f1&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Advice/AdviceDetail.vue?vue&type=style&index=0&id=346519f1&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdviceDetail_vue_vue_type_style_index_0_id_346519f1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdviceDetail_vue_vue_type_style_index_0_id_346519f1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdviceDetail_vue_vue_type_style_index_0_id_346519f1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdviceDetail_vue_vue_type_style_index_0_id_346519f1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdviceDetail_vue_vue_type_style_index_0_id_346519f1_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/Advice/AdviceDetail.vue?vue&type=template&id=346519f1&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/views/Advice/AdviceDetail.vue?vue&type=template&id=346519f1&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdviceDetail_vue_vue_type_template_id_346519f1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AdviceDetail.vue?vue&type=template&id=346519f1&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Advice/AdviceDetail.vue?vue&type=template&id=346519f1&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdviceDetail_vue_vue_type_template_id_346519f1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdviceDetail_vue_vue_type_template_id_346519f1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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