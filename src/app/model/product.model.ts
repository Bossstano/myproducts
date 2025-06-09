import { Category } from "./category.model";

export class Product {
        idProduct! : number;
        nameProduct! : string;
        priceProduct! : number;
        dateCreation!: Date;
        category!: Category;
}