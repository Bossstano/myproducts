import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { CommonModule } from '@angular/common';
import { Category } from '../model/category.model';
import { ProductService } from '../services/product.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-product-by-category',
  imports: [CommonModule,FormsModule],
  templateUrl: './search-product-by-category.component.html',
  styles: ``
})
export class SearchProductByCategoryComponent implements OnInit {

  products!: Product[];
  IdCategory!: number;
  categories!: Category[];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.listCategories().subscribe(categories => {
      this.categories = categories;
      console.log("Categories: ", categories);
    });
  }

  onChange(){
    this.productService.searchProductByCategory(this.IdCategory).subscribe(products => {
      this.products = products;
      console.log("Products by category: ", products);
    });
  }

}
