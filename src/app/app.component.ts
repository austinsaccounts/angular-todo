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
    new Task('finish angular homework', 1),
    new Task('brainstorm js group projects', 2),
    new Task('add readme', 3),
    new Task('add readme to angular repos', 3)
  ];
  selectedTask = null;
  priorityColor(currentTask) {
    if (currentTask.priority === 1) {
      return 'low-class';
    }
    if (currentTask.priority === 2) {
      return 'mid-class';
    }
    if (currentTask.priority === 3) {
      return 'high-class';
    }

  }
  editTask(clickedTask) {
    this.selectedTask = clickedTask;
  }

}
