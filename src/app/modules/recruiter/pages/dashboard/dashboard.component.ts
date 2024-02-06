import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent {
  isSideBarActive: boolean = JSON.parse((localStorage.getItem("sidebarActive") as string));

  setSideBarActive() {
    this.isSideBarActive = !this.isSideBarActive;
    localStorage.setItem("sidebarActive", JSON.stringify(this.isSideBarActive));
  }
}
