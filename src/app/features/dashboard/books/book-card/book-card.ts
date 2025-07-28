import { Component, Input, input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BookCardModel } from '../../../../models/books.model';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.html',
  standalone: false,
  styleUrl: './book-card.scss'
})
export class BookCard implements OnChanges, OnInit {
  book = input.required<BookCardModel>()

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
    console.log(this.book)
  }
}
