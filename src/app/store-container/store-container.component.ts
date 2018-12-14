import {
  Component,
  Input,
  OnInit
  } from '@angular/core';

@Component({
  selector: 'app-store-container',
  templateUrl: './store-container.component.html',
  styleUrls: ['./store-container.component.scss']
})
export class StoreContainerComponent implements OnInit {

  @Input() data: Array<Object> = [];

  constructor() { }

  ngOnInit() {
  }

}
