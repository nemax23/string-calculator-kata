
const add = (str) => {
  if (str === '') {
    return 0
  }
  const match = str.match(/^\/\/(.*)\n(.*)$/)

  const { sum, lowers } = match ? sumByDelimeter(match[2], match[1]) : sumByDelimeter(str, /\n|,/)
  if (lowers.length) {
    throw new Error(`negatives not allowed: ${lowers.join(',')}`)
  }
  return sum
}

const sumByDelimeter = (str, delimeter) => str.split(delimeter).reduce((acc, current) => {
  const number = parseInt(current)
  if (number < 0) {
    acc.lowers.push(number)
  }
  if (number < 1000) {
    acc.sum += number
  }
  return acc
}, {
  sum: 0,
  lowers: []
})

module.exports = {
  add
}
