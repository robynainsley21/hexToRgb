const hexToRgb = (hex) => {
  hex = hex.replace(/^#/, "")

  let binaryValue = parseInt(hex, 16)
  let r = (binaryValue >> 16) & 255
  let g = (binaryValue >> 8) & 255
  let b = binaryValue & 255

  return [r, g, b]
}

console.log(hexToRgb('#654848'));

