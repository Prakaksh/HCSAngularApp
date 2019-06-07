import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppFooterComponent } from './shared/app-footer/app-footer.component';
import { AppLayoutComponent } from './shared/app-layout/app-layout.component';
import { SiteLayoutComponent } from './shared/site-layout/site-layout.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AppFooterComponent,
    AppLayoutComponent,
    SiteLayoutComponent,
      ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
