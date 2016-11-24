import { NgModule } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { BookComponent } from '../book/book.component';
import { CreateBookComponentComponent } from '../create-book-component/create-book-component.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    DashboardComponent,
    BookComponent,
    CreateBookComponentComponent
  ],
  imports: [
     BrowserModule,
     FormsModule,
     HttpModule
  ],
  exports: [DashboardComponent, BookComponent, CreateBookComponentComponent],
  providers: [],
  bootstrap: [DashboardComponent]
})
export class BookModModule { }
