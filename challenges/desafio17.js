db.resumoProdutos.insertOne({
  franquia: "McDonalds",
  totalProdutos: db.produtos.countDocuments({}),
});

db.resumoProdutos.findOne({
  franquia: "McDonalds",
}, { 
  _id: 0,
});