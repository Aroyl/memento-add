/* ----------------- Однострочники ------------------ */
  var f = function (e) {return entry().field(e)};
  var twoF = function (e) {return Math.round((e+0.00001)*100)/100};
  var fe = function (p,e) {return p.field(e)};
  var mTime = function (e) {return moment(e).format("HH:mm:ss")};
  var mDate = function (e) {return moment(e).format("DD.MM.YYYY")};

/* ---------------- Сложные функции ---------------- */
  var decode = function (text, charset){
    var decoder = new TextDecoder(charset);
    var uint = new Uint8Array(text.length);
    for (var i=0, j=text.length;i<j;++i) {
      uint[i] = text.charCodeAt(i);
    }
    return decoder.decode(uint);
  };
