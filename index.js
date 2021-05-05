
const add = (str) => {
  if (str === '') {
    return 0
  }
  const match = str.match(/^\/\/(.*)\n(.*)$/)
  if (match) {
    return match[2].split(match[1]).reduce((acc, current) => acc + parseInt(current), 0)
  }
  return str.split(/\n|,/).reduce((acc, current) => acc + parseInt(current), 0)
}

module.exports = {
  add
}
