const express = require('express');
const routes = express.Router();

const UserController = require("./controllers/UserController");
const CommerceController = require("./controllers/CommerceController")
const SessionController = require("./controllers/SessionController");
// const CotacaoController = require("./controllers/CotacaoController");
const ProdutoController = require("./controllers/ControllerProduto");
const authMiddleware = require("./middlewares/auth");
const authorizationMiddleware = require("./middlewares/authorization")

//post: guardar, get: pegar, put:alterar, delete:excluir

routes.post("/sessions", SessionController.store);
routes.post("/user", UserController.store);
routes.get('/users', UserController.list);
routes.get('/users/:email',UserController.index)
routes.put('/userId/:id',UserController.update);
routes.delete("/users/:id", UserController.destroy);

routes.post("/commerce", CommerceController.store);
routes.get('/commerce', CommerceController.list);

// routes.post("/cotacao", CotacaoController.store);
// routes.get("/cotacao", CotacaoController.list)

routes.post("/produto", ProdutoController.store);
routes.get("/produto", ProdutoController.list)


routes.use(authMiddleware);
routes.post("/users", authorizationMiddleware, UserController.store)


module.exports = routes;

