import { Component, OnInit } from '@angular/core';
import {Carte} from '../../../../model/Carte';
import {Carnetcheque} from '../../../../model/Carnetcheque';
import {ComptecourantService} from '../comptecourant.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Comptecourant} from '../../../../model/Comptecourant';

@Component({
  selector: 'kt-carnetcheque-create',
  templateUrl: './carnetcheque-create.component.html',
  styleUrls: ['./carnetcheque-create.component.scss']
})
export class CarnetchequeCreateComponent implements OnInit {

	carnetcheque:Carnetcheque= new Carnetcheque();
	barre: any[] = [
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
			this.carnetcheque.compteCourant = data;
			console.log(this.carnetcheque.compteCourant)
		}, error => console.log(error));
		// this.carte.compteCourant=this.cpt;
	}
	newcarnetcheque(): void {
		this.submitted = false;
		this.carnetcheque = new Carnetcheque();
		this.id = this.route.snapshot.params['id'];
		this.cptService.getCpt(this.id).subscribe(data => {
			this.carnetcheque.compteCourant = data;
			console.log(this.carnetcheque.compteCourant)
		}, error => console.log(error));

	}
	save() {
		console.log(this.carnetcheque)
		this.cptService
			.createCarnetcheque(this.carnetcheque,this.carnetcheque.compteCourant.id).subscribe(data => {
				console.log(data)
				//	this.carte = new Carte();
				//	this.gotoList();
			},
			error => console.log(error));
	}
	onSubmit() {
		this.carnetcheque.statut="encoursdeDemande"
		this.submitted = true;
		this.save();
	}

}
