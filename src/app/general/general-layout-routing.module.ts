import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from '../general/login/admin-login.component';



const routes: Routes = [
    {
    path: '',
        loadChildren: () => import('../general/general-layout.module').then(m => m.GeneralLayoutModule),		
        children: [
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },           
        
            //ADMIN PAGES
            { path: 'admin-login',             
            component: AdminLoginComponent
            },         
        ],
		data: {section: ""}    
    }
];

@NgModule({ 
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GeneralLayoutRoutingModule { }

