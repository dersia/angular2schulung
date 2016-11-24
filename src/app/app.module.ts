import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BookModModule } from './book-mod/book-mod.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BookModModule
  ],
  exports: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
