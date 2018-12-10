import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
  } from '@angular/core';

@Component({
  selector: 'gvs-button-bar',
  templateUrl: './gvs-button-bar.component.html',
  styleUrls: ['./gvs-button-bar.component.scss']
})
export class GvsButtonBarComponent implements OnInit {

  /**
   * The data-binding value of the input tag, data points required to show items
   */
  @Input() views: Array<Object> = [];

  /**
    * The data-binding value of the output tag, emited while any item is selected.
    */
  @Output() selectionChanged = new EventEmitter(true);

  selectedView: any;

  private _selectedIndex = '';

  /**
   * constructor
   */
  constructor() {
  }

  ngOnInit() {
  }

  get selectedIndex(): string {
    return this._selectedIndex;
  }

  /**
    * The data-binding value of the input tag, selected mode shows currently selected item
    @param value  selected item
    */
  @Input('selectedIndex')
  set selectedIndex(value: string) {
    this._selectedIndex = value;
    this.setSelectedView(this._selectedIndex);
  }


  /**
    * on selection of a item, this function sets selectedView, dispatches event
    * @param event  selected item
    * @param view currently selected view
    */
  onSelectView(event: any, view: any) {

    const currentTarget: any = event.currentTarget;
    console.log(currentTarget.className + ' nn before ' + currentTarget.className.search(' active'));
    if (currentTarget && currentTarget.className.search(' active') < 0) {
     console.log(currentTarget + ' nn ' + view);
      this.selectedView = view;
      this.selectedIndex = view.index;

      this.selectionChanged.emit(view.index);
    }

  }

  /**
    * sets the currently selected item, sets selectedView
    * @param mode  selected item
    */
  setSelectedView(index: any) {
    const filterArray: Array<any> = this.views.filter(item => item['index'] === index);
    if (filterArray && filterArray.length > 0) {
      console.log(filterArray[0].index + ' setSelectedView ' + index);
      this.selectedView = filterArray[0];
    }
  }


}
