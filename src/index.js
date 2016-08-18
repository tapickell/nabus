const zpad = require('zpad')
const maxSequence = 9999
const sequenceLength = 4
const defaults = { machineId: 'default'
                 , groupId: null
                 }

// nabus : Array -> Function
exports.nabus = function(args) {
  let {groupId, machineId} = Object.assign({ }, defaults, args)
  let lastSF = null

  // next : -> String
  return function next() {
    lastSF = generateSF(lastSF, groupId, machineId)
    return lastSF
  }
}

// generateSF : Array -> String
function generateSF(lastSF, groupId, machineId) {
  return lastSF ?
    generateNextSF(lastSF, Date.now()) :
    constructSF(Date.now(), groupId, machineId, null)
}

// generateNextSF : String -> Int -> String
function generateNextSF(lastSF, now) {
  let {timestamp, groupId, machineId, sequence} = deconstructSF(lastSF)
  if (parseInt(timestamp) == now) {
    if (parseInt(sequence) >= maxSequence) {
      return generateNextSF(lastSF, Date.now())
    }
    return constructSF(now, groupId, machineId, incrementSequence(sequence))
  }
  if (parseInt(timestamp) < now) {
    return constructSF(now, groupId, machineId, null)
  }
  throw (`Hello McFly, your timestamp is from the future! ${timestamp} > ${now} ${timestamp > now}`)
}

// incrementSequence : String -> String
function incrementSequence(sequence) {
  return zpad(parseInt(sequence)+1, sequenceLength)
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

