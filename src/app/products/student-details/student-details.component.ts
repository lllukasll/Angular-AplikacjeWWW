import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IStudent } from '../models/student';

@Component({
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailComponent implements OnInit {
  pageTitle: string = 'Szczegóły studenta';
  student: IStudent;

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.student = {
      'studentId': id,
      'name': 'Adam',
      'surname': 'Kowalski',
      'index': '135827',
      'description': 'Lorem ipsum dolor sit amet enim ... ',
      'pesel': '95123012341',
      'average': 3,
      'imageUrl': '../../assets/images/student3.png'
    };
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}
