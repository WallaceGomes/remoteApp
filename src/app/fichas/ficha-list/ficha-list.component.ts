import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ficha } from './../ficha.model';
import { FichasService } from '../fichas.service';

@Component({
    selector: 'app-ficha-list',
    templateUrl: './ficha-list.component.html'
})
export class FichaListComponent implements OnInit, OnDestroy {
    // fichas = [
    //     { nome: 'Nome paciente1', matricula: 'Matricula1' },
    //     { nome: 'Nome paciente2', matricula: 'Matricula2' },
    //     { nome: 'Nome paciente3', matricula: 'Matricula3' }
    // ];

    fichas: Ficha[] = [];
    private fichasSub: Subscription;

    constructor(public fichasService: FichasService) {}

    ngOnInit() {
        this.fichas = this.fichasService.getFichas();
        this.fichasSub = this.fichasService.getFichasUpdateListener()
        .subscribe((fichas: Ficha[]) => {
            this.fichas = fichas;
        });
    }

    ngOnDestroy() {
        this.fichasSub.unsubscribe();
    }
}
