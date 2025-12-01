import { Component, signal } from '@angular/core';
import { Listar } from "./listar/listar";

@Component({
  selector: 'app-root',
  imports: [ Listar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('api-brasil');

}
