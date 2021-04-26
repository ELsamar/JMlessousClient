import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ComptecourantService} from '../comptecourant.service';
import {Observable} from 'rxjs';
import {Comptecourantcategorie} from '../../../../model/Comptecourantcategorie';

@Component({
  selector: 'kt-prduitbancaire',
  templateUrl: './prduitbancaire.component.html',
  styleUrls: ['./prduitbancaire.component.scss']
})
export class PrduitbancaireComponent implements OnInit {
	cptcateg: Observable<Comptecourantcategorie[]>;
	constructor(private route: ActivatedRoute,private router: Router,
				private CptService: ComptecourantService) { }

  ngOnInit() {
		this.reloadcateg();
  }
	reloadcateg(){
		this.cptcateg = this.CptService.getCptcategList();
		console.log(this.cptcateg )
	}
	souscrire(id:number){
		this.router.navigate(['/comptecourant/souscrire/' + id]);
	}
}
