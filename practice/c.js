var param1 = require('./a.js')
var param2 = require('./b.js')

function d(name, params) {
  param1.print(name)
  params.forEach(function (item, index) {
    param2.print(item)
  }
  );
}
exports.d = d

