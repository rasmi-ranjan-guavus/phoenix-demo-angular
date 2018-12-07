import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
  } from '@angular/router';
import { AppStoreComponent } from './app-store/app-store.component';
import { IngestionAppComponent } from './ingestion-app/ingestion-app.component';

const routes: Routes = [
  { path: 'app', component: AppStoreComponent },
  { path: 'ingestion', component: IngestionAppComponent },
  { path: '', redirectTo: '/app', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
