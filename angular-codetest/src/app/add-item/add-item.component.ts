import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { DataItem } from '../data-item';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  item: DataItem = new DataItem(); 

  constructor(
    public backend : BackendService
  ) { }

  ngOnInit(): void {
  }
}
