import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'app-create-book-component',
  templateUrl: './create-book-component.component.html',
  styleUrls: ['./create-book-component.component.css']
})
export class CreateBookComponentComponent implements OnInit {
  @Output() create: EventEmitter<Book> = new EventEmitter<Book>();

  addBook(title, description){
    let book: Book = new Book(title.value, description.value);
    this.create.emit(book);
  }

  constructor() { }

  ngOnInit() {
  }

}
