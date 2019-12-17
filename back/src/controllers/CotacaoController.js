// const Cotacao = require("../models/Cotacao");

// module.exports = {
//     async store(req, res) {
//         const cotacao = await Cotacao.create(req.body);
//         return res.json(cotacao);
//     },
//     async list(req, res) {
//         const cotacao = await Cotacao.find({});
//         return res.json(cotacao);
//     },
//     async index(req, res) {
//         const cotacao= await Cotacao.findOne({ numero_rua: req.params.numero_rua });

//         if (!cotacao) {
//             return res.status(400).json({ error: "Comércio não encontrado!" });
//         }
//         return res.json(cotacao);
//     },
//     async update(req, res) {
//         const cotacao = await Cotacao.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         return res.json(cotacao);
//     },
//     async destroy(req, res) {
//         await Cotacao.deleteOne({ _id: req.params.id });
//         return res.json({ message: "Excluido com Sucesso!!" });
//     }
// };