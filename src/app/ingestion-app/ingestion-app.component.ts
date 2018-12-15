import {
  Component,
  OnInit
  } from '@angular/core';
import { Card } from '../gvs-card/card-data';
  import { HttpClient } from '@angular/common/http';

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

cardData: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.http
      .get('./data/data.json')
      .toPromise()
      .then((value: any) => {
        this.cardData = this.createCardData(value.response);
      });
  }

  createCardData(source) {
    const result = [];

    source.forEach(element => {
       const item: Card = {} as Card;
       item.id = element.id;
       item.name = element.name;
       item.desc = element.description;
       item.iconClass = 'dashboard';
       item.data = {};
       item.data.status = element.properties.status;

       result.push(item);
    });

    return result;
  }

  onViewSelectionChange(value) {
     this.showGridView = value === 0 ? false : true;
  }

}
