import { Component, input, output } from '@angular/core';

type buttonType = 'submit' | "button"

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss'
})

export class Button {
  isDisable = input<boolean>(false);
  text = input<string>('click');
  type = input<buttonType>("button");
  onClick = output<void>();
}
