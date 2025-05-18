function isOutOfBounds(index, array) {
  let outOfBounds = false

  if (index < 0) outOfBounds = true
  if (index > array.length - 1) outOfBounds = true

  return outOfBounds
}

export default isOutOfBounds
