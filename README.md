# Not Another Beautiful and Unique Snowflake
-----

This is a simple snowflake implementation that is easy to use and allows
configuration of machineId and groupId. This is if you need something super simple, no hex, no how small can I
make the bytes, no bells, no whistles.

Demo:
```javascript
const sf = require('nabus')

let nbs = sf.nabus
let nxt = nbs({machineId: "demorunner", groupId: "GRC"})

for (let i in Array.from(Array(100001).keys())) {
  console.log(i, "snowflake", nxt())
}

```

#### TODO

[ ] change delimter to something other than "-" maybe ! or | or _ ??
    - this will allow machineId and groupId to use name-with-hypen style

> “You are not special. You're not a beautiful and unique snowflake. You're the same decaying organic matter as everything else. We're all part of the same compost heap. We're all singing, all dancing crap of the world.”

@tapickell <tapickell@gmail.com>
