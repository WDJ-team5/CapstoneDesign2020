(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AuditionDetail.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AuditionDetail.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import data from "@/data";
// import videojs from 'video.js';
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ContentDetail",
  data: function (_data) {
    function data() {
      return _data.apply(this, arguments);
    }

    data.toString = function () {
      return _data.toString();
    };

    return data;
  }(function () {
    var contentId = Number(this.$route.params.contentId); // params로 받은 게시글 아이디를 저장
    // const contentData = data.Content.filter(item => item.content_id === contentId)[0]
    // 현재 게시글에 해당하는 데이터를 가져옴

    return {
      contentId: contentId,
      title: contentData.title,
      context: contentData.context,
      date: contentData.date,
      rank: contentData.rank,
      sub_image: contentData.sub_image,
      video: contentData.video,
      user: data.User.filter(function (item) {
        return item.user_id === contentData.user_id;
      })[0].name,
      // 현재 contentData와 일치하는 유저 객체를 가져와서 해당 객체의 name속성을 가져옴
      created: contentData.created_at,
      images: ['https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260']
    };
  }),
  methods: {
    // 삭제를 수행하는 함수
    deleteData: function deleteData() {
      var _this = this;

      var content_index = data.Content.findIndex(function (item) {
        return item.content_id === _this.contentId;
      }); // findIndex: 조건이 만족할 경우 index를 반환해줌

      data.Content.splice(content_index, 1); // 데이터 삭제 수행

      this.$router.push({
        path: '/board/free'
      });
    },
    // 수정을 수행하는 함수
    updateData: function updateData() {
      this.$router.push({
        path: "/board/free/create/".concat(this.contentId)
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AuditionDetail.vue?vue&type=style&index=0&id=2d18bd29&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AuditionDetail.vue?vue&type=style&index=0&id=2d18bd29&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#text_area[data-v-2d18bd29]{\r\n  width: 900px;\r\n  height: 600px;\r\n  border: 1px solid #ced4da;\r\n  margin-left: 700px;\r\n  margin-top: 40px;\n}\n#sub_image[data-v-2d18bd29]{\r\n  width: 600px;\r\n  height: 600px;\r\n  margin-left: 30px;\r\n  float: left;\n}\n.content-detail-content-info[data-v-2d18bd29] {\r\n  border: 1px solid #ced4da;\r\n  display: flex;\r\n  justify-content: space-between;\n}\n.content-detail-content-info-left[data-v-2d18bd29] {\r\n  width: 1420px;\r\n  /* display: flex;\r\n  flex-direction: row; */\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 1rem;\n}\n.content-detail-content-info-right[data-v-2d18bd29] {\r\n  width: 300px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 1rem;\n}\n.content-detail-content[data-v-2d18bd29] {\r\n  border: 1px solid #ced4da;\r\n  margin-top: 1rem;\r\n  padding-top: 1rem;\r\n  min-height: 700px;\n}\n.content-detail-button[data-v-2d18bd29] {\r\n  margin-top: 1rem;\r\n  padding: 2rem;\n}\n.content-detail-comment[data-v-2d18bd29] {\r\n  border: 1px solid #ced4da;\r\n  margin-top: 1rem;\r\n  padding: 2rem;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AuditionDetail.vue?vue&type=style&index=0&id=2d18bd29&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AuditionDetail.vue?vue&type=style&index=0&id=2d18bd29&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./AuditionDetail.vue?vue&type=style&index=0&id=2d18bd29&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AuditionDetail.vue?vue&type=style&index=0&id=2d18bd29&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AuditionDetail.vue?vue&type=template&id=2d18bd29&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/AuditionDetail.vue?vue&type=template&id=2d18bd29&scoped=true& ***!
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
    { attrs: { id: "content" } },
    [
      _c("b-card", [
        _c("div", { staticClass: "content-detail-content-info" }, [
          _c("div", { staticClass: "content-detail-content-info-left" }, [
            _c("h1", [_vm._v(_vm._s(_vm.contentId) + "아이디 입니다.")]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "content-detail-content-info-left-subject",
                staticStyle: { "margin-left": "200px" }
              },
              [_c("h1", [_vm._v(_vm._s(_vm.title))])]
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
                      _vm._v(_vm._s(_vm.date))
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c("b-button", { attrs: { variant: "warning" } }, [
                  _vm._v(
                    "\n            랭크: " + _vm._s(_vm.rank) + "\n          "
                  )
                ])
              ],
              1
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "content-detail-content" }, [
          _c("div", [
            _c("img", { attrs: { id: "sub_image", src: _vm.sub_image } }),
            _vm._v(" "),
            _c(
              "div",
              { attrs: { id: "text_area" } },
              [
                _c("h1", [_vm._v("영상과제")]),
                _vm._v(" "),
                _c("b-embed", {
                  attrs: {
                    type: "iframe",
                    aspect: "16by9",
                    src: _vm.video,
                    allowfullscreen: ""
                  }
                })
              ],
              1
            )
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "content-detail-button" },
          [
            _c(
              "b-button",
              { attrs: { variant: "primary" }, on: { click: _vm.updateData } },
              [_vm._v("수정")]
            ),
            _vm._v(" "),
            _c(
              "b-button",
              { attrs: { variant: "danger" }, on: { click: _vm.deleteData } },
              [_vm._v("삭제")]
            )
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/AuditionDetail.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/AuditionDetail.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AuditionDetail_vue_vue_type_template_id_2d18bd29_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuditionDetail.vue?vue&type=template&id=2d18bd29&scoped=true& */ "./resources/js/components/AuditionDetail.vue?vue&type=template&id=2d18bd29&scoped=true&");
/* harmony import */ var _AuditionDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuditionDetail.vue?vue&type=script&lang=js& */ "./resources/js/components/AuditionDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AuditionDetail_vue_vue_type_style_index_0_id_2d18bd29_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AuditionDetail.vue?vue&type=style&index=0&id=2d18bd29&scoped=true&lang=css& */ "./resources/js/components/AuditionDetail.vue?vue&type=style&index=0&id=2d18bd29&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AuditionDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AuditionDetail_vue_vue_type_template_id_2d18bd29_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AuditionDetail_vue_vue_type_template_id_2d18bd29_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2d18bd29",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/AuditionDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/AuditionDetail.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/AuditionDetail.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuditionDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AuditionDetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AuditionDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuditionDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/AuditionDetail.vue?vue&type=style&index=0&id=2d18bd29&scoped=true&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/AuditionDetail.vue?vue&type=style&index=0&id=2d18bd29&scoped=true&lang=css& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuditionDetail_vue_vue_type_style_index_0_id_2d18bd29_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./AuditionDetail.vue?vue&type=style&index=0&id=2d18bd29&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AuditionDetail.vue?vue&type=style&index=0&id=2d18bd29&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuditionDetail_vue_vue_type_style_index_0_id_2d18bd29_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuditionDetail_vue_vue_type_style_index_0_id_2d18bd29_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuditionDetail_vue_vue_type_style_index_0_id_2d18bd29_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuditionDetail_vue_vue_type_style_index_0_id_2d18bd29_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuditionDetail_vue_vue_type_style_index_0_id_2d18bd29_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/AuditionDetail.vue?vue&type=template&id=2d18bd29&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/AuditionDetail.vue?vue&type=template&id=2d18bd29&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuditionDetail_vue_vue_type_template_id_2d18bd29_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AuditionDetail.vue?vue&type=template&id=2d18bd29&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/AuditionDetail.vue?vue&type=template&id=2d18bd29&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuditionDetail_vue_vue_type_template_id_2d18bd29_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuditionDetail_vue_vue_type_template_id_2d18bd29_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);