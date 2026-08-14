import { Component, Input, input, output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  // @Input() titulo: string
  titulo = input.required<string>()
  textoSobre = output<string>()

  enviarSobre():void{
    this.textoSobre.emit('Tecnicas de Programação I.\nDesenvolvido por Jubileu')
  }

  exibirMensagem(msg: string): void{
    alert(msg)
  }
}
