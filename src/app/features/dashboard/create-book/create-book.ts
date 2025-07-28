import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-book',
  imports: [ReactiveFormsModule],
  templateUrl: './create-book.html',
  styleUrl: './create-book.scss'
})
export class CreateBook {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      image: ['', Validators.required],
      genre: ['', Validators.required],
      author: ['', Validators.required],
      publishData: ['', Validators.required],
      enteredPrice: ['', Validators.required]
    })
  }

  onSubmit() {

  }

}
