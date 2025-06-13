import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import { Category } from '../model/category.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // products: Product[];
  product!: Product;
  // categories: Category[];
  apiUrl: string = 'http://localhost:8080/products/api'; // Example API URL

  constructor(private http: HttpClient) {
    // /* /* this.categories = [ {
    //   idCategory: 1, nameCategory: "Electronics"},
    // {idCategory: 2, nameCategory: "Home Appliances"},
    // {idCategory: 3, nameCategory: "Books"} ]; */

    // this.products = [{
    //   idProduct: 1,
    //   nameProduct: "Laptop",
    //   priceProduct: 1200,
    //   dateCreation: new Date("2023-01-01")
    //   //,category: this.categories[0] // Assigning a category to the product
    // },
    // {
    //   idProduct: 2,
    //   nameProduct: "Smartphone",
    //   priceProduct: 800,
    //   dateCreation: new Date("2023-02-01")
    //   //,category: this.categories[1] // Assigning a category to the product
    // },
    // {
    //   idProduct: 3,
    //   nameProduct: "Tablet",
    //   priceProduct: 600,
    //   dateCreation: new Date("2023-03-01")
    //   //,category: this.categories[2] // Assigning a category to the product
    // }]; */
  }

  listProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
    // return this.products;
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product, httpOptions);
    /* this.products.push(product); */
  }

  deleteProduct(productId: number) {
    const url = `${this.apiUrl}/${productId}`;
    return this.http.delete(url, httpOptions);
    /* const index = this.products.indexOf(product, 0);
    if (index > -1) {
      this.products.splice(index, 1);
    } */
  }

  getProductById(productId: number): Observable<Product> {
    const url = `${this.apiUrl}/${productId}`;
    return this.http.get<Product>(url);
    /* this.product = this.products.find(product => product.idProduct === id)!;
    return this.product; */
    //return new Product(); // Placeholder return, replace with actual logic
  }

  updateProduct(product: Product): Observable<Product> {
    /* const index = this.products.indexOf(product, 0);;
    if (index > -1) {
      this.products.splice(index, 1);
      this.products.splice(index, 0, product);
    } */
   return this.http.put<Product>(this.apiUrl, product, httpOptions);
  }

  /* listCategories(): Category[] {
    return this.categories;
  }

  getCategoryById(id: number): Category {
    return this.categories.find(category => category.idCategory == id)!;
  } */
}
