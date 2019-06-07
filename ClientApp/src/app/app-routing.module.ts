import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { FormArrayExampleComponent } from './form-array-example/form-array-example.component';
import { NavMenuComponent } from './shared/nav-menu/nav-menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { SiteLayoutComponent } from './shared/site-layout/site-layout.component';
import { AppLayoutComponent } from './shared/app-layout/app-layout.component';
import { AuthGuard } from './Services/auth.guard';


const routes: Routes = [
  // standard different Layout landing page
  // SiteLayout Landing Page  without having any header and footer or dashboard
  {
    path: '', component: SiteLayoutComponent, children: [
      { path: '', component: LoginComponent, pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
    ]
  },
  // AppLayout Landing Page  having header and footer or dashboard standard different Layout landing page
  {
    path: '', component: AppLayoutComponent, children: [
      { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'formarray', component: FormArrayExampleComponent },

    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]

})


export class AppRoutingModule { }

// Standard Coding ..  All the route in one place you can export using array  (Best Practice)_
export const routingComponents = [
  LoginComponent,
  HomeComponent, CounterComponent, FetchDataComponent, FormArrayExampleComponent, PageNotFoundComponent,
  NavMenuComponent
];
