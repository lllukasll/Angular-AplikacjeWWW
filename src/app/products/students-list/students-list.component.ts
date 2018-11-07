import { Component, OnInit } from '@angular/core';
import { IStudent } from '../models/student';
import { StudentService } from '../services/students.service';

@Component({
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  pageTitle: string = 'Lista studentów';
  imageWidth: number = 100;
  imageMargin: number = 2;
  showImage: boolean = true;
  errorMessage: string;

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredStudents = this.listFilter ? this.performFilter(this.listFilter) : this.students;
  }

  filteredStudents: IStudent[];
  students: IStudent[] = [];

  constructor(private productService: StudentService) {

  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }

  performFilter(filterBy: string): IStudent[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.students.filter((product: IStudent) =>
      product.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.productService.getStudents().subscribe(
      products => {
        this.students = products;
        this.filteredStudents = this.students;
      },
      error => this.errorMessage = <any>error
    );
  }
}
