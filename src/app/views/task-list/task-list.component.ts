import { TaskDetailsComponent } from '../task-details/task-details.component';
import { Observable } from "rxjs";
import { Task } from '../../shared/model/task.model';
import { TaskService } from '../../shared/service/task.service';
import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { AlertModalComponent } from '../alert-modal/alert-modal.component';

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["./task-list.component.css"]
})
export class TaskListComponent implements OnInit {
  tasks: Observable<Task[]>;

  // deleteModalRef: BsModalRef;
  // @ViewChild('deleteModal') deleteModal;

  constructor(private taskService: TaskService,
    public dialog: MatDialog,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  // function compare( a, b ) {
    //   if ( a.presentationOrder < b.presentationOrder ){
    //     return -1;
    //   }
    //   if ( a.presentationOrder > b.presentationOrder ){
    //     return 1;
    //   }
    //   return 0;
    // }

    // let orderTasks:Task[] = null;
    // this.taskService.getTasksList().subscribe(
    //   tasks => {
    //     orderTasks = tasks as Task[];
    //   }
    // )
    // orderTasks.sort( compare );
    
  reloadData() {
    this.tasks = this.taskService.getTasksList();
  }

  deleteTask(id: number) {
    const dialogRef = this.dialog.open(AlertModalComponent, {
      data: {taskService: this.taskService, taskId: id, taskListComponent: this},
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  taskDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateTask(id: number){
    this.router.navigate(['update', id]);
  }
}
