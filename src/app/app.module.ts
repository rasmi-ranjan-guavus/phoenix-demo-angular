import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreContainerComponent } from './store-container/store-container.component';
import { GvsCardComponent } from './gvs-card/gvs-card.component';
import { IngestionAppComponent } from './ingestion-app/ingestion-app.component';
import { AppStoreComponent } from './app-store/app-store.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreContainerComponent,
    GvsCardComponent,
    IngestionAppComponent,
    AppStoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
