
function nabus() {
  // init with optional config
  // {machineId: "kraken-api", goupId: "aviation", timestamp: "20160924292837"}
  // if we receive timestamp maybe we can use a diff to sync from ??

  // I almost feel like I need a receiver that is running waiting to rcv msgs
  // When this receives a next message it passes the last state to generate function
  function next() {
    // return nabus id
    // can take optional last nabus id to produce next
    // should last id always be stashed somehwere and passed to next function that takes last ??
    // maybe this is how sequence is handled
    // before returning save off last time
  }

  function generateId(lastId) {
    // generated based on last id
    // if timestamp is match return with incremented sequence number
    // if timestamp is match and sequence is at end ?? wait a milisecond then run
  }

}

export { nabus }
