const products = [
  { id: 1, title: 'Gerbera', description: 'Wedding Flower', unitprice: 8, quantity: 2300, likes: 8734 },
  { id: 2, title: 'Lotus', description: 'Worship Flower', unitprice: 35, quantity: 5400, likes: 4598 },
  { id: 3, title: 'Jasmine', description: 'Fragrance Flower', unitprice: 2, quantity: 5600, likes: 6587 },
  { id: 4, title: 'Lily', description: 'Delicate Flower', unitprice: 15, quantity: 1200, likes: 5678 },
  { id: 5, title: 'Rose', description: 'Valentine Flower', unitprice: 9, quantity: 1200, likes: 2387 },
  { id: 6, title: 'Marigold', description: 'Festival Flower', unitprice: 2, quantity: 6500, likes: 9834 }
];

const ProductServiceInMem = {
  getAllProducts() {
      return products;
  },
  getById(id) {
      return products.find((product) => product.id === id);
  }
};

export default ProductServiceInMem;
