import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from '@mtcd-net/material';

import { LayoutModule } from '@mtcd-net/layout';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ScullyLibModule } from '@scullyio/ng-lib';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    // BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    LayoutModule,
    ScullyLibModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
