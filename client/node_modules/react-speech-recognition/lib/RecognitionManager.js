"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _isAndroid = _interopRequireDefault(require("./isAndroid"));

var _utils = require("./utils");

var _NativeSpeechRecognition = require("./NativeSpeechRecognition");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var RecognitionManager = /*#__PURE__*/function () {
  function RecognitionManager(SpeechRecognition) {
    _classCallCheck(this, RecognitionManager);

    this.recognition = null;
    this.pauseAfterDisconnect = false;
    this.interimTranscript = '';
    this.finalTranscript = '';
    this.listening = false;
    this.subscribers = {};

    this.onStopListening = function () {};

    this.previousResultWasFinalOnly = false;
    this.resetTranscript = this.resetTranscript.bind(this);
    this.startListening = this.startListening.bind(this);
    this.stopListening = this.stopListening.bind(this);
    this.abortListening = this.abortListening.bind(this);
    this.setSpeechRecognition = this.setSpeechRecognition.bind(this);
    this.setSpeechRecognition(SpeechRecognition);

    if ((0, _isAndroid["default"])()) {
      this.updateFinalTranscript = (0, _utils.debounce)(this.updateFinalTranscript, 250, true);
    }
  }

  _createClass(RecognitionManager, [{
    key: "setSpeechRecognition",
    value: function setSpeechRecognition(SpeechRecognition) {
      var browserSupportsRecogniser = !!SpeechRecognition && ((0, _NativeSpeechRecognition.isNative)(SpeechRecognition) || (0, _utils.browserSupportsPolyfills)());

      if (browserSupportsRecogniser) {
        if (this.recognition) {
          this.recognition.onresult = function () {};

          this.recognition.onend = function () {};

          if (this.listening) {
            this.stopListening();
          }
        }

        this.recognition = new SpeechRecognition();
        this.recognition.continuous = false;
        this.recognition.interimResults = true;
        this.recognition.onresult = this.updateTranscript.bind(this);
        this.recognition.onend = this.onRecognitionDisconnect.bind(this);
      }

      this.emitBrowserSupportsSpeechRecognitionChange(browserSupportsRecogniser);
    }
  }, {
    key: "subscribe",
    value: function subscribe(id, callbacks) {
      this.subscribers[id] = callbacks;
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(id) {
      delete this.subscribers[id];
    }
  }, {
    key: "emitListeningChange",
    value: function emitListeningChange(listening) {
      var _this = this;

      this.listening = listening;
      Object.keys(this.subscribers).forEach(function (id) {
        var onListeningChange = _this.subscribers[id].onListeningChange;
        onListeningChange(listening);
      });
    }
  }, {
    key: "emitTranscriptChange",
    value: function emitTranscriptChange(interimTranscript, finalTranscript) {
      var _this2 = this;

      Object.keys(this.subscribers).forEach(function (id) {
        var onTranscriptChange = _this2.subscribers[id].onTranscriptChange;
        onTranscriptChange(interimTranscript, finalTranscript);
      });
    }
  }, {
    key: "emitClearTranscript",
    value: function emitClearTranscript() {
      var _this3 = this;

      Object.keys(this.subscribers).forEach(function (id) {
        var onClearTranscript = _this3.subscribers[id].onClearTranscript;
        onClearTranscript();
      });
    }
  }, {
    key: "emitBrowserSupportsSpeechRecognitionChange",
    value: function emitBrowserSupportsSpeechRecognitionChange(browserSupportsSpeechRecognitionChange) {
      var _this4 = this;

      Object.keys(this.subscribers).forEach(function (id) {
        var _this4$subscribers$id = _this4.subscribers[id],
            onBrowserSupportsSpeechRecognitionChange = _this4$subscribers$id.onBrowserSupportsSpeechRecognitionChange,
            onBrowserSupportsContinuousListeningChange = _this4$subscribers$id.onBrowserSupportsContinuousListeningChange;
        onBrowserSupportsSpeechRecognitionChange(browserSupportsSpeechRecognitionChange);
        onBrowserSupportsContinuousListeningChange(browserSupportsSpeechRecognitionChange);
      });
    }
  }, {
    key: "disconnect",
    value: function disconnect(disconnectType) {
      if (this.recognition && this.listening) {
        switch (disconnectType) {
          case 'ABORT':
            this.pauseAfterDisconnect = true;
            this.abort();
            break;

          case 'RESET':
            this.pauseAfterDisconnect = false;
            this.abort();
            break;

          case 'STOP':
          default:
            this.pauseAfterDisconnect = true;
            this.stop();
        }
      }
    }
  }, {
    key: "onRecognitionDisconnect",
    value: function onRecognitionDisconnect() {
      this.onStopListening();
      this.listening = false;

      if (this.pauseAfterDisconnect) {
        this.emitListeningChange(false);
      } else if (this.recognition) {
        if (this.recognition.continuous) {
          this.startListening({
            continuous: this.recognition.continuous
          });
        } else {
          this.emitListeningChange(false);
        }
      }

      this.pauseAfterDisconnect = false;
    }
  }, {
    key: "updateTranscript",
    value: function updateTranscript(_ref) {
      var results = _ref.results,
          resultIndex = _ref.resultIndex;
      var currentIndex = resultIndex === undefined ? results.length - 1 : resultIndex;
      this.interimTranscript = '';
      this.finalTranscript = '';

      for (var i = currentIndex; i < results.length; ++i) {
        if (results[i].isFinal && (!(0, _isAndroid["default"])() || results[i][0].confidence > 0)) {
          this.updateFinalTranscript(results[i][0].transcript);
        } else {
          this.interimTranscript = (0, _utils.concatTranscripts)(this.interimTranscript, results[i][0].transcript);
        }
      }

      var isDuplicateResult = false;

      if (this.interimTranscript === '' && this.finalTranscript !== '') {
        if (this.previousResultWasFinalOnly) {
          isDuplicateResult = true;
        }

        this.previousResultWasFinalOnly = true;
      } else {
        this.previousResultWasFinalOnly = false;
      }

      if (!isDuplicateResult) {
        this.emitTranscriptChange(this.interimTranscript, this.finalTranscript);
      }
    }
  }, {
    key: "updateFinalTranscript",
    value: function updateFinalTranscript(newFinalTranscript) {
      this.finalTranscript = (0, _utils.concatTranscripts)(this.finalTranscript, newFinalTranscript);
    }
  }, {
    key: "resetTranscript",
    value: function resetTranscript() {
      this.disconnect('RESET');
    }
  }, {
    key: "startListening",
    value: function () {
      var _startListening = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _ref2,
            _ref2$continuous,
            continuous,
            language,
            isContinuousChanged,
            isLanguageChanged,
            _args = arguments;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _ref2 = _args.length > 0 && _args[0] !== undefined ? _args[0] : {}, _ref2$continuous = _ref2.continuous, continuous = _ref2$continuous === void 0 ? false : _ref2$continuous, language = _ref2.language;

                if (this.recognition) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                isContinuousChanged = continuous !== this.recognition.continuous;
                isLanguageChanged = language && language !== this.recognition.lang;

                if (!(isContinuousChanged || isLanguageChanged)) {
                  _context.next = 11;
                  break;
                }

                if (!this.listening) {
                  _context.next = 9;
                  break;
                }

                _context.next = 9;
                return this.stopListening();

              case 9:
                this.recognition.continuous = isContinuousChanged ? continuous : this.recognition.continuous;
                this.recognition.lang = isLanguageChanged ? language : this.recognition.lang;

              case 11:
                if (!this.listening) {
                  if (!this.recognition.continuous) {
                    this.resetTranscript();
                    this.emitClearTranscript();
                  }

                  try {
                    this.start();
                  } catch (DOMException) {// Tried to start recognition after it has already started - safe to swallow this error
                  }

                  this.emitListeningChange(true);
                }

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function startListening() {
        return _startListening.apply(this, arguments);
      }

      return startListening;
    }()
  }, {
    key: "abortListening",
    value: function () {
      var _abortListening = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _this5 = this;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.disconnect('ABORT');
                this.emitListeningChange(false);
                _context2.next = 4;
                return new Promise(function (resolve) {
                  _this5.onStopListening = resolve;
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function abortListening() {
        return _abortListening.apply(this, arguments);
      }

      return abortListening;
    }()
  }, {
    key: "stopListening",
    value: function () {
      var _stopListening = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var _this6 = this;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.disconnect('STOP');
                this.emitListeningChange(false);
                _context3.next = 4;
                return new Promise(function (resolve) {
                  _this6.onStopListening = resolve;
                });

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function stopListening() {
        return _stopListening.apply(this, arguments);
      }

      return stopListening;
    }()
  }, {
    key: "getRecognition",
    value: function getRecognition() {
      return this.recognition;
    }
  }, {
    key: "start",
    value: function start() {
      if (this.recognition && !this.listening) {
        this.recognition.start();
        this.listening = true;
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.recognition && this.listening) {
        this.recognition.stop();
        this.listening = false;
      }
    }
  }, {
    key: "abort",
    value: function abort() {
      if (this.recognition && this.listening) {
        this.recognition.abort();
        this.listening = false;
      }
    }
  }]);

  return RecognitionManager;
}();

exports["default"] = RecognitionManager;