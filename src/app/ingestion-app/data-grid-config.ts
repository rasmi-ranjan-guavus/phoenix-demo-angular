import {
  cloneDeep,
  isNil
  } from 'lodash';
import {
  FAILED,
  FAILED_STARTING,
  FAILED_STOPPING,
  WAITING
  } from './dataset-list-view-constants';
import { IconCellRendererComponent } from './icon-cell-renderer/icon-cell-renderer.component';
import { GRID_START_ROW } from './icon-cell-renderer/icon-cell-renderer.contants';
import {
  DatasetVO,
  GridConfig
  } from './types';

export const statusMap: any = {
  'waiting': 'Waiting',
  'ingesting': 'Ingesting',
  'launching': 'Launching',
  'stopping': 'Stopping',
  'stopped': 'Stopped',
  'failed': 'Failed',
  'ready': 'Ready',
  'ingested': 'Ingested',
  'failed_starting': 'Failed',
  'failed_stopping': 'Failed'
};

function datesetTypeCellRenderer(params) {
  return params.data.type === 'basic' ? 'Streaming' : (params.data.type === 'catalogue' ? 'Catalog' : '');
}


function datesetStatusCellRenderer(params: any): string {
  if (!isNil(params.data) && !isNil(params.data.status)) {
    const status: string = params.data.status;
    return statusMap[status.toLowerCase()];
  } else {
    return '';
  }
}

function datesetStatusCellStyle(params: any): any {
  if (!isNil(params.data) && !isNil(params.data.status)) {
    const status: string = params.data.status;
    return status.toLowerCase() === FAILED || status.toLowerCase() === WAITING || status.toLowerCase() === FAILED_STARTING || status.toLowerCase() === FAILED_STOPPING ? { color: 'red' } : null;
  } else {
    return null;
  }
}

function statsInfoCellRenderer(params): string {

  let str = `<div class='infoRenderContainer'><div class='infoLabelRenderer' title='${params.data.name}' >${params.data.name}</div></div>`;
  if (!isNil(params.data.statsInfo) && params.data.statsInfo !== '') {
    str = `<div class='infoRenderContainer'><div class='infoLabelRenderer' title='${params.data.name}'>${params.data.name}</div><i hidden class='material-icons info-icon' title='${params.data.statsInfo}'>info</i></div>`;
  }
  return str;
}


export const DataGridConfig: GridConfig = {
  gridOptions: {
    enableSorting: true,
    enableColResize: true,
    rowSelection: 'single',
    suppressRowClickSelection: false,
    dateTimeFormat: 'YYYY-MM-DD HH:mm',
    rowHeight: 35,
    headerHeight: 40
  },
  columnDefs: [
    {
      field: 'name',
      headerName: 'Dataset Name',
      suppressMovable: true,
      sortingOrder: ['desc', 'asc'],
      width: 250,
      minWidth: 150,
    },

    {
      field: 'domain',
      headerName: 'Dataset Domain',
      suppressMovable: true,
      sortingOrder: ['desc', 'asc'],
      width: 150,
      minWidth: 150,
    },

    {
      field: 'type',
      headerName: 'Dataset Type',
      suppressMovable: true,
      sortingOrder: ['desc', 'asc'],
      width: 150,
      minWidth: 100,
      cellRenderer: datesetTypeCellRenderer,
    },

    {
      field: 'description',
      headerName: 'Description',
      suppressMovable: true,
      sortingOrder: ['desc', 'asc'],
      width: 300,
      minWidth: 200,
    },

    {
      field: 'dataAvailability',
      headerName: 'Data Availability',
      suppressMovable: true,
      sortingOrder: ['desc', 'asc'],
      width: 300,
      minWidth: 200,
    },

    {
      field: 'creator',
      headerName: 'Creator',
      suppressMovable: true,
      sortingOrder: ['desc', 'asc'],
      width: 100,
      minWidth: 75,
    },

    {
      field: 'status',
      headerName: 'Status',
      suppressMovable: true,
      sortingOrder: ['desc', 'asc'],
      width: 100,
      minWidth: 75,
      cellRenderer: datesetStatusCellRenderer,
      cellStyle: datesetStatusCellStyle,
    },
    {
      field: GRID_START_ROW.fieldName,
      headerName: 'Action',
      width: 100,
      minWidth: 80,
      suppressSorting: true,
      suppressMovable: true,
      cellRendererFramework: IconCellRendererComponent,
      cellStyle: { 'padding-top': '2.5px', 'padding-left': '0px' }
    },
  ]
};
