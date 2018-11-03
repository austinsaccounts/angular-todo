import { Component } from '@angular/core';
import { Task } from './models/task.model';

@Component({
  selector: 'app-crazy-selector',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'first-angular';
  currentFocus = 'angular homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  tasks: Task[] = [
    new Task('finish angular homework'),
    new Task('brainstorm js group projects'),
    new Task('add readme'),
    new Task('add readme to angular repos')
  ];
}
