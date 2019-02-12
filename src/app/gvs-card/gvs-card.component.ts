import {
  Component,
  Input,
  OnInit
  } from '@angular/core';
import { getRenderedText } from '@angular/core/src/render3';
import { Router } from '@angular/router';
  import { Location } from '@angular/common';
  import { Card } from './card-data';

@Component({
  selector: 'app-gvs-card',
  templateUrl: './gvs-card.component.html',
  styleUrls: ['./gvs-card.component.scss']
})
export class GvsCardComponent implements OnInit {

  @Input() data: Card;

  constructor(private location: Location, private router: Router) { }

  ngOnInit() {
  }

  handleCardClick(value) {
    this.router.navigate(['/ingestion']);
  }

  getStatusColor(type) {
    type = type.toLowerCase();
    let color;
    switch (type) {
      case  'ready':
      color = 'green';
      break;
      case  'fail':
      color = 'red';
      break;
      case  'waiting':
      color = '#FF8300';
      break;
      case  'ingested':
      color = 'blue';
      break;
    }

    return color;
  }

}
