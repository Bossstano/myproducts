import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-search-product-by-name',
  imports: [CommonModule,FormsModule],
  templateUrl: './search-product-by-name.component.html',
  styles: ``
})
export class SearchProductByNameComponent implements OnInit {

  products!: Product[];
  productName!: string;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    // Initialization logic if needed
  }

  searchProductByName() {
    this.productService.searchProductByName(this.productName).subscribe(products => {
      this.products = products;
      console.log("Products found: ", products);
    });
  }

}
