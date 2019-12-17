const Usu = require("../models/Usuario");

module.exports = async (req, res, next) =>{
    const usu = await Usu.findById(req.userId);

    if (usu.isAdmin){
        return next();
    }
    return res.status(401).json({error: "Usuário não autorizado"})
};