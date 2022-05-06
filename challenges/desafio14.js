db.produtos.find({
  ingredientes: {
    $in: ["picles"],
  },
},
{
  valoresNutricionais: {
    $slice: [0, 3],
  },
  nome: 1,
  ingredientes: 1,
  _id: 0,
});