type NestedArray = (number | NestedArray)[]

// @ts-ignore Ignore potential infinite depth of the nested array
const getLength = (arr: NestedArray): number => arr.flat(Infinity).length

export default getLength
