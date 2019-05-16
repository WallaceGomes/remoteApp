import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { FichasService } from '../fichas.service';

@Component({
    selector: 'app-ficha-create',
    templateUrl: './ficha-create.component.html',
    styleUrls: ['./ficha-create.component.css']
})
export class FichaCreateComponent implements OnInit {
  nomePaciente = '';
  matriculaPaciente = '';
  leitoPaciente = '';
  dataFichaPaciente = '';

  constructor(public fichasService: FichasService) {}

  itemFichaPercepSens: any = {
    // header: 'Percepção Sensorial',
    subHeader: 'Percepção Sensorial',
    message: 'Qual o nível de percepção do paciente?'
  };

  itemFichaUmidade: any = {
    // header: 'Umidade da pele',
    subHeader: 'Umidade',
    message: 'Nível de umidade da pele'
  };

  itemFichaAtividade: any = {
    // header: 'Atividade',
    subHeader: 'Atividade',
    message: 'Nível de atividade do paciente'
  };

  itemFichaMobilidade: any = {
    // header: 'Mobilidade',
    subHeader: 'Mobilidade',
    message: 'Condição de mobilidade do paciente'
  };

  itemFichaNutricao: any = {
    // header: 'Nutricao',
    subHeader: 'Nutricao',
    message: 'Condição da alimentação do paciente'
  };

  itemFichaFricaoCisalh: any = {
    // header: 'Fricção e Cisalhamento',
    subHeader: 'Fricção e Cisalhamento',
    message: 'Condições de pele do paciente'
  };

  opcaoSelecionada: number ;

  scorePercepSens: any = 0 ;
  scoreUmidade: any = 0 ;
  scoreAtividade: any = 0 ;
  scoreMobilidade: any = 0 ;
  scoreNutricao: any = 0 ;
  scoreFricCis: any = 0 ;

  score: any = 0 ;

  selectChangeHandlerPercpSens(event: any) {
    this.scorePercepSens = (event.target.value);
    this.calculoScore();
  }

  selectChangeHandlerUmidade(event: any) {
    this.scoreUmidade = (event.target.value);
    this.calculoScore();
  }

  selectChangeHandlerAtividade(event: any) {
    this.scoreAtividade = (event.target.value);
    this.calculoScore();
  }

  selectChangeHandlerMobilidade(event: any) {
    this.scoreMobilidade = (event.target.value);
    this.calculoScore();
  }

  selectChangeHandlerNutricao(event: any) {
    this.scoreNutricao = (event.target.value);
    this.calculoScore();
  }

  selectChangeHandlerFricCis(event: any) {
    this.scoreFricCis = (event.target.value);
    this.calculoScore();
  }

  calculoScore() {
    this.score =
    Number(this.scorePercepSens) +
    Number(this.scoreUmidade) +
    Number(this.scoreAtividade) +
    Number(this.scoreMobilidade) +
    Number(this.scoreNutricao) +
    Number(this.scoreFricCis);
  }

  onSalvarFicha(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.fichasService.addFicha(
      form.value.nomePaciente,
      form.value.matriculaPaciente,
      form.value.leitoPaciente,
      form.value.dataFichaPaciente);
    form.resetForm();
  }

  // constructor(private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

  // async loadingEnvioFormulario() {
  //   const loading = await this.loadingCtrl.create({
  //     message : 'Salvando...',
  //     duration: 1500,
  //     translucent: true
  //   });
  //   return await loading.present();
  // }

}
