import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout.component';
import { AdminDashboardComponent } from './dashboard/dashboard.component';
import { AddEditProductComponent } from './manage-product/add-edit-product.component';
import { ManageProductListComponent } from './manage-product/manage-product-list.component';

const routes: Routes = [
    {
        path: '', component: AdminLayoutComponent,
        loadChildren: () => import('../admin/admin-layout.module').then(m => m.AdminLayoutModule),
        children: [
            { path: 'dashboard', component: AdminDashboardComponent },
            { path: 'add-edit-product', component: AddEditProductComponent },
            { path: 'manage-product-list', component: ManageProductListComponent },            
        ]
    },    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminLayoutRoutingModule { }
