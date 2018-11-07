import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  pageTitle: string = 'Lista studentów';

  constructor() {

  }
  ngOnInit(): void {
  }
}
