import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  clickedOfferDetails: any = "";

  jobsList = [
    {title: "Développeur Front End Angular H/F", shortDescription: "Nous recherchons pour notre agence de Sophia Antipolis un (super) Dev Front Angular, dans une entreprise familiale mais présente à l'international et leader de son marché depuis plus de 35 ans.", longDescription: "Nous recherchons pour notre agence de Sophia Antipolis un (super) Dev Front Angular, dans une entreprise familiale mais présente à l'international et leader de son marché depuis plus de 35 ans. Notre équipe est pluridisciplinaire (Mobile, TelCo, DevOps, Réseau, etc), il y a donc de belles perspectives d'évolution qui vous attendent !", firm: "Télémaque", salary: "35 000 €/an"},
    {title: "Développeur Front End Angular H/F Junior", shortDescription: "Créée en avril 2015, l'entreprise se lance le pari de révolutionner le marché du travail temporaire et de casser les idées reçues des agences d'intérim traditionnelles.", longDescription: "Créée en avril 2015, l'entreprise se lance le pari de révolutionner le marché du travail temporaire et de casser les idées reçues des agences d'intérim traditionnelles. Pari réussi, Staffmatch affiche aujourd'hui une couverture nationale, une centaine de collaborateurs permanents et plus de 50 000 collaborateurs intérimaires.", firm: "Staffmatch France", salary: "32 000 €/an"},
    {title: "Développeur Full-Stack JavaScript (Node/Angular)", shortDescription: "Vous justifiez idéalement d'une première expérience réussie sur un framework javascript Back & Front (Angular, VueJS ou équivalent).", longDescription: "Vous justifiez idéalement d'une première expérience réussie sur un framework javascript Back & Front (Angular, VueJS ou équivalent). Les écoles et parcours nous intéressent moins que votre potentiel, determination, autonomie et personnalité... surtout si vous avez un bon rapport social. Pour le reste, vous serez formé par votre coach qui vous épaulera dans les premiers projets !", salary: "40 000 €/an"}
  ];

  detailOffer(job: any) {
    console.log("click");
    
    this.clickedOfferDetails = job;
    console.log("job", job);
    
  }
}
