const { Router } = require("express");
const { userscontroller } = require("../controllers/users.controller");

const userRoutes = Router();

userRoutes.use(
    '/users',
    userRoutes.get('/all',userscontroller.getAllUsers),
    userRoutes.get('/:id',userscontroller.getUserById),
    userRoutes.post('/',userscontroller.putNewUser),
    userRoutes.patch('/:id',userscontroller.patchUser),
    userRoutes.delete('/:id',userscontroller.deleteUser),
)


module.exports = { userRoutes }