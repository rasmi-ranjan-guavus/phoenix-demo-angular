import {
  Component,
  OnInit
  } from '@angular/core';
import { Router } from '@angular/router';
  import { Location } from '@angular/common';

@Component({
  selector: 'app-gvs-card',
  templateUrl: './gvs-card.component.html',
  styleUrls: ['./gvs-card.component.scss']
})
export class GvsCardComponent implements OnInit {

  constructor(private location: Location, private router: Router) { }

  ngOnInit() {
  }

  handleCardClick(value) {
    this.router.navigate(['/ingestion']);
  }

}
