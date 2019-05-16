import { Ficha } from './ficha.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class FichasService {
    private fichas: Ficha[] = [];
    private fichasUpdated = new Subject<Ficha[]>();

    getFichas() {
        return [...this.fichas];
    }

    getFichasUpdateListener() {
        return this.fichasUpdated.asObservable();
    }

    addFicha(nome: string, matricula: string, leito: string, data: string) {
        const ficha: Ficha = {nome: nome, matricula: matricula, leito: leito, data: data};
        this.fichas.push(ficha);
        this.fichasUpdated.next([...this.fichas]);
    }
}
