import { Component } from '@angular/core';
import { Brasilapiservice } from '../service/brasilapi';
import { Estado } from '../common/brasilapi.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar',
  imports: [ CommonModule ],
  templateUrl: './listar.html',
  styleUrl: './listar.css',
})
export class Listar {

  estados: Estado[] = []

  constructor(
    private brasilService: Brasilapiservice
  ) { }

  ngOnInit(): void {
    this.carregarUFs();
    console.log(this.estados);
  }

  carregarUFs() {
    this.brasilService.listarUFs().subscribe(
      { 
        next: listaEstados => listaEstados.forEach((uf) => {
            this.estados.push(uf)}),
        error: erro => console.log("ocorreu um erro:", erro)
       });
  }

}
