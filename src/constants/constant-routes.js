const constantRoutes = {}

constantRoutes.baseApiURI = '/api/v1'

constantRoutes.userRoutes = {
  USERS_BASE_URI: `${constantRoutes.baseApiURI}/users`,
  CREATE_USER: '/',

}

module.exports = constantRoutes;