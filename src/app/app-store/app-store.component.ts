import {
  Component,
  OnInit
  } from '@angular/core';

@Component({
  selector: 'app-app-store',
  templateUrl: './app-store.component.html',
  styleUrls: ['./app-store.component.scss']
})
export class AppStoreComponent implements OnInit {

  storeData = [
    {
      id: '1',
      name: 'Alert Inbox',
      desc: 'Demesne far hearted suppose venture excited see had has. Dependent on so extremely delivered by.',
      iconClass: 'warning',
      bgColor: '#039BE5'

    },
    {
      id: '2',
      name: 'Alert Dashboard',
      desc: 'Demesne far hearted suppose venture excited see had has. Dependent on so extremely delivered by.',
      iconClass: 'security',
      bgColor: '#5AA700'

    },
    {
      id: '3',
      name: 'Launchboard',
      desc: 'Demesne far hearted suppose venture excited see had has. Dependent on so extremely delivered by.',
      iconClass: 'layers',
      bgColor: '#E0182D'

    },
    {
      id: '4',
      name: 'Data Playbook',
      desc: 'Demesne far hearted suppose venture excited see had has. Dependent on so extremely delivered by.',
      iconClass: 'dns',
      bgColor: '#EFC100'

    },
    {
      id: '5',
      name: 'Ingestion App',
      desc: 'Demesne far hearted suppose venture excited see had has. Dependent on so extremely delivered by.',
      iconClass: 'dashboard',
      bgColor: '#8E24AA'
    },
    {
      id: '6',
      name: 'Search App',
      desc: 'Demesne far hearted suppose venture excited see had has. Dependent on so extremely delivered by.',
      iconClass: 'search',
      bgColor: '#3949AB'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
