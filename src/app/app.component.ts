import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExerciciosComponent } from './components/exercicios/exercicios.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ExerciciosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'exercicios';
}
