(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/lecture/LecturePlay.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/lecture/LecturePlay.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_lecture_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/lecture_service */ "./resources/js/services/lecture_service.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);


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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "LecturePlay",
  data: function data() {
    var lectureId = Number(this.$route.params.id);

    var cal = __webpack_require__(/*! ../../../../public/js/calculation.js */ "./public/js/calculation.js");

    return {
      id: lectureId,
      filename: "",
      video: "",
      videoData: null,
      data: null,
      webcam: "",
      modalDisplay: "none",
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
      ended: false,
      ctx: null,
      canvas: null,
      poses: [] // data:{
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
      if (this.modalDisplay == "none") {
        this.modalDisplay = "block";
      } else {
        this.modalDisplay = "none";
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
        var canvas, ctx;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return posenet.load();

              case 2:
                this.net = _context2.sent;
                canvas = document.getElementById('canvas');
                ctx = canvas.getContext('2d');
                this.canvas = canvas;
                this.ctx = ctx;
                this.webcamReady();

              case 8:
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
        var pose, data, motionCircle, d, score, cnt, tmp, time, _d, timing, key;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.net.dispose();
                _context3.next = 3;
                return posenet.load({
                  architecture: 'MobileNetV1',
                  outputStride: 16,
                  inputResolution: {
                    width: 640,
                    height: 480
                  },
                  multiplier: 0.75
                });

              case 3:
                this.net = _context3.sent;
                _context3.next = 6;
                return this.net.estimateSinglePose(this.$refs.webcam);

              case 6:
                pose = _context3.sent;
                data = this.cal.getData(pose);
                this.poses.push(pose);
                motionCircle = [-51.47224073047192, -130.79577367522916, -134.99166049100938, -53.90398220226736];

                if (!this.start && this.ready && data.leftUpperarm < motionCircle[0] + 20 && data.leftUpperarm > motionCircle[0] - 20 && data.leftForearm < motionCircle[1] + 20 && data.leftForearm > motionCircle[1] - 20 && data.rightUpperarm < motionCircle[2] + 20 && data.rightUpperarm > motionCircle[2] - 20 && data.rightForearm < motionCircle[3] + 20 && data.rightForearm > motionCircle[3] - 20) {
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

                  for (key in data) {
                    if (Math.abs(data[key]) != 180 && data[key] != 0) {
                      tmp = 100 - this.cal.distance(data[key], this.videoData[timing][key]) / 180 * 100;
                      if (tmp < 0) tmp = 0;
                      score += tmp;
                      cnt++;
                    }
                  }

                  this.danceData.push({
                    time: time,
                    score: tmp
                  });
                  tmp = 0;

                  if (cnt != 0) {
                    tmp = 0;
                    if (score != 0) tmp = score / cnt;
                    this.totalScore += tmp;
                    this.finalCount += 1;
                  }

                  console.log(tmp + "%");
                } else {
                  console.log('asdf');
                  this.draw(pose);
                }

                if (!this.ended) this.loop = window.requestAnimationFrame(this.webcamReady);

              case 13:
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
    saveVideo: function saveVideo() {
      var canvas = document.createElement('canvas');
    },
    endedVideo: function () {
      var _endedVideo = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var tmp, formData, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!this.start) {
                  _context4.next = 21;
                  break;
                }

                tmp = this.totalScore / this.finalCount;
                this.finalScore = Math.round(tmp * 100) / 100;
                this.ended = true; // console.log(this.finalScore);

                formData = new FormData();
                formData.append("accuracy", this.finalScore);
                formData.append("lecture_id", this.id); // console.log(...formData);

                this.finalScore = tmp.toFixed(2) + "%";
                window.cancelAnimationFrame(this.loop);
                this.modalChange();
                _context4.prev = 10;
                _context4.next = 13;
                return _services_lecture_service__WEBPACK_IMPORTED_MODULE_1__["createScore"](formData);

              case 13:
                res = _context4.sent;
                console.log(res);
                console.log("플레이 데이터 저장 성공");
                _context4.next = 21;
                break;

              case 18:
                _context4.prev = 18;
                _context4.t0 = _context4["catch"](10);
                console.log(_context4.t0);

              case 21:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[10, 18]]);
      }));

      function endedVideo() {
        return _endedVideo.apply(this, arguments);
      }

      return endedVideo;
    }(),
    draw: function draw(pose) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      var points = pose.keypoints;

      for (var key = 0; key < points.length; key++) {
        if (points[key].score > 0.6) {
          this.ctx.beginPath();
          this.ctx.arc(points[key].position.x, points[key].position.y, 10, 0, Math.PI * 2);
          this.ctx.fill();
          this.ctx.stroke();
          this.ctx.closePath();
        }
      }

      this.ctx.fillStyle = "#0095DD";
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/lecture/LecturePlay.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/lecture/LecturePlay.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n/* html, body {\r\n        overflow: hidden;\r\n        width:100%;\r\n        height: 100%;\r\n        margin: 0;\r\n        z-index: 1000000;\r\n    } */\n#container {\r\n  width: 100%;\r\n  height: 100%;\n}\n#webCam {\r\n  position: fixed;\r\n  right: 0;\r\n  top: 0;\r\n  width: 25%;\r\n  height: 40%;\r\n  background-color: black;\r\n  transform: rotateY(180deg);\r\n  -webkit-transform: rotateY(180deg);\r\n  -moz-transform: rotateY(180deg);\r\n  z-index: 100000;\n}\n#source-video {\r\n  position: fixed;\r\n  left: 0;\r\n  top: 0;\r\n  width: 75%;\r\n  height: 100%;\r\n  background-color: black;\r\n  z-index: 100000;\n}\r\n/* #canvas{ */\n#pannel {\r\n  position: fixed;\r\n  right: 0;\r\n  bottom: 0;\r\n  width: 25%;\r\n  height: 60%;\r\n  background: brown;\n}\n#preview_btn {\r\n  position: absolute;\r\n  bottom: 10px;\r\n  left: 20px;\r\n  width: 120px;\r\n  height: 50px;\n}\n#end_btn {\r\n  position: absolute;\r\n  bottom: 10px;\r\n  right: 20px;\r\n  width: 120px;\r\n  height: 50px;\n}\n#modal {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 100001;\r\n  display: none;\n}\n#modal h2 {\r\n  margin: 0;\n}\n#modal button {\r\n  display: inline-block;\r\n  width: 100px;\r\n  margin-left: calc(100% - 100px - 10px);\n}\n#modal .modal_content {\r\n  position: relative;\r\n  width: 300px;\r\n  margin: 100px auto;\r\n  padding: 20px 10px;\r\n  background: #fff;\r\n  border: 2px solid #666;\n}\n#modal .modal_layer {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgba(0, 0, 0, 0.5);\r\n  z-index: -1;\n}\ncanvas{\r\n  position: fixed;\r\n  right: 0;\r\n  top: 0;\r\n  width: 25%;\r\n  height: 40%;\r\n  border: 1px solid;\r\n  transform: rotateY(180deg);\r\n  -webkit-transform: rotateY(180deg);\r\n  -moz-transform: rotateY(180deg);\r\n  z-index: 100001;\n}\nbody .btn-bg {\r\n  width: 100%;\r\n  height: 50vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\n}\nbody .btn-bg.bg-1 {\r\n  background: #6ab1c9;\n}\nbody .btn-bg.bg-1 .btn-1 button {\r\n  color: #c7f8f9;\r\n  background: transparent;\r\n  border: 3px solid #c7f8f9;\r\n  border-radius: 5px;\r\n  transition: all 0.5s ease;\r\n  transform: translate(0, 0);\n}\nbody .btn-bg.bg-1 .btn-1 button a {\r\n  color: #c7f8f9;\n}\nbody .btn-bg.bg-1 .btn-1 button:hover {\r\n  background: #c7f8f9;\r\n  color: #6ab1c9;\r\n  border: 3px solid #6ab1c9;\r\n  transition: all 0.35s ease;\n}\nbody .btn-bg.bg-1 .btn-1 button:hover >a {\r\n  color: #6ab1c9;\r\n  transition: all 0.35s ease;\n}\nbody .btn-bg.bg-1 .btn-1 button:active {\r\n  transform: translate(5px, 5px);\n}\r\n\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/lecture/LecturePlay.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/lecture/LecturePlay.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./LecturePlay.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/lecture/LecturePlay.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/lecture/LecturePlay.vue?vue&type=template&id=1f05c8f2&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/lecture/LecturePlay.vue?vue&type=template&id=1f05c8f2& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
    _c("canvas", { attrs: { id: "canvas", width: "800", height: "600" } }),
    _vm._v(" "),
    _c("div", { attrs: { id: "pannel" } }, [
      _c("div", { staticClass: "btn-bg bg-1" }, [
        _c(
          "div",
          { staticClass: "btn btn-1" },
          [
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
        )
      ])
    ]),
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
        ),
        _vm._v(" "),
        _c("div", { staticClass: "modal_layer" })
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

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
/*! exports provided: loadLecture, loadLectureData, createScore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadLecture", function() { return loadLecture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadLectureData", function() { return loadLectureData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createScore", function() { return createScore; });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_service */ "./resources/js/services/http_service.js");
 // 댄스강좌 리스트 로드

function loadLecture() {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/lecture');
} // 댄스강좌 하나 로드

function loadLectureData(data) {
  var anything = "/lecture/" + data;
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().get(anything);
} // 댄스점수 데이터 생성

function createScore(data) {
  return Object(_http_service__WEBPACK_IMPORTED_MODULE_0__["http"])().post('/lectureUsers', data);
}

/***/ }),

/***/ "./resources/js/views/lecture/LecturePlay.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/lecture/LecturePlay.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LecturePlay_vue_vue_type_template_id_1f05c8f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LecturePlay.vue?vue&type=template&id=1f05c8f2& */ "./resources/js/views/lecture/LecturePlay.vue?vue&type=template&id=1f05c8f2&");
/* harmony import */ var _LecturePlay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LecturePlay.vue?vue&type=script&lang=js& */ "./resources/js/views/lecture/LecturePlay.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _LecturePlay_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LecturePlay.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/lecture/LecturePlay.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LecturePlay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LecturePlay_vue_vue_type_template_id_1f05c8f2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LecturePlay_vue_vue_type_template_id_1f05c8f2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/lecture/LecturePlay.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/lecture/LecturePlay.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/lecture/LecturePlay.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LecturePlay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./LecturePlay.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/lecture/LecturePlay.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LecturePlay_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/lecture/LecturePlay.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/lecture/LecturePlay.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LecturePlay_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./LecturePlay.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/lecture/LecturePlay.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LecturePlay_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LecturePlay_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LecturePlay_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LecturePlay_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LecturePlay_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/lecture/LecturePlay.vue?vue&type=template&id=1f05c8f2&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/lecture/LecturePlay.vue?vue&type=template&id=1f05c8f2& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LecturePlay_vue_vue_type_template_id_1f05c8f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./LecturePlay.vue?vue&type=template&id=1f05c8f2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/lecture/LecturePlay.vue?vue&type=template&id=1f05c8f2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LecturePlay_vue_vue_type_template_id_1f05c8f2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LecturePlay_vue_vue_type_template_id_1f05c8f2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);