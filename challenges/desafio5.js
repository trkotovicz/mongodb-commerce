db.produtos.find(
  { $or: [{ curtidas: { $eq: 36 } }, { vendidos: { $gt: 86 } }] },
  { _id: 0, nome: 1, curtidas: 1, vendidos: 1 },
);