import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmissionListHeaderComponent } from './submission-list-header/submission-list-header.component';
import { SubmissionsRoutingModule } from './submission-routing';
import { SubmissionListDataComponent } from './submission-list-data/submission-list-data.component';

import { CustomFilterPipe } from '../custom-filter.pipe';
import {NgxPaginationModule} from 'ngx-pagination';

import { FormsModule } from '@angular/forms';

import { AssigneeModule } from '../assignee/assignee.module';

@NgModule({
  imports: [
    CommonModule,SubmissionsRoutingModule,FormsModule,NgxPaginationModule,AssigneeModule

  ],
  declarations: [SubmissionListHeaderComponent, SubmissionListDataComponent,CustomFilterPipe]
})
export class SubmissionListModule {


 }
