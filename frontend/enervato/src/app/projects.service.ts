import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projectArray = ["project1","project2","project3"];

  tasks = [
    {
      id: 1,
      task:"Eat salad",
      startDate:new Date(2018, 9, 1),
      duration:10,
      done: false      
    },
    {
      id:2,
      task:"Eat pig",
      startDate:new Date(2018, 9, 2),
      duration: 7,
      done: false      
    },
    {
      id:3,
      task:"Eat chicken",
      startDate:new Date(2018, 8, 28),
      duration: 5,
      done: false      
    }
  ];

  constructor() { }

  get() {
    return this.projectArray;
  }

  getTasksForProject() {
      return this.tasks;
  }

  addTask(taskName,duration,date){
    var id = this.tasks.length+1;
    if(!date)
      date = new Date(2018, 9, 25);
    this.tasks.push({id:id,task:taskName,startDate:date, duration:duration, done:false});
    return true;
  }
}
