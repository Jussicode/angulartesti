import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { IDataItem } from '../idata-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  items : IDataItem[] = [] 
  constructor(private backend : BackendService,
    private router: Router) { }

  ngOnInit(): void {
    this.items = this.backend.getItems();
  }

  reset() 
  { 
    this.backend.reset();
    this.items = [];
  }
  switchPage2()
  { 
    this.router.navigate(['/add']);
  }
}
