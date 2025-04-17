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
  usuarios = [
    { nome: 'Ana', idade: 25 },
    { nome: 'Carlos', idade: 30 }
  ];
  credenciais = {email: "", senha: '', enviado: false}
   valor:number | string = 1
   produtos = [ {nome: "Notebook", preco: 3000, promocao: true}, {nome: "Mouse", preco: 50, promocao: false}];
   operacao = "";
   valor1:number = 0;
   valor2:number = 0 ;

  trocarValor(event: Event): void {
    const elemento = event.target as HTMLInputElement;
    this.mes = parseInt(elemento.value);
  }
  trocarValor1(event: Event): void {
    const elemento = event.target as HTMLInputElement;
    this.valor1 = parseInt(elemento.value);
  }
  trocarValor2(event: Event): void {
    const elemento = event.target as HTMLInputElement;
    this.valor2 = parseInt(elemento.value);
  }
  mudaOperacao(event: Event): void {
    const elemento = event.target as HTMLInputElement;
    this.operacao =elemento.value;
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
