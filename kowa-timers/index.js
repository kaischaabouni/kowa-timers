"use strict";

// external dependencies
module.exports = function () {
  var KowaTimers = {};

  KowaTimers.setTimeout = function(delay) {
    return new Promise(
		function(resolve, reject) {
			setTimeout(function () {
				resolve();
			}, delay);
		}
    );
  };
  return KowaTimers;
};
