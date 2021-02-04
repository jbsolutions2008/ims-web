import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminAuthGuard, } from './shared';


const routes: Routes = [
    {
        // WHEN DEFAULT LOAD ITS REDIRECT TO ADMIN LAYOUT MODULE
        path: '',        
        loadChildren: () => import('./admin/admin-layout.module').then(m => m.AdminLayoutModule), //'./admin/admin-layout.module#AdminLayoutModule',
        canActivate: [AdminAuthGuard]
    },
    {
        path: 'admin',
        loadChildren: () => import('./admin/admin-layout.module').then(m => m.AdminLayoutModule), //'./admin/admin-layout.module#AdminLayoutModule',        
    },  
    {
        path: 'general',        
        loadChildren: () => import('./general/general-layout.module').then(m => m.GeneralLayoutModule),
    },	
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
