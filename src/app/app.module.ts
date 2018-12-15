import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppStoreComponent } from './app-store/app-store.component';
import { AppComponent } from './app.component';
import { CardContainerComponent } from './card-container/card-container.component';
import { GvsButtonBarComponent } from './gvs-button-bar/gvs-button-bar.component';
import { GvsCardComponent } from './gvs-card/gvs-card.component';
import { IngestionAppComponent } from './ingestion-app/ingestion-app.component';


@NgModule({
  declarations: [
    AppComponent,
    CardContainerComponent,
    GvsCardComponent,
    IngestionAppComponent,
    AppStoreComponent,
    GvsButtonBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
