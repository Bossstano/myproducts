import { Category } from "./category.model";

export class Product {
        id! : number;
        name! : string;
        price! : number;
        creationDate!: Date;
        category!: Category;
}