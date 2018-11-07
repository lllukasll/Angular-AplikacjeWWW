import { NgModule } from '@angular/core';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentDetailComponent } from './student-details/student-details.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'students', component: StudentsListComponent },
      {
        path: 'student/:id',
        component: StudentDetailComponent
      },
    ]),
    SharedModule
  ],
  declarations: [
    StudentsListComponent,
    StudentDetailComponent,
    ConvertToSpacesPipe
  ]
})
export class StudentModule { }
