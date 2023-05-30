const { Router } = require("express");
const { userscontroller } = require("../controllers/users.controller");
const cors = require('cors');

const userRoutes = Router();

const corsMiddleware = cors({
  origin: '*', // Define a origem permitida (todos os domínios)
  credentials: true, // Permite o uso de cookies e cabeçalhos de autorização com HTTPS
  allowedHeaders: 'Origin,Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,locale', // Define os cabeçalhos permitidos
  methods: 'GET,PUT,POST,PATCH,DELETE,OPTIONS' // Define os métodos permitidos
});

userRoutes.use(corsMiddleware);

userRoutes.use(
  '/users',
  userRoutes.get('/all',userscontroller.getAllUsers),
  userRoutes.get('/:id',userscontroller.getUserById),
  userRoutes.post('/',userscontroller.putNewUser),
  userRoutes.patch('/:id',userscontroller.patchUser),
  userRoutes.delete('/:id',userscontroller.deleteUser),
);

module.exports = { userRoutes };
