import { Component, OnInit } from '@angular/core';
import {Comptecourant} from '../../../../model/Comptecourant';
import {ComptecourantService} from '../comptecourant.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Comptecourantcategorie} from '../../../../model/Comptecourantcategorie';
import {Carte} from '../../../../model/Carte';
import {Operation} from '../../../../model/Operation';

@Component({
  selector: 'kt-comptecourantdetails',
  templateUrl: './comptecourantdetails.component.html',
  styleUrls: ['./comptecourantdetails.component.scss']
})
export class ComptecourantdetailsComponent implements OnInit {
	id: number;
	cpt : Comptecourant;
	cptcateg: Observable<Comptecourantcategorie[]>;
	operation: Operation = new Operation();

  constructor(private route: ActivatedRoute,private router: Router,
			  private CptService: ComptecourantService) { }

  ngOnInit() {
  	this.cpt = new Comptecourant();
	  this.id = this.route.snapshot.params['id'];
	  this.CptService.getCpt(this.id).subscribe(data => {
		  console.log(data)
		  this.cpt = data;
	  }, error => console.log(error));
	this.reloadcateg();

  }
	list(){
		this.router.navigate(['comptecourant']);
	}
	alert(msg){
		alert("votre code secret est "+msg);
	}
	reloadcateg(){
	this.cptcateg = this.CptService.getCptcategList();
	console.log(this.cptcateg )
	}
	/**carte**///
	addcarte(){
	this.router.navigate(['/comptecourant/createcarte/' + this.id]);
	}
	updatecarte(uid) {
		this.router.navigate(['/comptecourant/updatecarte/' + uid]);
	}
	renouvelleCarte(id: number){
		let montant = 10;
		this.CptService.renouvelleCarte(id,montant)
			.subscribe(data => {
				console.log(data);
				this.ngOnInit();
			}, error => console.log(error));
		this.operation.libele= "renouvelleCarte";
		this.operation.devise=this.cpt.devise;
		this.operation.compteCourant=this.cpt;
		this.operation.montant=montant;
		this.operation.statut="réussite"
		this.operation.interBank=true;
		this.operation.taux=0;
		this.CptService
			.createOperation(this.operation,this.cpt.id).subscribe(data => {
				console.log(data)

				this.ngOnInit();
			},
			error => console.log(error));
	}
	Perdue(id: number){
		let statut = 'Perdue/volée';
		this.CptService.traiteStatutCarte(id,statut)
			.subscribe(data => {
				console.log(data);
				this.ngOnInit();
			}, error => console.log(error));
	}

	/**carnetcheque**///
	addcarnetcheque(){
		this.router.navigate(['/comptecourant/carnetchequecarte/' + this.id]);
	}
}
