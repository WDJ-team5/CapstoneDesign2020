(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

<<<<<<< HEAD
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/lecture/LecturePlay.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/lecture/LecturePlay.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/UserList.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/UserList.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
>>>>>>> 28787231d61bee42b35ef4ff2346b5afa2fed6b3
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_lecture_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/lecture_service */ "./resources/js/services/lecture_service.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

=======
>>>>>>> 28787231d61bee42b35ef4ff2346b5afa2fed6b3
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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


=======
>>>>>>> 28787231d61bee42b35ef4ff2346b5afa2fed6b3
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "LecturePlay",
  data: function data() {
<<<<<<< HEAD
    var lectureId = Number(this.$route.params.id);

    var cal = __webpack_require__(/*! ../../../../public/js/calculation.js */ "./public/js/calculation.js");

    return {
      id: lectureId,
      filename: '',
      video: '',
      videoData: null,
      webcam: '',
      modalDisplay: 'none',
      videoControls: false,
      ready: true,
      net: null,
      started: false,
      startTime: null,
      danceData: [],
      totalScore: 0,
      finalCount: 0,
      loop: null,
      cal: cal,
      finalScore: 0,
      ended: false // data:{
      //     'title' => '매우쉬운 아이돌 댄스',
      //     'content' => '이거슨 쉬운 아이돌 댄스입니다잉',
      //     'video' => 'sample',
      //     'image' => 'LectureImg/01.jpg',
      //     'genre_id' => 1,
      //     'level_id' => 1,
      // }

    };
  },
  mounted: function mounted() {
    var _this = this;

    var constraints = window.constraints = {
      audio: false,
      video: true
    };
    navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
      _this.$refs.webcam.srcObject = stream;
    })["catch"](function (error) {
      alert("웹캠을 인식할 수 없어용~!");
    });
    this.loadLectureData();
  },
  computed: {
    computedDisplay: function computedDisplay() {
      return this.modalDisplay;
    },
    computedVideoControls: function computedVideoControls() {
      return this.videoControls;
    },
    computedModeChangeHtml: function computedModeChangeHtml() {
      if (this.videoControls) return "테스트";else return "미리보기";
    },
    computedFinalScore: function computedFinalScore() {
      return this.finalScore;
    }
  },
  methods: {
    loadLectureData: function () {
      var _loadLectureData = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this2 = this;

        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _services_lecture_service__WEBPACK_IMPORTED_MODULE_1__["loadLectureData"](this.id);

              case 3:
                response = _context.sent;
                this.filename = response.data.video;
                this.video = "videos/" + this.filename + ".mp4";
                axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("videoDatas/" + this.filename + ".json").then(function (response) {
                  return _this2.videoData = response.data;
                });
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                console.error(_context.t0);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 9]]);
      }));

      function loadLectureData() {
        return _loadLectureData.apply(this, arguments);
      }

      return loadLectureData;
    }(),
    modalChange: function modalChange() {
      if (this.modalDisplay == 'none') {
        this.modalDisplay = 'block';
      } else {
        this.modalDisplay = 'none';
      }
    },
    modeChange: function modeChange() {
      this.videoControls = !this.videoControls;
      this.ready = !this.ready;
      this.$refs.video.currentTime = 0;
      this.$refs.video.pause();
    },
    bindPage: function () {
      var _bindPage = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return posenet.load();

              case 2:
                this.net = _context2.sent;
                this.webcamReady();

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function bindPage() {
        return _bindPage.apply(this, arguments);
      }

      return bindPage;
    }(),
    webcamReady: function () {
      var _webcamReady = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var pose, poses, motionCircle, d, score, cnt, tmp, time, _d, timing, key;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.net.dispose();
                _context3.next = 3;
                return posenet.load();

              case 3:
                this.net = _context3.sent;
                _context3.next = 6;
                return this.net.estimateSinglePose(this.$refs.webcam);

              case 6:
                pose = _context3.sent;
                poses = this.cal.getData(pose);
                motionCircle = [-51.47224073047192, -130.79577367522916, -134.99166049100938, -53.90398220226736];

                if (!this.start && this.ready && poses.leftUpperarm < motionCircle[0] + 20 && poses.leftUpperarm > motionCircle[0] - 20 && poses.leftForearm < motionCircle[1] + 20 && poses.leftForearm > motionCircle[1] - 20 && poses.rightUpperarm < motionCircle[2] + 20 && poses.rightUpperarm > motionCircle[2] - 20 && poses.rightForearm < motionCircle[3] + 20 && poses.rightForearm > motionCircle[3] - 20) {
                  this.start = true;
                  d = new Date();
                  this.startTime = d.getTime();
                  this.$refs.video.play();
                }

                if (this.start) {
                  score = 0;
                  cnt = 0;
                  tmp = 0;
                  time = 0;
                  _d = new Date();
                  time = _d.getTime() - this.startTime;
                  timing = Math.round(time / 200);

                  if (timing >= this.videoData.length) {
                    timing = this.videoData.length - 1;
                  }

                  for (key in poses) {
                    if (Math.abs(poses[key]) != 180 && poses[key] != 0) {
                      tmp = 100 - this.cal.distance(poses[key], this.videoData[timing][key]) / 180 * 100;
                      if (tmp < 0) tmp = 0;
                      score += tmp;
                      cnt++;
                    }
                  }

                  this.danceData.push({
                    time: time,
                    'score': tmp
                  });
                  tmp = 0;

                  if (cnt != 0) {
                    tmp = 0;
                    if (score != 0) tmp = score / cnt;
                    this.totalScore += tmp;
                    this.finalCount += 1;
                  }

                  console.log(tmp + "%");
                }

                if (!this.ended) this.loop = window.requestAnimationFrame(this.webcamReady);

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function webcamReady() {
        return _webcamReady.apply(this, arguments);
      }

      return webcamReady;
    }(),
    endedVideo: function endedVideo() {
      if (this.start) {
        var tmp = this.totalScore / this.finalCount;
        this.finalScore = tmp.toFixed(2) + "%";
        this.ended = true;
        window.cancelAnimationFrame(this.loop);
        this.modalChange();
      }
    }
=======
    return {
      selected: 'radio1',
      options: [{
        text: '일반회원',
        value: 'user'
      }, {
        text: '기업회원',
        value: 'company_user'
      }],
      items: [{
        No: 40,
        이름: '좡성현',
        허가여부: 'Y',
        랭크: 'A',
        등급: '연습생',
        수정하기: ''
      }, {
        No: 21,
        이름: '즈앙성혀언',
        허가여부: 'Y',
        랭크: 'A',
        등급: '연습생',
        수정하기: ''
      }, {
        No: 89,
        이름: '즈앙서엉혀언',
        허가여부: 'N',
        랭크: 'A',
        등급: '연습생',
        수정하기: ''
      }, {
        No: 38,
        이름: '즈앙스엉히으언',
        허가여부: 'N',
        랭크: 'A',
        등급: '연습생',
        수정하기: ''
      }]
    };
>>>>>>> 28787231d61bee42b35ef4ff2346b5afa2fed6b3
  }
});

/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/lecture/LecturePlay.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/lecture/LecturePlay.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/UserList.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/UserList.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
>>>>>>> 28787231d61bee42b35ef4ff2346b5afa2fed6b3
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
<<<<<<< HEAD
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* html, body {\n    overflow: hidden;\n    width:100%;\n    height: 100%;\n    margin: 0;\n    z-index: 1000000;\n} */\n#container{\n    width: 100%;\n    height: 100%;\n}\n#canvas{\n    position:relative;\n}\n#webCam{\n    position: fixed;\n    right:0;\n    top:0;\n    width:25%;\n    height:40%;\n    background-color: black;\n    transform: rotateY(180deg);\n    -webkit-transform:rotateY(180deg);\n    -moz-transform:rotateY(180deg);\n    z-index: 100000;\n}\n#source-video{\n    position: fixed;\n    left:0;\n    top:0;\n    width:75%;\n    height:100%;\n    background-color: black;\n    z-index: 100000;\n}\n/* #canvas{ */\n#pannel{\n    position: fixed;\n    right: 0;\n    bottom: 0;\n    width: 25%;\n    height: 60%;\n    background: brown;\n}\n#preview_btn{\n    position: absolute;\n    bottom:10px;\n    left:20px;\n}\n#end_btn{\n    position: absolute;\n    bottom:10px;\n    right: 20px;\n}\n#modal{\n    position:relative;\n    width: 100%;\n    height: 100%;\n    z-index:100001;\n    display: none;\n}\n#modal h2{\n    margin:0;\n}\n#modal button{\n    display:inline-block;\n    width:100px;\n    margin-left:calc(100% - 100px - 10px);\n}\n#modal .modal_content{\n    position: relative;\n    width:300px;\n    margin:100px auto;\n    padding:20px 10px;\n    background: #fff;\n    border:2px solid #666;\n}\n#modal .modal_layer{\n    position: fixed;\n    top:0;\n    left:0;\n    width:100%;\n    height:100%;\n    background:rgba(0, 0, 0, 0.5);\n    z-index: -1;\n}\n", ""]);
=======
exports.push([module.i, "\n#list_container{\n    margin-top: 2%;\n}\n#button_area{\n    float: left;\n    margin-left: 1%;\n}\n", ""]);
>>>>>>> 28787231d61bee42b35ef4ff2346b5afa2fed6b3

// exports


/***/ }),

<<<<<<< HEAD
/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/lecture/LecturePlay.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/lecture/LecturePlay.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/UserList.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/UserList.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
>>>>>>> 28787231d61bee42b35ef4ff2346b5afa2fed6b3
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


<<<<<<< HEAD
var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./LecturePlay.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/lecture/LecturePlay.vue?vue&type=style&index=0&lang=css&");
=======
var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./UserList.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/UserList.vue?vue&type=style&index=0&lang=css&");
>>>>>>> 28787231d61bee42b35ef4ff2346b5afa2fed6b3

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

<<<<<<< HEAD
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/lecture/LecturePlay.vue?vue&type=template&id=1f05c8f2&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/lecture/LecturePlay.vue?vue&type=template&id=1f05c8f2& ***!
  \*****************************************************************************************************************************************************************************************************************/
=======
/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/UserList.vue?vue&type=template&id=6d878aa8&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/UserList.vue?vue&type=template&id=6d878aa8& ***!
  \******************************************************************************************************************************************************************************************************/
>>>>>>> 28787231d61bee42b35ef4ff2346b5afa2fed6b3
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
  return _c("div", { attrs: { id: "container" } }, [
    _c("video", {
      ref: "video",
      staticStyle: {
        "-moz-transform": "scaleX(1)",
        "-o-transform": "scaleX(1)",
        "-webkit-transform": "scaleX(1)",
        transform: "scaleX(1)"
      },
      attrs: {
        id: "source-video",
        src: _vm.video,
        controls: _vm.computedVideoControls,
        crossorigin: "anonymous"
      },
      on: {
        ended: function($event) {
          return _vm.endedVideo()
        }
      }
    }),
    _vm._v(" "),
    _c("video", {
      ref: "webcam",
      attrs: { id: "webCam", width: "800", height: "600", autoplay: "" },
      on: {
        play: function($event) {
          return _vm.bindPage()
        }
      }
    }),
    _vm._v(" "),
=======
  return _c("div", { attrs: { id: "list_container" } }, [
>>>>>>> 28787231d61bee42b35ef4ff2346b5afa2fed6b3
    _c(
      "div",
      { attrs: { id: "pannel" } },
      [
<<<<<<< HEAD
        _c(
          "button",
          {
            attrs: { id: "preview_btn", type: "button" },
            on: {
              click: function($event) {
                return _vm.modeChange()
              }
            }
          },
          [_vm._v(_vm._s(_vm.computedModeChangeHtml))]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            attrs: { id: "modal_open_btn", type: "button" },
            on: {
              click: function($event) {
                return _vm.modalChange()
              }
            }
          },
          [_vm._v("모달테스트")]
        ),
        _vm._v(" "),
        _c(
          "router-link",
          { staticClass: "nav-link", attrs: { to: "/lecture", exact: "" } },
          [
            _c("i", { staticClass: "fas fa-fw fa-tachometer-alt" }),
            _vm._v(" "),
            _c("button", { attrs: { id: "end_btn" } }, [_vm._v("끝내기")])
          ]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { style: { display: _vm.computedDisplay }, attrs: { id: "modal" } },
      [
        _c(
          "div",
          { staticClass: "modal_content" },
          [
            _c("h2", [_vm._v("모달 창")]),
            _vm._v(" "),
            _c("p", [_vm._v(_vm._s(_vm.computedFinalScore))]),
            _vm._v(" "),
            _c(
              "button",
              {
                attrs: { type: "button", id: "replay_btn" },
                on: {
                  click: function($event) {
                    return _vm.modalChange()
                  }
                }
=======
        _c(
          "b-form-group",
          [
            _c("b-form-radio-group", {
              attrs: {
                id: "btn-radios-2",
                options: _vm.options,
                buttons: "",
                "button-variant": "outline-primary",
                size: "lg",
                name: "radio-btn-outline"
>>>>>>> 28787231d61bee42b35ef4ff2346b5afa2fed6b3
              },
              [_vm._v("다시하기")]
            ),
            _vm._v(" "),
            _c(
              "router-link",
              { staticClass: "nav-link", attrs: { to: "/lecture", exact: "" } },
              [
                _c("i", { staticClass: "fas fa-fw fa-tachometer-alt" }),
                _vm._v(" "),
                _c("button", { attrs: { id: "end_btn" } }, [_vm._v("끝내기")])
              ]
            )
          ],
          1
<<<<<<< HEAD
        ),
        _vm._v(" "),
        _c("div", { staticClass: "modal_layer" })
      ]
=======
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { attrs: { id: "user_area" } },
      [_c("b-table", { attrs: { striped: "", hover: "", items: _vm.items } })],
      1
>>>>>>> 28787231d61bee42b35ef4ff2346b5afa2fed6b3
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

<<<<<<< HEAD
/***/ "./public/js/calculation.js":
/*!**********************************!*\
  !*** ./public/js/calculation.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//var require = function(path)
exports.distance = function (i, j) {
  return Math.abs(Math.abs(i) - Math.abs(j));
};

exports.getData = function (pose) {
  function getAngle(x1, y1, x2, y2) {
    var rad = Math.atan2(y2 - y1, x2 - x1);
    return rad * 180 / Math.PI;
  }

  var _iterator = _createForOfIteratorHelper(pose.keypoints),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var i = _step.value;

      if (i.score < 0.499) {
        i.position.x, i.position.y = 0;
      }
    } //  console.log(getAngle(pose.keypoints[5].position.x, pose.keypoints[5].position.y, pose.keypoints[6].position.x, pose.keypoints[6].position.y));

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  back = {}; // 어깨  

  back.shoulder = getAngle(pose.keypoints[5].position.x, pose.keypoints[5].position.y, pose.keypoints[6].position.x, pose.keypoints[6].position.y); // 안쪽 왼팔

  back.leftUpperarm = getAngle(pose.keypoints[5].position.x, pose.keypoints[5].position.y, pose.keypoints[7].position.x, pose.keypoints[7].position.y); // 바깥쪽 왼팔

  back.leftForearm = getAngle(pose.keypoints[7].position.x, pose.keypoints[7].position.y, pose.keypoints[9].position.x, pose.keypoints[9].position.y); // 안쪽 오른팔

  back.rightUpperarm = getAngle(pose.keypoints[6].position.x, pose.keypoints[6].position.y, pose.keypoints[8].position.x, pose.keypoints[8].position.y); // 바깥쪽 오른팔

  back.rightForearm = getAngle(pose.keypoints[8].position.x, pose.keypoints[8].position.y, pose.keypoints[10].position.x, pose.keypoints[10].position.y); // 왼쪽 몸뚱아리

  back.leftTrunk = getAngle(pose.keypoints[5].position.x, pose.keypoints[5].position.y, pose.keypoints[11].position.x, pose.keypoints[11].position.y); // 오른쪽 몸뚱아리

  back.rightTrunk = getAngle(pose.keypoints[6].position.x, pose.keypoints[6].position.y, pose.keypoints[12].position.x, pose.keypoints[12].position.y); // 엉덩이

  back.hip = getAngle(pose.keypoints[11].position.x, pose.keypoints[11].position.y, pose.keypoints[12].position.x, pose.keypoints[12].position.y); // 왼쪽 허벅지

  back.leftThigh = getAngle(pose.keypoints[11].position.x, pose.keypoints[11].position.y, pose.keypoints[13].position.x, pose.keypoints[13].position.y); // 왼쪽 종아리

  back.leftShin = getAngle(pose.keypoints[13].position.x, pose.keypoints[13].position.y, pose.keypoints[15].position.x, pose.keypoints[15].position.y); // 오른쪽 허벅지

  back.rightThigh = getAngle(pose.keypoints[12].position.x, pose.keypoints[12].position.y, pose.keypoints[14].position.x, pose.keypoints[14].position.y); // 오른쪽 종아리 

  back.rightShin = getAngle(pose.keypoints[14].position.x, pose.keypoints[14].position.y, pose.keypoints[16].position.x, pose.keypoints[16].position.y);
  return back;
};

/***/ }),

/***/ "./resources/js/services/lecture_service.js":
/*!**************************************************!*\
  !*** ./resources/js/services/lecture_service.js ***!
  \**************************************************/
/*! exports provided: loadLecture, loadLectureData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadLecture", function() { return loadLecture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadLectureData", function() { return loadLectureData; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service */ "./resources/js/services/http_service.js");
 // 댄스강좌 리스트 로드

function loadLecture() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/lecture');
} // 댄스강좌 하나 로드

function loadLectureData(data) {
  var anything = "/lecture/" + data;
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get(anything);
}

/***/ }),

/***/ "./resources/js/views/lecture/LecturePlay.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/lecture/LecturePlay.vue ***!
  \****************************************************/
=======
/***/ "./resources/js/views/UserList.vue":
/*!*****************************************!*\
  !*** ./resources/js/views/UserList.vue ***!
  \*****************************************/
>>>>>>> 28787231d61bee42b35ef4ff2346b5afa2fed6b3
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _LecturePlay_vue_vue_type_template_id_1f05c8f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LecturePlay.vue?vue&type=template&id=1f05c8f2& */ "./resources/js/views/lecture/LecturePlay.vue?vue&type=template&id=1f05c8f2&");
/* harmony import */ var _LecturePlay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LecturePlay.vue?vue&type=script&lang=js& */ "./resources/js/views/lecture/LecturePlay.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _LecturePlay_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LecturePlay.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/lecture/LecturePlay.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
=======
/* harmony import */ var _UserList_vue_vue_type_template_id_6d878aa8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserList.vue?vue&type=template&id=6d878aa8& */ "./resources/js/views/UserList.vue?vue&type=template&id=6d878aa8&");
/* harmony import */ var _UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserList.vue?vue&type=script&lang=js& */ "./resources/js/views/UserList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _UserList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserList.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/UserList.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
>>>>>>> 28787231d61bee42b35ef4ff2346b5afa2fed6b3






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
<<<<<<< HEAD
  _LecturePlay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LecturePlay_vue_vue_type_template_id_1f05c8f2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LecturePlay_vue_vue_type_template_id_1f05c8f2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
=======
  _UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserList_vue_vue_type_template_id_6d878aa8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserList_vue_vue_type_template_id_6d878aa8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
>>>>>>> 28787231d61bee42b35ef4ff2346b5afa2fed6b3
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
<<<<<<< HEAD
component.options.__file = "resources/js/views/lecture/LecturePlay.vue"
=======
component.options.__file = "resources/js/views/UserList.vue"
>>>>>>> 28787231d61bee42b35ef4ff2346b5afa2fed6b3
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

<<<<<<< HEAD
/***/ "./resources/js/views/lecture/LecturePlay.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/lecture/LecturePlay.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
=======
/***/ "./resources/js/views/UserList.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/views/UserList.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
>>>>>>> 28787231d61bee42b35ef4ff2346b5afa2fed6b3
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LecturePlay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./LecturePlay.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/lecture/LecturePlay.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LecturePlay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/lecture/LecturePlay.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/lecture/LecturePlay.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************/
=======
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./UserList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/UserList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/UserList.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/UserList.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************/
>>>>>>> 28787231d61bee42b35ef4ff2346b5afa2fed6b3
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LecturePlay_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./LecturePlay.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/lecture/LecturePlay.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LecturePlay_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LecturePlay_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LecturePlay_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LecturePlay_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LecturePlay_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/lecture/LecturePlay.vue?vue&type=template&id=1f05c8f2&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/lecture/LecturePlay.vue?vue&type=template&id=1f05c8f2& ***!
  \***********************************************************************************/
=======
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./UserList.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/UserList.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/UserList.vue?vue&type=template&id=6d878aa8&":
/*!************************************************************************!*\
  !*** ./resources/js/views/UserList.vue?vue&type=template&id=6d878aa8& ***!
  \************************************************************************/
>>>>>>> 28787231d61bee42b35ef4ff2346b5afa2fed6b3
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
<<<<<<< HEAD
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LecturePlay_vue_vue_type_template_id_1f05c8f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./LecturePlay.vue?vue&type=template&id=1f05c8f2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/lecture/LecturePlay.vue?vue&type=template&id=1f05c8f2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LecturePlay_vue_vue_type_template_id_1f05c8f2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LecturePlay_vue_vue_type_template_id_1f05c8f2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
=======
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_template_id_6d878aa8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./UserList.vue?vue&type=template&id=6d878aa8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/UserList.vue?vue&type=template&id=6d878aa8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_template_id_6d878aa8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_template_id_6d878aa8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
>>>>>>> 28787231d61bee42b35ef4ff2346b5afa2fed6b3



/***/ })

}]);