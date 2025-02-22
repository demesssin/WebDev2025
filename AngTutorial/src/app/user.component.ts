import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  template: `
    <p>The user's name is {{ name }}</p>
    <p>Preferred Framework:</p>
    <ul>
      <li>
        Static Image:
        <img src="https://cdn.otus.ru/media/private/a8/b6/1_cGDDA2mfYkjiIhGaN8gDoA_1-20219-a8b6ca.png?hash=DS_RdrEaTj6nzLbWhSjahQ&expires=1670703795"
             alt="Angular Logo" width="32" height="32"/>
      </li>
      <li>
        Dynamic Image:
        <img [src]="logoUrl" [alt]="logoAlt" width="32" height="32" />
      </li>
    </ul>

    <p>Username: {{ name }}</p>
    <p>{{ name }}'s favorite framework: {{ favoriteFramework }}</p>

    <label for="framework">
      Favorite Framework:
      <input id="framework" type="text" [(ngModel)]="favoriteFramework" />
    </label>
  `,
  imports: [NgOptimizedImage, FormsModule, CommonModule],
})
export class UserComponent {
  @Input() name = '';
  @Input() favoriteFramework = '';

  logoUrl = "https://avatars.mds.yandex.net/i?id=60c41fd52cf74debc680f923157d559e36e0c3d3-5236515-images-thumbs&n=13";
  logoAlt = "TSlogo";
}
