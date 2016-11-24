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

  sortMyBooks(evt:Book = undefined){
     this.books.sort((a,b) =>  b.rating - a.rating);
  }

  addBook(title, description){
    this.books.push(new Book(title.value,description.value));
  }

  deleteBook(i) {
    this.books.splice(i, 1);
  }

  ngOnInit() {
    this.books = [new Book('Angular JS 1', 'AngularJS Tutorial Book', 1), new Book('Angular 2', 'More than just a Framework', 5)];
    this.sortMyBooks();
  }
}
