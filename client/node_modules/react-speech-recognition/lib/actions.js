"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.appendTrancript = exports.clearTrancript = void 0;

var _constants = require("./constants");

var clearTrancript = function clearTrancript() {
  return {
    type: _constants.CLEAR_TRANSCRIPT
  };
};

exports.clearTrancript = clearTrancript;

var appendTrancript = function appendTrancript(interimTranscript, finalTranscript) {
  return {
    type: _constants.APPEND_TRANSCRIPT,
    payload: {
      interimTranscript: interimTranscript,
      finalTranscript: finalTranscript
    }
  };
};

exports.appendTrancript = appendTrancript;