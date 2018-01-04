
function flatten(array1) {
  let resultArray = []
  array1.forEach(element => {
    if (typeof element === 'number') {
      resultArray.push(element)
    }
    else if (Array.isArray(element)) {
      resultArray.push(...flatten(element))
    }
    else {
      return 'An element that is not a number or array was entered'
    }
  })
  return resultArray
}

console.log(flatten([[12, 3, 2, 1, 22], [3, 7, 5, [4, 4]], 4]))
