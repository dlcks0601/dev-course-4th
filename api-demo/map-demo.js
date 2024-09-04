const express = require('express');
const app = express();
app.listen(1234);

app.get('/:id', function (req, res) {
  let { id } = req.params;
  id = parseInt(id); // "숫자" => 숫자

  if (db.get(id) == undefined) {
    res.json({
      message: '없는 상품입니다.',
    });
  } else {
    product = db.get(id);
    product['id'] = id; //product.id = id
    res.json(product);
  }
});

let notebook = {
  productName: 'Notebook',
  price: 2000000,
};
let cup = {
  productName: 'Cup',
  price: 3000,
};
let chair = {
  productName: 'Chair',
  price: 100000,
};
let poster = {
  productName: 'Poster',
  price: 20000,
};

let db = new Map();
db.set(1, notebook);
db.set(2, cup);
db.set(3, chair);
db.set(4, poster);

console.log(db);
console.log(db.get(1));
// console.log(db.get("1"));
console.log(db.get(2));
console.log(db.get(3));
