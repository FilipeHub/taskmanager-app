import { Task } from '../../shared/model/task.model';
import { TaskService } from '../../shared/service/task.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  task: Task = new Task();
  submitted = false;

  constructor(private taskService: TaskService,
    private router: Router) { }

  ngOnInit() {
  }

  newTask(): void {
    this.submitted = false;
    this.task = new Task();
  }

  save() {
    let newDate: moment.Moment = moment.utc(this.task.date).local();
    this.task.date = newDate.format("YYYY-MM-DD");
    
    this.taskService.createTask(this.task)
      .subscribe(data => console.log(data), error => console.log(error));
    this.task = new Task();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
    this.gotoList();
  }

  gotoList() {
    this.router.navigate(['/tasks']);
  }
}
