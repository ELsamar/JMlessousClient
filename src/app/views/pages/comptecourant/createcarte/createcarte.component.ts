import { Component, OnInit } from '@angular/core';
import {Carte} from '../../../../model/Carte';
import {ActivatedRoute, Router} from '@angular/router';
import {ComptecourantService} from '../comptecourant.service';
import {Comptecourant} from '../../../../model/Comptecourant';

@Component({
  selector: 'kt-createcarte',
  templateUrl: './createcarte.component.html',
  styleUrls: ['./createcarte.component.scss']
})
export class CreatecarteComponent implements OnInit {
carte : Carte = new Carte();
	typecarte: any[] = [
		{value: 'CarteVISA ', viewValue: 'CarteVISA'},
		{value: 'carteMasterCard ', viewValue: 'carte MasterCard'},
		{value: 'carteCHABEB ', viewValue: 'carte CHABEB'}
	];
	prepayee: any[] = [
		{value: 'true ', viewValue: 'oui'},
		{value: 'false ', viewValue: 'non'}
	];
  constructor(private cptService: ComptecourantService,private route: ActivatedRoute,private router: Router) { }
  submitted = false;
  id:number;
  cpt : Comptecourant;
  ngOnInit() {
	  this.id = this.route.snapshot.params['id'];
	  this.cptService.getCpt(this.id).subscribe(data => {
		  this.carte.compteCourant = data;
		  console.log(this.carte.compteCourant)
	  }, error => console.log(error));
	 // this.carte.compteCourant=this.cpt;
  }
	newcarte(): void {
		this.submitted = false;
		this.carte = new Carte();
		this.id = this.route.snapshot.params['id'];
		this.cptService.getCpt(this.id).subscribe(data => {
			this.carte.compteCourant = data;
			console.log(this.carte.compteCourant)
		}, error => console.log(error));

	}
	save() {
		console.log(this.carte)
		this.cptService
			.createCarte(this.carte,this.carte.compteCourant.id).subscribe(data => {
				console.log(data)
			//	this.carte = new Carte();
			//	this.gotoList();
			},
			error => console.log(error));
	}
	onSubmit() {
		this.carte.statut="encoursdeDemande"
		this.carte.numeroCarte=1234567
		this.submitted = true;
		this.save();
	}
}
