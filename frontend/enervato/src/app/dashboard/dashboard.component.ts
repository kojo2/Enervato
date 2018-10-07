import { Component, OnInit } from '@angular/core';

import { ProjectsService } from '../projects.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  projects;

  constructor(private service:ProjectsService) { }

  ngOnInit() {
  }

}
