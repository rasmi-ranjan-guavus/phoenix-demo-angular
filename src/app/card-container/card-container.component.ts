import {
  Component,
  Input,
  OnInit
  } from '@angular/core';

@Component({
  selector: 'gvs-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.scss']
})
export class CardContainerComponent implements OnInit {

  @Input() cardData: Array<Object> = [];

  constructor() { }

  ngOnInit() {
  }

}
