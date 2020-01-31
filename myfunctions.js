// This is free and unencumbered software released into the public domain.
// See LICENSE.md for more information.


(function(global) {
  'use strict';

/* ----------------- Однострочники ------------------ */
  function f(e) {return entry().field(e)}
  function twoF(e) {return Math.round((e+0.00001)*100)/100}
  function fe(p,e) {return p.field(e)}
  function mTime(e) {return moment(e).format("HH:mm:ss")}
  function mDate(e) {return moment(e).format("DD.MM.YYYY")}

/* ---------------- Сложные функции ---------------- */
  function decode(text, charset){
    var decoder = new TextDecoder(charset);
    var uint = new Uint8Array(text.length);
    for (var i=0, j=text.length;i<j;++i) {
      uint[i] = text.charCodeAt(i);
    }
    return decoder.decode(uint);
  }

}(this || {}));