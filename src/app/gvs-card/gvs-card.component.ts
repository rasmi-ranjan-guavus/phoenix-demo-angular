import {
  Component,
  Input,
  OnInit
  } from '@angular/core';
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

}
