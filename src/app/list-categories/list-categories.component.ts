import { Component, OnInit } from '@angular/core';
import { Category } from '../model/category.model';
import { ProductService } from '../services/product.service';
import { UpdateCategoryComponent } from "../update-category/update-category.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-categories',
  imports: [UpdateCategoryComponent, CommonModule],
  templateUrl: './list-categories.component.html',
  styles: ``
})
export class ListCategoriesComponent implements OnInit {

  ajout:boolean=true;
  categories!: Category[];
  category: Category = { "id": null, "name": "" }; // Initialize with default values
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    //Récupérer la liste des catégories
    this.loadCategories();
  }

  updateCategoryEvent(category: Category) {
    this.productService.addCategory(category).subscribe(() => this.loadCategories());
  }

  loadCategories() {
    this.productService.listCategories().subscribe(cats => {
      this.categories = cats; // Assuming the API returns categories in this format
      console.log("Categories reloaded: ", cats);
    });
  }

  updateCategory(category: Category) {
    this.category = category;
    this.ajout = false;
    console.log("Category to update: ", this.category);
  }
}
