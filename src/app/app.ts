import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
  preserveWhitespaces: true,
  standalone: true
})

export class App {
   name="myapp"
  
}
