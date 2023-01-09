import { Component } from "@angular/core";

@Component({
    selector: 'ap-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent{
    nombre: string = 'Ironman';
    edad: number = 45;

    get nombrecapitalizado(){
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string{
        return `${ this.nombre }  -  ${ this.edad }`
    }

    cambiarNombre(): void {
        this.nombre = 'Spiderman';
    }

    cambiarEdad(): void {
        this.edad = 30;
    }
}