const requestInfo = (req, res, next) => {
  console.log('* ' + (new Date()).toString())
  console.log(`  Request method: ${req.method}`)
  next()
}

module.exports = {
  requestInfo,
}