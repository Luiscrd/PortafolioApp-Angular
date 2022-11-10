import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { SearchComponent } from './pages/search/search.component';


const app_routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'portaforlio', component: PortafolioComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'about', component: AboutComponent },
    { path: 'item/:id', component: ItemComponent },
    { path: 'search/:term', component: SearchComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];


@NgModule({
    imports: [
        RouterModule.forRoot( app_routes, { useHash: true } )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }






