import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isAddOpen = false;
  
  constructor(
  ) { }

  ngOnInit(): void {
  }

  toggleOpen() {
    this.isAddOpen = !this.isAddOpen;
    console.log(this.isAddOpen);
  }
}
