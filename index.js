const tasap = require('tasap');
const through2 = require('through2');

module.exports = function(options) {
	// Defaults
	var settings = Object.assign({},options);
	return through2.obj(function(file, encoding, callback) {
		let content = String(file.contents);
		file.contents = new Buffer(tasap.get(content, settings));
		callback(null, file);
	});
};