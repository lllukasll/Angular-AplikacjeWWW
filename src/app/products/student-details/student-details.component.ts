import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IStudent } from '../models/student';
import { StudentService } from '../services/students.service';

@Component({
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailComponent implements OnInit {
  pageTitle: string = 'Szczegóły studenta';
  student: IStudent;

  constructor(private studentService: StudentService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;

    this.studentService.getStudents().subscribe(
      students => {
        this.student = students.filter(x => x.studentId === id).pop();
      },
    );
  }

  onBack(): void {
    this.router.navigate(['/students']);
  }
}
