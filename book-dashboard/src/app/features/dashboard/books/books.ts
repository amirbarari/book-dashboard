import { Component, OnInit, signal } from '@angular/core';

import { BookCardModel } from '../../../models/books.model';
import { DashboardService } from '../services/dashboard/dashboard.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.html',
  styleUrl: './books.scss',
  standalone: false
})

export class Books implements OnInit {

  constructor(private bookService: DashboardService) { }

  books = signal<BookCardModel[]>([])

  ngOnInit() {
    this.books.set(this.bookService.books);
    console.log(this.books)
  }
}
