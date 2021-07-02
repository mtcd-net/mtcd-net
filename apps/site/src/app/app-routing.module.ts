import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { CareersComponent } from './pages/careers/careers.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'services',
    loadChildren: () =>
      import('./pages/services/services.module').then((m) => m.ServicesModule),
  },
  { path: 'products', component: ProductsComponent },
  { path: 'careers', component: CareersComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
