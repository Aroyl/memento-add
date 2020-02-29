/* ----------------- Однострочники ------------------ */
  var toFix = function (e) {return Math.round((e+0.00001)*100)/100};
  var timeIt = function (e) {return moment(e).format("HH:mm:ss")};
  var dateIt = function (e) {return moment(e).format("DD.MM.YYYY")};

/* ---------------- Сложные функции ---------------- */
  var f = function (p,e){
    e = (typeof e !== 'undefined') ? e : entry();
    return e.field(p);
  };
  
  var decode = function (text, charset){
    var decoder = new TextDecoder(charset);
    var uint = new Uint8Array(text.length);
    for (var i=0, j=text.length;i<j;++i) {
      uint[i] = text.charCodeAt(i);
    }
    return decoder.decode(uint);
  };
