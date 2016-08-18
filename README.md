# Not Another Beautiful Unique Snowflake

This is a simple snowflake implementation that is easy to use and allows
configuration of machineId and groupId. This is if you need something super simple, no hex, no how small can I
make the bytes, no bells, no whistles, no beautiful code, no bs, just
simple distributed ids.

#### Demo
```javascript

const sf = require('nabus')

let nbs = sf.nabus
let nxt = nbs({machineId: "demorunner", groupId: "GRC"})

for (let i in Array.from(Array(100001).keys())) {
  console.log(i, "snowflake", nxt())
}

```

###### Produces
```javascript
0 snowflake 1471542288445-GRC-demorunner-0000
1 snowflake 1471542288447-GRC-demorunner-0000
2 snowflake 1471542288448-GRC-demorunner-0000
3 snowflake 1471542288448-GRC-demorunner-0001
.
.
.
99998 snowflake 1471541480840-GRC-demorunner-0078
99999 snowflake 1471541480840-GRC-demorunner-0079
100000 snowflake 1471541480840-GRC-demorunner-0080
```

#### TODO

[  ] change delimter to something other than "-" maybe ! or | or _ ??

- this will allow machineId and groupId to use name-with-hypen style

> “You are not special. You're not a beautiful and unique snowflake. You're the same decaying organic matter as everything else. We're all part of the same compost heap. We're all singing, all dancing crap of the world.”

@tapickell <tapickell@gmail.com>
