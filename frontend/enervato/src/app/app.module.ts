import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectsService } from './projects.service';
import { ProjectCarouselComponent } from './project-carousel/project-carousel.component';
import { TaskListComponent } from './task-list/task-list.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DatepickerModule, BsDatepickerModule } from '../../node_modules/ngx-bootstrap/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProjectCarouselComponent,
    TaskListComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot([
      {
        path:'',
        component: DashboardComponent
      },
      {
        path:'project',
        component:TaskListComponent
      },
      {
        path: 'calendar',
        component: CalendarComponent
      }
    ])
  ],
  providers: [ProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }


