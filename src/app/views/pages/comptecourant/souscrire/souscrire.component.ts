import { Component, OnInit } from '@angular/core';
import {ComptecourantService} from '../comptecourant.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Comptecourantcategorie} from '../../../../model/Comptecourantcategorie';
import {Comptecourant} from '../../../../model/Comptecourant';
import {Carte} from '../../../../model/Carte';

@Component({
  selector: 'kt-souscrire',
  templateUrl: './souscrire.component.html',
  styleUrls: ['./souscrire.component.scss']
})
export class SouscrireComponent implements OnInit {
	devise: any[] = [
		{value: 'TND', viewValue: 'TND'},
		{value: 'EUR', viewValue: 'EUR'},
		{value: 'USD', viewValue: 'USD'}
	];
	constructor(private cptService: ComptecourantService,private route: ActivatedRoute,private router: Router) { }
	submitted = false;
	id:number;
	cptcateg: Comptecourantcategorie;
	cpt : Comptecourant;
	ngOnInit() {
		this.id = this.route.snapshot.params['id'];
		this.cptService.getCptcateg(this.id).subscribe(data => {
			this.cptcateg = data;
			this.cpt.categorie=data;
			console.log(this.cptcateg);
		}, error => console.log(error));
		// this.carte.compteCourant=this.cpt;
	}
	newcpt(): void {
		this.submitted = false;
		this.cpt = new Comptecourant();
		this.id = this.route.snapshot.params['id'];
		this.cptService.getCptcateg(this.id).subscribe(data => {
			this.cptcateg = data;
			console.log(this.cptcateg);
		}, error => console.log(error));

	}
	save() {
	/**	console.log(this.cptcateg)
		this.cptService
			.createCpt(this.carte,this.carte.compteCourant.id).subscribe(data => {
				console.log(data)
				//	this.carte = new Carte();
				//	this.gotoList();
			},
			error => console.log(error)); **/
	}
	onSubmit() {
		//this.cpt.="encoursdeDemande"
		//this.carte.numeroCarte=1234567
		this.submitted = true;
		this.save();
	}

}
