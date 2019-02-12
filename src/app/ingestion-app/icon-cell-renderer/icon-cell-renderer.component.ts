import {
  Component,
  OnInit
  } from '@angular/core';
import {
  ColDef,
  GridCellDef
  } from 'ag-grid';
import { AgRendererComponent } from 'ag-grid-angular';
import {
  cloneDeep,
  isNil
  } from 'lodash';
import {
  GRID_DELETE_ROW,
  GRID_EDIT_ROW,
  GRID_LAUNCHING_ROW,
  GRID_START_ROW,
  GRID_STOP_ROW
  } from './icon-cell-renderer.contants';
import { IconRenderOptions } from './types';
import {
  FAILED,
  FAILED_STARTING,
  FAILED_STOPPING,
  INGESTING,
  LAUNCHING,
  READY,
  STOPPED,
  STOPPING,
  WAITING
  } from '../dataset-list-view-constants';
import { DatasetVO } from '../types';



@Component({
  // tslint:disable-next-line:component-selector
  selector: 'icon-cell-renderer-component',
  templateUrl: 'icon-cell-renderer.component.html',
  styleUrls: ['icon-cell-renderer.component.scss']
})
export class IconCellRendererComponent {

  iconRenderOptions: IconRenderOptions;
  icon: string;
  displayIcon = false;
  constructor() { }

  agInit(params: { colDef: ColDef, data: DatasetVO }): void {
    switch (params.colDef.field) {
      case GRID_DELETE_ROW.fieldName: {
        this.iconRenderOptions = GRID_DELETE_ROW;
        break;
      }

      case GRID_EDIT_ROW.fieldName: {
        this.iconRenderOptions = GRID_EDIT_ROW;
        break;
      }

      case GRID_START_ROW.fieldName:
      case GRID_STOP_ROW.fieldName:
      {
        if (!isNil(params.data) && params.data.enablePlay) {
          if (params.data.status.toLowerCase() === WAITING
          || params.data.status.toLowerCase() === INGESTING
          || params.data.status.toLowerCase() === FAILED_STOPPING) {
            this.iconRenderOptions = GRID_STOP_ROW;
          } else if (params.data.status.toLowerCase() === STOPPED
          || params.data.status.toLowerCase() === FAILED
          || params.data.status.toLowerCase() === READY
          || params.data.status.toLowerCase() === FAILED_STARTING ){
            this.iconRenderOptions = GRID_START_ROW;
          } else if (params.data.status.toLowerCase() === LAUNCHING
          || params.data.status.toLowerCase() === STOPPING) {
            this.iconRenderOptions = GRID_LAUNCHING_ROW;
          }
        }
        break;
      }
    }

    if (!isNil(this.iconRenderOptions)) {
      this.icon = this.iconRenderOptions.icon;
      this.displayIcon = true;
    } else {
      this.displayIcon = false;
    }

  }

  onIconMouseOver(over: boolean): void {
    this.icon = (over) ? this.iconRenderOptions.iconOver : this.iconRenderOptions.icon;
  }
}

