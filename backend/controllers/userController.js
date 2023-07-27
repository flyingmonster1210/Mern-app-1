// @desc    Register new user
// @route   POST /api/uses
// @access  public
const registerUser = (req, res) => {
  res.json({
    message: 'Register User'
  })
}


module.exports = {
  registerUser,
}