
const {faker} = require('@faker-js/faker');
class ProductServices {
  constructor() {
    this.products = [];
    this.generate();

  }

  generate() {
    const products = [];
    for (let i = 0; i < 100; i++) {
      products.push({
        id: i,
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        description: faker.commerce.productDescription(),
        image: faker.image.url(),
      });
    }
    return products;

  }


  create() {

  }

  findAll() {
    return this.products;

  }

  findOne() {

  }
  update() {


  }

  delete() { }

}

module.exports = ProductServices;
