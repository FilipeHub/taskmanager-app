import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule } from '@angular/material/card';
import {MatDividerModule } from '@angular/material/divider';
import {MatChipsModule } from '@angular/material/chips';
import {MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule } from '@angular/material/icon';
import {MatTabsModule } from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { CreateTaskComponent } from './views/create-task/create-task.component';
import { TaskListComponent } from './views/task-list/task-list.component';
import { UpdateTaskComponent } from './views/update-task/update-task.component';
import { TaskDetailsComponent } from './views/task-details/task-details.component';
import { AlertModalComponent } from './views/alert-modal/alert-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateTaskComponent,
    TaskListComponent,
    UpdateTaskComponent,
    TaskDetailsComponent,
    AlertModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDividerModule,
    MatChipsModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatTabsModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [AlertModalComponent]
})
export class AppModule { }
