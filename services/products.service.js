const faker = require('faker');

class ProductsService {

  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
        this.products.push({
            id: faker.datatype.uuid(),
            name: faker.commerce.productName(),
            price: Number(faker.commerce.price()),
            image: faker.image.imageUrl(),
        })
    }
  }

  create(data) {
      const newProduct = {
        id: faker.datatype.uuid(),
        ...data
      }
      this.products.push(newProduct);
      return newProduct;
  }

  find() {
    return this.products;
  }

  findById(id) {
    return this.products.find(item => item.id === id);
  }

  update(id, changes) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('Product not found');
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes
    };
    return this.products[index];
  }

  delete(id) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('Product not found');
    }
    this.products.splice(index, 1);
    return {message: true, id: id}
  }
}

module.exports = ProductsService;
