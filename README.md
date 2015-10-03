# Kowa timers
Kowa timers: asynchronous performance and synchronous simplicity


## Install
    npm install kowa-timers

## Example

```
var Kowa = require('kowa');
var KowaTimers = require('kowa-timers');

Kowa.spawn(function* () {
  try {
    yield KowaTimers.setTimeout(1000);
	
	
  } catch (e) {
    console.log(e);
  }
});

```


## License

Apache License 2.0
