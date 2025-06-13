import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product.model';
import { ActivatedRoute,Router } from '@angular/router';
import { Category } from '../model/category.model';

@Component({
  selector: 'app-update-product',
  imports: [FormsModule, CommonModule],
  templateUrl: './update-product.component.html',
  styles: ``
})
export class UpdateProductComponent implements OnInit {
  currentProduct = new Product();
  categories!: Category[];
  updateIdCategory!: number;

  constructor(private activatedRoute: ActivatedRoute,private router :Router, private productService: ProductService) {
  }

  ngOnInit(): void {
    // this.categories = this.productService.listCategories();
    // this.currentProduct = this.productService.getProductById(+this.activatedRoute.snapshot.params['id']);
    // console.log("Current Product: ", this.currentProduct);
    this.productService.getProductById(+this.activatedRoute.snapshot.params['id']).subscribe(product => {
      this.currentProduct = product;
      console.log("Current Product: ", this.currentProduct);
    });
  }

  updateProduct() {
    // this.currentProduct.category = this.productService.getCategoryById(this.updateIdCategory);
    this.productService.updateProduct(this.currentProduct).subscribe(product => {this.router.navigate(['/products']);});
    // alert("Product updated successfully!");
    // this.router.navigate(['/products']);
  }
}
