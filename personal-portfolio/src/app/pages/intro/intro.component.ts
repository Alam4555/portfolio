import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css'
})
export class IntroComponent implements OnInit {

  texts: string[] = [
    'PHP Developer',
    'Laravel | Yii2 | CakePHP Developer',
    'Angular Developer'
  ];

  currentText = '';

  private textIndex = 0;
  private charIndex = 0;

  ngOnInit(): void {
    this.typeEffect();
  }

  currentYear = new Date().getFullYear();

  typeEffect(): void {

    const currentWord = this.texts[this.textIndex];

    if (this.charIndex < currentWord.length) {

      this.currentText += currentWord.charAt(this.charIndex);
      this.charIndex++;

      setTimeout(() => this.typeEffect(), 120);

    } else {

      setTimeout(() => {

        this.currentText = '';
        this.charIndex = 0;
        this.textIndex = (this.textIndex + 1) % this.texts.length;

        this.typeEffect();

      }, 1500);

    }
  }
}