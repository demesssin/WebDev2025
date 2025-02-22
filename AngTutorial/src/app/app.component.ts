import { Component } from '@angular/core';
import { UserComponent} from './user.component';
import { RouterOutlet } from '@angular/router';
import {ChildComponent} from './child.component';
import {CommentsComponent} from './comments.component';
import {RouterLink} from '@angular/router';


@Component({
  selector: 'app-root',
  styleUrls: ['app.component.css'],
  template: `
    <section (mouseover)="onMouseOver()">
        There's a secret message for you, hover to reveal!:
      {{message}}
    </section>
    <div [contentEditable]="isEditable">Этот текст можно редактировать!</div>
    <app-user name="Simran" />
    <app-child (addItemEvent)="addItem($event)" />
    <p>🐢 all the way down {{ items.length }}</p>
    <div>
      <h1>How i feel about Angular</h1>
      <article>
        <p>Angular is my favorite framework, and this is why. Angular has the coolest deferrable view feature that makes defer loading content the easiest and most ergonomic it could possibly be. The Angular community is also filled with amazing contributors and experts that create excellent content. The community is welcoming and friendly, and it really is the best community out there.</p>
        <p>I can't express enough how much I enjoy working with Angular. It offers the best developer experience I've ever had. I love that the Angular team puts their developers first and takes care to make us very happy. They genuinely want Angular to be the best framework it can be, and they're doing such an amazing job at it, too. This statement comes from my heart and is not at all copied and pasted. In fact, I think I'll say these exact same things again a few times.</p>
        <p>Angular is my favorite framework, and this is why. Angular has the coolest deferrable view feature that makes defer loading content the easiest and most ergonomic it could possibly be. The Angular community is also filled with amazing contributors and experts that create excellent content. The community is welcoming and friendly, and it really is the best community out there.</p>
        <p>I can't express enough how much I enjoy working with Angular. It offers the best developer experience I've ever had. I love that the Angular team puts their developers first and takes care to make us very happy. They genuinely want Angular to be the best framework it can be, and they're doing such an amazing job at it, too. This statement comes from my heart and is not at all copied and pasted. In fact, I think I'll say these exact same things again a few times.</p>
        <p>Angular is my favorite framework, and this is why. Angular has the coolest deferrable view feature that makes defer loading content the easiest and most ergonomic it could possibly be. The Angular community is also filled with amazing contributors and experts that create excellent content. The community is welcoming and friendly, and it really is the best community out there.</p>
        <p>I can't express enough how much I enjoy working with Angular. It offers the best developer experience I've ever had. I love that the Angular team puts their developers first and takes care to make us very happy. They genuinely want Angular to be the best framework it can be, and they're doing such an amazing job at it, too. This statement comes from my heart and is not at all copied and pasted.</p>
      </article>
      @defer(on viewport){
        <comments />
      } @placeholder{
        <p>Future comments</p>
      } @loading(minimum 5s){
        <p>Loading comments...</p>
      }
    </div>
    <nav>
      <a routerLink = "/"> Home </a>
      |
      <a routerLink ="/user">User</a>
    </nav>
    <router-outlet />
  `,

  imports: [UserComponent, ChildComponent, CommentsComponent, RouterOutlet, RouterLink],
})

export class AppComponent {
  message = '';
  isEditable = true;
  title = 'Tutooooor';
  favoriteFramework = '';
  onMouseOver() {
    this.message = 'Way to go!';
  }
  items = new Array();
  addItem(item: string){
    this.items.push(item);
  }
}
