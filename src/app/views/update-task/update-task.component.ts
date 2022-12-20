import { Component, OnInit } from '@angular/core';
import { Task } from '../../shared/model/task.model';
import { TaskService } from '../../shared/service/task.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {

  id: number;
  task: Task;
  submitted = false;


  constructor(private route: ActivatedRoute,private router: Router,
    private taskService: TaskService) { }

  ngOnInit() {
    this.task = new Task();

    this.id = this.route.snapshot.params['id'];
    
    this.taskService.getTask(this.id)
      .subscribe(data => {
        console.log(data)
        this.task = data;
      }, error => console.log(error));
  }

  updateTask() {
    let newDate: moment.Moment = moment.utc(this.task.date).local();
    this.task.date = newDate.format("YYYY-MM-DD");

    this.taskService.updateTask(this.id, this.task)
      .subscribe(data => console.log(data), error => console.log(error));
    this.task = new Task();
    this.gotoList();
  }

  onSubmit() {
    this.updateTask();    
  }

  gotoList() {
    this.router.navigate(['/tasks']);
  }
}
