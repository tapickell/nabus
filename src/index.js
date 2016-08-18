const maxSequence = 9999
const defaults = { machineId: 'default'
                 , groupId: null
                 , timestamp: Date.now()
                 }

// nabus : Array -> Function
export default function nabus(args) {
  let {groupId, machineId, timestamp} = Object.assign({ }, defaults, args)
  let lastSF = null

  // next : -> String
  function next() {
    lastSF = generateSF(lastSF, groupId, machineId, timestamp)
    return lastSF
  }
}

// generateSF : Array -> String
function generateSF(lastSF, groupId, machineId, now) {
  return lastSF ?
    generateNextSF(lastSF, now) :
    constructSF(now, groupId, machineId, null)
}

// generateNextSF : String -> Int -> String
function generateNextSF(lastSF, now) {
  let {timestamp, groupId, machineId, sequence} = deconstructSF(lastSF)
  if (timestamp === now) {
    if (sequence >= maxSequence) {
      return generateNextSF(lastSF, Date.now())
    }
    return constructSF(now, groupId, machineId, sequence+1)
  }
  if (timestamp < now) {
    return constructSF(now, groupId, machineId, null)
  }
  throw (`Hello McFly, your timestamp is from the future! ${timestamp} > ${now}`)
}

// constructSF : Array -> String
function constructSF(timestamp, groupId, machineId, sequence) {
  return `${timestamp}${groupId ? "-" + groupId : ""}-${machineId}-${sequence || "0000"}`
}

 // deconstructSF : String -> Object
function deconstructSF(sf) {
  let sfParts = addGroupIdDefault(sf.split("-"))
  return makeObjectFromArray(...sfParts)
}

// addGroupIdDefault : Array -> Array
function addGroupIdDefault(arr) {
  if (arr.length === 3) {
    let [h, ...t] = arr
    return [h, defaults.groupId, ...t]
  }
  return arr
}

// makeObjectFromArray : Array -> Object
function makeObjectFromArray(timestamp, groupId, machineId, sequence) {
  return {timestamp: timestamp, groupId: groupId, machineId: machineId, sequence: sequence}
}

export default nabus

