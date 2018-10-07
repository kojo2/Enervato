import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { BsDatepickerConfig } from '../../../node_modules/ngx-bootstrap/datepicker';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  startDate: Date;
  tasks;

  newTask;

  constructor( private service:ProjectsService) { }

  ngOnInit() {
    this.startDate = new Date();
    this.tasks = this.service.getTasksForProject();
    document.getElementById("newTask").addEventListener("keyup",(e)=>{
      if(e.keyCode==13){
        this.service.addTask(this.newTask,5,this.startDate);
        this.newTask = "";
      }
    });
  }

  doneChange(taskId) {
    this.tasks[taskId-1].done = true;
  }



}
