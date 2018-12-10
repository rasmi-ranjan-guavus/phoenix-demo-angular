import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppStoreComponent } from './app-store/app-store.component';
import { AppComponent } from './app.component';
import { GvsButtonBarComponent } from './gvs-button-bar/gvs-button-bar.component';
import { GvsCardComponent } from './gvs-card/gvs-card.component';
import { IngestionAppComponent } from './ingestion-app/ingestion-app.component';
import { StoreContainerComponent } from './store-container/store-container.component';


@NgModule({
  declarations: [
    AppComponent,
    StoreContainerComponent,
    GvsCardComponent,
    IngestionAppComponent,
    AppStoreComponent,
    GvsButtonBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
