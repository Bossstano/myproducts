import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../model/product.model';
import { ProductService } from '../services/product.service';
import { Category } from '../model/category.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  imports: [FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit {

  newProduct = new Product();
  message!: string;
  categories!: Category[];
  newIdCategory!: number;
  newCategory!: Category;



  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.productService.listCategories().subscribe(categories => {
      this.categories = categories;
      console.log("Categories: ", categories);
    });
    // this.categories = this.productService.listCategories();
  }

  addProduct() {
    this.newProduct.category = this.categories.find(category => category.id == this.newIdCategory)!;
    this.productService.addProduct(this.newProduct).subscribe(product => {
      console.log("Product added: ", product);
    });
    
    // this.newCategory = this.productService.getCategoryById(this.newIdCategory);
    // this.newProduct.category = this.newCategory;
    // //console.log("New Product: ", this.newProduct);
    // this.productService.addProduct(this.newProduct);
    this.message = "Product " + this.newProduct.name + " added successfully!";
    this.router.navigate(['products']);
  }

}
