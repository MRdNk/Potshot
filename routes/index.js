
/*
 * GET home page.
 */
var fs = require('fs')


exports.index = function(req, res){
  fs.createReadStream('./shootingarea.html').pipe(res);
};

exports.whatkill = function (req, res) {
	fs.createReadStream('./whatdidyoukill.html').pipe(res);
};
