import { Component, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DashboardService } from '../services/dashboard/dashboard.service';

@Component({
  selector: 'app-create-book',
  imports: [ReactiveFormsModule],
  templateUrl: './create-book.html',
  styleUrl: './create-book.scss'
})
export class CreateBook {
  form!: FormGroup;

  constructor(private fb: FormBuilder, private dashboardService: DashboardService) {
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
    if (this.form.invalid) return;

    const formSnapShot = this.form;

    console.log(formSnapShot);
    this.dashboardService.addBook(formSnapShot.value);
  }

}
