import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppStoreComponent } from './app-store/app-store.component';
import { AppComponent } from './app.component';
import { CardContainerComponent } from './card-container/card-container.component';
import { GvsButtonBarComponent } from './gvs-button-bar/gvs-button-bar.component';
import { GvsCardComponent } from './gvs-card/gvs-card.component';
import { IconCellRendererComponent } from './ingestion-app/icon-cell-renderer/icon-cell-renderer.component';
import { IngestionAppComponent } from './ingestion-app/ingestion-app.component';
 import { DialogComponent } from './dialog/dialog.component';
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    CardContainerComponent,
    GvsCardComponent,
    IngestionAppComponent,
    AppStoreComponent,
    GvsButtonBarComponent,
    DialogComponent,
    IconCellRendererComponent
  ],
  entryComponents: [
    IconCellRendererComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
