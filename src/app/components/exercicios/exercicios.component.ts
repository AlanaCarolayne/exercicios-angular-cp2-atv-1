import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercicios.component.html',
  styleUrl: './exercicios.component.css',
})
export class ExerciciosComponent {
  mes: number = 1;
  itens = ['Maçã', 'Banana', 'Leite'];
  idade: number = 19;
  tarefas = ['Estudar Angular', 'Fazer exercicios', 'Revisar Código'];
  status: string = '';
  trocarValor(event: Event): void {
    const elemento = event.target as HTMLInputElement;
    this.mes = parseInt(elemento.value);
  }

  aumenta(): void {
    this.idade++;
  }
  diminui(): void {
    this.idade--;
  }
  eliminaTarefa(nome: string): void {
    const index = this.tarefas.indexOf(nome);
    this.tarefas.splice(1, index);
  }
  trocarStatus(event:Event) : void{
    const elemento = event.target as HTMLInputElement
    this.status = elemento.value
      }
}
