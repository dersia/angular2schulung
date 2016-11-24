import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Book} from '../shared/book';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book: Book;
  @Output() rated: EventEmitter<Book> = new EventEmitter<Book>();
  @Output() delete: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  rateUP(){
    this.book.rateUP();
    this.rated.emit(this.book);
  }
  rateDown(){
    this.book.rateDown();
    this.rated.emit(this.book);
  }

  deleteBook(){
    this.delete.emit();
  }

  ngOnInit() {
  }

}
