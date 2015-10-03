const assert = require('assert');

var Kowa = require('kowa');
var KowaTimers = require('../kowa-timers')();

Kowa.spawn(function* () {
  try {
    yield KowaTimers.setTimeout(1000);	
	console.log('after 1 second');
  } catch (e) {
    console.log('error', e);
  }
});