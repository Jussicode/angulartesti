import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { IDataItem } from '../idata-item';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  items : IDataItem[] = [] 
  constructor(private backend : BackendService) { }

  ngOnInit(): void {
    this.items = this.backend.getItems();
  }

  reset() 
  { 
    this.backend.reset();
    this.items = [];
  }
}
