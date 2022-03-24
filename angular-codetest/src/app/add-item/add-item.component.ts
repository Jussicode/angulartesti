import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { DataItem } from '../data-item';
import { Router } from '@angular/router'
import { reduce } from 'rxjs';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  item: DataItem = new DataItem(); 

  constructor(
    public backend : BackendService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.backend.insert(this.item.label, this.item.value, this.item.height, this.item.length);
    this.router.navigate(['/dashboard']);
  }

  switchPage(): void {
    this.router.navigate(['/dashboard']);
  }

  onSubmitGenerate(): void {

    if (this.item.length > this.item.height && this.item.length > this.backend.getMinimunValue() ) 
    {
        this.item.value = this.item.length + this.item.height;
    } 
    else if ( this.item.length < this.item.height)
    {
      this.item.value = this.backend.getMinimunValue() + this.item.length; 
    }

    else
    {
      let sum: number = 0;

      this.backend.getItems().forEach(a => sum += a.value);

      if (this.backend.getMinimunValue() <= sum)
      {
        this.item.value = sum;
      }
      else 
      {
        this.item.value = this.backend.getMinimunValue();
      }
    }

    
}

}


