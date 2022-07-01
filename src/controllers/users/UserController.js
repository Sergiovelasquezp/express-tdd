const UserController = {}

UserController.registerUser = async (req, res) => {
  return res.send({
    message: 'user created'
  })
}

module.exports = UserController;