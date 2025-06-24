import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from '../model/category.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-category',
  imports: [FormsModule],
  templateUrl: './update-category.component.html',
  styles: ``
})
export class UpdateCategoryComponent implements OnInit {

  @Input()  // Input decorator to receive data from parent component
  category!: Category;

  @Input()  // Input decorator to receive data from parent component
  ajout!: boolean; // Default to true for adding a new category

  @Output()  // Output decorator to emit events to parent component
  updateCategoryEvent: EventEmitter<Category> = new EventEmitter<Category>(); 

   

  constructor() {
    // this.categories = this.productService.categories;
    // this.category = this.productService.category;
  }

  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateCategorie ",this.category);
  }

  saveCategory() {
    this.updateCategoryEvent.emit(this.category);
    console.log("Category updated: ", this.category);
  }

}
