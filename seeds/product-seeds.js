const { Product } = require('../models');

const productData = [
  {
    product_name: 'White T-Shirt',
    price: 15.0,
    stock: 20,
    category_id: 1,
  },
  {
    product_name: 'Nike Sneakers',
    price: 90.0,
    stock: 30,
    category_id: 5,
  },
  {
    product_name: 'Toronto Raptors Cap',
    price: 25.0,
    stock: 10,
    category_id: 4,
  },
  {
    product_name: 'Northlane Obsidian Vinyl Record',
    price: 45.0,
    stock: 35,
    category_id: 3,
  },
  {
    product_name: 'Toronto Raptors Training Shorts',
    price: 40.0,
    stock: 22,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
