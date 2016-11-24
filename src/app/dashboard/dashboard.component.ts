import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  books: Book[];
  constructor() { }

  ngOnInit() {
    this.books = [new Book('Angular JS 1', 'AngularJS Tutorial Book', 1), new Book('Angular 2', 'More than just a Framework', 5)];
  }
}
