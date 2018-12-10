import {
  Component,
  OnInit
  } from '@angular/core';

@Component({
  selector: 'app-ingestion-app',
  templateUrl: './ingestion-app.component.html',
  styleUrls: ['./ingestion-app.component.scss']
})
export class IngestionAppComponent implements OnInit {

  showGridView = false;

  links: any[] = [ {
       index: 0,
       label: '',
       disabled: false,
       description: '',
       iconClass: 'apps'
     },  {
      index: 1,
       label: '',
       disabled: false,
      description: '',
      iconClass: 'menu'
     }
   ];

   columnDefs = [
    {headerName: 'Make', field: 'make' },
    {headerName: 'Model', field: 'model' },
    {headerName: 'Price', field: 'price'}
];

rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
];

  constructor() { }

  ngOnInit() {
  }

  onViewSelectionChange(value) {
     this.showGridView = value === 0 ? false : true;
  }

}
