import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TaskService } from 'src/app/shared/service/task.service';
import { TaskListComponent } from '../task-list/task-list.component';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.css']
})
export class AlertModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data: 
    {taskService: TaskService, taskId: number, taskListComponent: TaskListComponent},
    private matDialogRef: MatDialogRef<AlertModalComponent>) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.matDialogRef.close();
  }

  onClose() {
    this.matDialogRef.close();
  }

  onConfirm() {
    this.data.taskService.deleteTask(this.data.taskId)
      .subscribe(
        data => {
          console.log(data);
          this.data.taskListComponent.reloadData();
        },
        error => console.log(error));
    this.onClose();
  }

}
