
const add = (str) => {
  if (str === '') {
    return 0
  }
  const match = str.match(/^\/\/(.*)\n(.*)$/)
  if (match) {
    return sumByDelimeter(match[2], match[1])
  }
  return sumByDelimeter(str, /\n|,/)
}

const sumByDelimeter = (str, delimeter) => str.split(delimeter).reduce((acc, current) => acc + parseInt(current), 0)

module.exports = {
  add
}
