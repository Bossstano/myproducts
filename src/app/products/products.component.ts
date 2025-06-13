import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductService } from '../services/product.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [CommonModule,RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  products? : Product[];

  constructor(private productService: ProductService) { 
    //this.products = [];
  }

  ngOnInit(): void {  
    this.listProducts();
  }

  listProducts() {
    this.productService.listProducts().subscribe(products => {
      console.log("Products: ", products);
      this.products = products;});
  }

  deleteProduct(product: Product) {
    let confirmation = confirm("Are you sure you want to delete the product: " + product.name + "?");
    if (confirmation) {
      this.productService.deleteProduct(product.id).subscribe(() => {
        console.log("Product deleted: ", product);
        this.listProducts();
      });
    }   
}
}
