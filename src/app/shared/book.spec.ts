import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Book } from './book';

describe('Rating a book', () => {
  let book: Book;

  beforeEach(() => {
      book = new Book('Test1', 'Test2', 1);
    });

  it('should not be allowed to have a rating greater than 5', () => {

  });
  it('should not be possible to have a rating smaller than 0', () => {

  });
});
