import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import { Category } from '../model/category.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

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
  // Example API URL

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
    return this.http.get<Product[]>(environment.apiUrl);
    // return this.products;
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(environment.apiUrl, product, httpOptions);
    /* this.products.push(product); */
  }

  deleteProduct(productId: number) {
    const url = `${environment.apiUrl}/${productId}`;
    return this.http.delete(url, httpOptions);
    /* const index = this.products.indexOf(product, 0);
    if (index > -1) {
      this.products.splice(index, 1);
    } */
  }

  getProductById(productId: number): Observable<Product> {
    const url = `${environment.apiUrl}/${productId}`;
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
   return this.http.put<Product>(environment.apiUrl, product, httpOptions);
  }

   listCategories(): Observable<Category[]> {
    const url = `${environment.apiUrl}/category`;
    return this.http.get<Category[]>(url);
  }

  /* getCategoryById(id: number): Category {
    return this.categories.find(category => category.idCategory == id)!;
  } */ 

 searchProductByCategory(categoryId: number): Observable<Product[]> {
    const url = `${environment.apiUrl}/prodsCat/${categoryId}`;
    return this.http.get<Product[]>(url);
  }

  searchProductByName(name: string): Observable<Product[]> {
    const url = `${environment.apiUrl}/prodsByName/${name}`;
    return this.http.get<Product[]>(url);
  }
}
