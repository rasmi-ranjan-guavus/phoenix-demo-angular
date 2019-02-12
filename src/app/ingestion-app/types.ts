import { ColDef, ColGroupDef } from "ag-grid";

export interface GridConfig {
    gridOptions: any;
    columnDefs: (ColDef | ColGroupDef)[];
  }

export interface DatasetVO {
    id?:number;
    name?: string;
    domain?:string
    type?: string;
    description?:string;
    dataAvailability?:string;
    startTime?:string;
    endTime?:string;
    creator?: string;
    status?: string;
    enablePlay?:boolean;
    statsInfo?:string;
   // operation?: string;
  }