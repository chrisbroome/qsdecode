var _ = require('underscore');

function qsdecode(qs) {
  var s = qs.split('&');
  var o = {};
  var r = _(redux).bind(o);
  _(s).each(r);
  return o;
}

function redux(x) {
  var kvp = x.split('=');
  var k = kvp[0];
  var v = decodeURIComponent(kvp[1]);
  this[k] = decodeURIComponent(v);
}

module.exports = qsdecode;