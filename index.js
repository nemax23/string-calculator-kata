
const add = (str) => {
  if (str === '') {
    return 0
  }
  return str.split(',').reduce((acc, current) => acc + parseInt(current), 0)
}

module.exports = {
  add
}
