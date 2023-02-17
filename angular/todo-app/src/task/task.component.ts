import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  taskName: string;
  priority: string;
  tasks: TaskComponent[];
  done: boolean;

  constructor() {
    this.taskName = '';
    this.priority = '';
    this.tasks = [];
    this.done = false;
  }

  setValue(inputTask:string, priority:string) {
    let task = new TaskComponent();
    task.taskName = inputTask;
    task.priority = priority;

    this.tasks.push(task);

    inputTask = '';
    priority = '';
  }

  deleteValue(index:number) {
    this.tasks.splice(index);
  }

  changeStatus(task: TaskComponent) {
    task.done = true;
  }
}
