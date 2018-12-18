export const TYPE_SIMPLE = 'simple'
export const TYPE_OBJECT = 'object'
export const TYPE_ARRAY = 'array'

export default class Calculator {
  constructor (json) {
    this.parsed = JSON.parse(json)
    this.calculated = {}
    this.fullSize = null
  }

/*
  Returns a JSON object where each property matches a property in the initial object and each value is an object
  of type MeasuredObject.
  
  MeasuredObject {
    name: String // The original property name
    type: String // One of 'simple', 'object', 'array'. Function, null and undefined are 'simple'
    size: Number // The size in bytes of this property and its descendants
    percent: Number // The percent of the entire object size that this property contains
    children: Array | null // If 'type' is 'object' or 'array', this is an array of MeasuredObject
  }
*/
  calculate () {
    const size = this.size(this.parsed)
    this.fullSize = size

    const type = this.type(this.parsed)

    if (type === TYPE_SIMPLE) {
      return measuredObject('[[root]]', 'simple', size, 100)
    }

    if (type === TYPE_ARRAY) {
      return measuredObject('[[root]]', 'array', size, 100, this.calculateArray(this.parsed))
    }

    if (type === TYPE_OBJECT) {
      return measuredObject('[[root]]', 'object', size, 100, this.calculateObject(this.parsed))
    }
  }

  calculateArray (arr) {
    return arr.map((it, ix) => this.calculateItem(it, ix))
  }

  calculateObject (obj) {
    return Object.keys(obj).map(key => this.calculateItem(obj[key], key))
  }
  
  calculateItem (it, name) {
    const size = this.size(it)
    const type = this.type(it)

    let children = null
    if (type === TYPE_OBJECT) {
      children = this.calculateObject(it)
    } else if (type === TYPE_ARRAY) {
      children = this.calculateArray(it)
    }

    return measuredObject(name.toString(), type, size, this.percent(size), children)
  }

  type (parsed) {
    const type = typeof parsed
    if (parsed === null || ['number', 'boolean', 'undefined', 'string', 'function'].includes(type)) {
      return TYPE_SIMPLE
    }

    if (Array.isArray(parsed)) {
      return TYPE_ARRAY
    }

    if (type === 'object') {
      return TYPE_OBJECT
    }

    throw new Error(`Item of type "${type}" could not be categorized. Item: ${parsed}`)
  }
  
  size (parsed) {
    return new Blob([JSON.stringify(parsed)]).size
  }

  percent (size) {
    const percent = (size / this.fullSize) * 100
    return Number(percent.toFixed(2))
  }
}

export function measuredObject(name, type, size, percent, children = null) {
  return { name, type, size, percent, children }
}
