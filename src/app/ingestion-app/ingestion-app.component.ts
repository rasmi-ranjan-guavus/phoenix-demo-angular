import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild
  } from '@angular/core';
import { Card } from '../gvs-card/card-data';
  import { HttpClient } from '@angular/common/http';
  import {
    ColDef,
    GridOptions
  } from 'ag-grid';
  import { GridComponent } from '@guavus/ui-kit-grid';
  import { DataGridConfig } from './data-grid-config';
  import { DatasetVO } from './types';
  import { isNil} from 'lodash';

@Component({
  selector: 'app-ingestion-app',
  templateUrl: './ingestion-app.component.html',
  styleUrls: ['./ingestion-app.component.scss']
})
export class IngestionAppComponent implements OnInit, AfterViewInit {

  showGridView = false;
  public data;
  showDialog = false;

  @ViewChild('datagrid') datagrid: GridComponent;

  gridOptions: GridOptions = {
    enableSorting: true,
    enableColResize: true,
    rowSelection: 'single',
    suppressRowClickSelection: false,
    rowHeight: 35,
    headerHeight: 40
  };

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

   inputDateFormat = 'YYYY-MM-DD HH:mm';

   columnDefs;

//    columnDefs = [
//     {headerName: 'Name', field: 'name',  minWidth: 200,
//     width: 120},
//     {headerName: 'Domain', field: 'domain',  minWidth: 100,
//     width: 120 },
//     {headerName: 'Type', field: 'type',  minWidth: 100,
//     width: 120},
//     {headerName: 'Description', field: 'desc',  minWidth: 300,
//     width: 120},
//     {headerName: 'Availability', field: 'price',  minWidth: 200,
//     width: 120},
//     {headerName: 'Creater', field: 'price',  minWidth: 100,
//     width: 120},
//     {headerName: 'Ingested Time', field: 'price',  minWidth: 150,
//     width: 120},
//     {headerName: 'Status', field: 'price',  minWidth: 100,
//     width: 120},
//     {headerName: 'Actions', field: 'price',  minWidth: 100,
//     width: 120}
// ];

rowData;

cardData: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.columnDefs = DataGridConfig.columnDefs;

    this.http
      .get('./data/data.json')
      .toPromise()
      .then((value: any) => {
        this.cardData = this.createCardData(value.response);
        this.rowData = this.datasetResponseParser(value.response);
      });

  }

  ngAfterViewInit() {
    // this.http
    // .get('./phoenix/data/style-data.json')
    // .toPromise()
    // .then((value: any) => {
    //    this.parseStyleData(value);
    // });
  }

  parseStyleData(data: any) {
     const element = document.getElementsByClassName('demo__button');
     const colors = data.list.colors[0];
     const color = colors.colors[1];
     const textColor = colors.colors[0];
     Object(element[0]).style.backgroundColor = color.value;
     Object(element[0]).style.color = textColor.value;
  }

  datasetResponseParser(response: any[]): DatasetVO[] {
    const result: DatasetVO[] = [];
    response.forEach(element => {
      const item: DatasetVO = {
        id: element.id,
        name: element.name,
        description: element.description,
      };
      const prop: any = element.properties;

      item.type = !isNil(prop.type) ? prop.type : '';
      item.domain = !isNil(prop.domainName) ? prop.domainName : '';
      item.creator = !isNil(prop.owner) ? prop.owner : '';
      item.status = !isNil(prop.status) ? prop.status : '';
      item.dataAvailability = this.getDatasetTimeRange(element);
      item.enablePlay = !isNil(prop.enablePlay) ? prop.enablePlay : false;
      item.statsInfo = this.getStatsInfo(prop);
      result.push(item);
    });

    return result;

  }

  getDatasetTimeRange(selectedDataset: any): string {
    if (!isNil(selectedDataset)) {
      // set time
      let startTime, endTime;
      if (selectedDataset.properties.hasOwnProperty('startTime')) {
        startTime = Number(selectedDataset.properties['startTime']);
        startTime = startTime === -1 ? undefined : startTime ;
      }

      if (selectedDataset.properties.hasOwnProperty('endTime')) {
        endTime = Number(selectedDataset.properties['endTime']);
        endTime = endTime === -1 ? undefined : endTime ;
      }

      const minDate = new Date();
      minDate.setUTCSeconds(startTime);
      const maxDate = new Date();
      maxDate.setUTCSeconds(endTime);

      return this.getTimeRangeStr(minDate, maxDate);
    }
  }

   formatDate(date) {
    const monthNames = [
      'January', 'February', 'March',
      'April', 'May', 'June', 'July',
      'August', 'September', 'October',
      'November', 'December'
    ];
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }

  getTimeRangeStr(startTime: any, endTime: any): string {
    let result = '';
    if (isNil(startTime) || isNil(endTime)) {
      result = 'NA';
    } else {
      result = this.formatDate(startTime) + ' - ' + this.formatDate(endTime);
    }
    return result;
  }

  getStatsInfo(value: any): string {
    let result = '';
    if (isNil(value)) {
      return result;
    }
    if (!isNil(value.totalRecords)) {
      result += 'Total Records: ' + value.totalRecords + '\n';
    }

    if (!isNil(value.peakKfps)) {
      result += 'Peak Kfps: ' + value.peakKfps + '\n';
    }

    if (!isNil(value.averageKfps)) {
      result += 'Average Kfps: ' + value.averageKfps + '\n';
    }

    if (!isNil(value.success)) {
      result += 'Success: ' + value.success + '\n';
    }

    if (!isNil(value.error)) {
      result += 'Error: ' + value.error;
    }

   return result;
  }

  createGridData(source) {
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

  onGridReady(event) {

    this.data = this.rowData;

    if (this.datagrid.gridOptions.api) {
      this.datagrid.gridOptions.api.sizeColumnsToFit();
      this.datagrid.gridOptions.api.hideOverlay();

      this.datagrid.gridOptions.api.resetRowHeights();
      this.datagrid.gridOptions.api.refreshCells();
      this.datagrid.gridOptions.api.refreshHeader();
    }
  }

  showPopup() {
    this.showDialog = !this.showDialog;
    setTimeout(() => {
      this.showDialog = !this.showDialog;
    }, 3000);
  }


}
