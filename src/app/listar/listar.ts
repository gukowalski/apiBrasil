import { Component } from '@angular/core';
import { Brasilapiservice } from '../service/brasilapi';
import { Estado } from '../common/brasilapi.models';

@Component({
  selector: 'app-listar',
  imports: [],
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
  }

  carregarUFs() {
    this.brasilService.listarUFs().subscribe(
      { 
        next: listaEstados => console.log(listaEstados),
        error: erro => console.log("ocorreu um erro:", erro)
       });
  
  }

}
