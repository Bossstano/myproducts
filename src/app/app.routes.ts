import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { SearchProductByCategoryComponent } from './search-product-by-category/search-product-by-category.component';
import { SearchProductByNameComponent } from './search-product-by-name/search-product-by-name.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { productGuard } from './services/product.guard';

export const routes: Routes = [
    {path: "products", component: ProductsComponent},
    {path: "add-product", component: AddProductComponent, canActivate: [productGuard]},
    {path: "update-product/:id", component: UpdateProductComponent},
    {path: "searchProductByCategory", component: SearchProductByCategoryComponent},
    {path: "searchProductByName", component: SearchProductByNameComponent},
    {path: "listCategories", component: ListCategoriesComponent},
    {path:  'login', component: LoginComponent},
     {path:  'app-forbidden', component: ForbiddenComponent}, 
    {path : "", redirectTo: "products", pathMatch: "full"}
];
