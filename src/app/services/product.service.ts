import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import { Category } from '../model/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products : Product[];
  product!: Product;
  categories: Category[];

  constructor() { 
    this.categories = [ {
      idCategory: 1, nameCategory: "Electronics"},
    {idCategory: 2, nameCategory: "Home Appliances"},
    {idCategory: 3, nameCategory: "Books"} ];
    
    this.products = [ {
      idProduct: 1,
      nameProduct: "Laptop",
      priceProduct: 1200,
      dateCreation: new Date("2023-01-01"),
      category: this.categories[0] // Assigning a category to the product
    },
    {
      idProduct: 2,
      nameProduct: "Smartphone",
      priceProduct: 800,
      dateCreation: new Date("2023-02-01"),
      category: this.categories[1] // Assigning a category to the product
    },
    {
      idProduct: 3,
      nameProduct: "Tablet",
      priceProduct: 600,
      dateCreation: new Date("2023-03-01"),
      category: this.categories[2] // Assigning a category to the product
    } ];
   }

   listProducts(): Product[] {
    return this.products;
  }

  addProduct(product: Product) {
    this.products.push(product);
  }

  deleteProduct(product: Product) {
    const index = this.products.indexOf(product, 0);
    if (index > -1) {
      this.products.splice(index, 1);
    }
  }

  getProductById(id: number): Product {
    this.product = this.products.find(product => product.idProduct === id)!;
     return this.product;
  }

  updateProduct(product: Product) {
    const index = this.products.indexOf(product, 0);;
    if (index > -1) {
      this.products.splice(index, 1);
      this.products.splice(index, 0, product);
    }
  }

  listCategories(): Category[] {
    return this.categories;
  }

  getCategoryById(id: number): Category {
    return this.categories.find(category => category.idCategory == id)!;
  }
}
