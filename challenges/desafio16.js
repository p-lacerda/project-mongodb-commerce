db.produtos.updateMany(
  { nome: "Big Mac" },
  { $set: { ultimaModificacao: Date.now() } },
);

db.produtos.find({ ultimaModificacao: { $exists: 1 } }, { nome: 1, _id: 0 });