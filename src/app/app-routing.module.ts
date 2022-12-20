import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTaskComponent } from './views/create-task/create-task.component';
import { TaskDetailsComponent } from './views/task-details/task-details.component';
import { TaskListComponent } from './views/task-list/task-list.component';
import { UpdateTaskComponent } from './views/update-task/update-task.component';

const routes: Routes = [
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },
  { path: 'tasks', component: TaskListComponent },
  { path: 'add', component: CreateTaskComponent },
  { path: 'update/:id', component: UpdateTaskComponent },
  { path: 'details/:id', component: TaskDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
