import { Component, OnInit } from '@angular/core';
import CalendarDates from "../../../node_modules/calendar-dates";
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  dates = [];
  datesArr = [];
  days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  tasks;
  calendarDates;
  currentDate;
  currentMonth;
  currentYear;

  constructor(private service:ProjectsService) { }

  ngOnInit() {
    var d = new Date();
    this.currentDate = d;
    var n = d.getMonth();
    this.currentMonth = n;
    let y = new Date();
    this.currentYear = y.getFullYear();
    this.setupCalendar();
    this.getData();
  }

  setupCalendar() {
    this.calendarDates = new CalendarDates();
    let i = 0;
    this.main(i,this.calendarDates);
  }

  main = async (i,calendarDates) => {
    for (const meta of await calendarDates.getDates(new Date())) {
      this.dates.push({ date: meta, day: this.days[i],tasks:[] });
      i < 6 ? i++ : i = 0;
    }
    this.dates.shift();
    let num = this.dates[this.dates.length - 1].date.date + 1;
    let d = this.dates[this.dates.length - 1].day;

    let o = { date: num, type: "next" };
    let obj = { date: o, day: d };
    this.dates.push(obj);

    // go through each date 
    let counter = 0;
    this.dates.forEach((date)=>{
      // go through each project
        // this.projects.forEach((project)=>{
          // go through each task in project
          this.tasks.forEach((task)=>{
            let taskName = task.task;
            let dayNumber = date.date.date;
            let startDate = task.startDate;
            let duration = task.duration;
            let done = task.done;
            let thisDate = new Date(this.currentYear,this.currentMonth,dayNumber,);
            //check if current day is between the beginning and end dates for that task
            let endDate = this.addDays(startDate,duration);
            if(thisDate>=startDate && thisDate<=endDate){
              if(date.tasks)
                date.tasks.push(taskName);
            }
          });
        // });
        counter++;
     });

  };

  addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  getData() {
    this.tasks = this.service.getTasksForProject();
    console.log(this.tasks);
    
  }
}


