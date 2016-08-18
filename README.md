# Not Another Beautiful and Unique Snowflake
-----

This is a simple snowflake implementation that is easy to use and allows
configuration of machineId and groupId. This is if you need something super simple, no hex, no how small can I
make the bytes, no bells, no whistles.

Demo:
```javascript
var sf = require('nabus')

var nbs = sf.nabus
var nxt = nbs({machineId: "demo-publish", groupId: "GRC"})
var snowf = nxt()
console.log("snowf", snowf)

```

> “You are not special. You're not a beautiful and unique snowflake. You're the same decaying organic matter as everything else. We're all part of the same compost heap. We're all singing, all dancing crap of the world.”

@tapickell <tapickell@gmail.com>
