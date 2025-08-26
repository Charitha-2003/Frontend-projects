import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ViewUser } from './user-service/view-user/view-user';
import { Menu } from "./menu/menu/menu";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('online-learning-app');
}
