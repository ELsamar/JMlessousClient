import { Component, OnInit } from '@angular/core';
import {Carte} from '../../../../model/Carte';
import {ComptecourantService} from '../comptecourant.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'kt-updatecarte',
  templateUrl: './updatecarte.component.html',
  styleUrls: ['./updatecarte.component.scss']
})
export class UpdatecarteComponent implements OnInit {
	carte : Carte ;
	constructor(private cptService: ComptecourantService,private route: ActivatedRoute,private router: Router) { }

	id:number;

  ngOnInit() {
  	this.carte = new Carte();
	  this.id = this.route.snapshot.params['id'];
	  this.cptService.getCarte(this.id)
		  .subscribe(data => {
			  console.log(data)
			  this.carte = data;
		  }, error => console.log(error));
  }
  updateCarte(){
	  this.cptService.updateCarte(this.id,this.carte)
		  .subscribe(data => {
			  console.log(data);
			  this.carte = new Carte();
			  this.gotoList();
		  }, error => console.log(error));
  }
	onSubmit() {
		this.updateCarte();
	}
	gotoList() {
		var id = JSON.parse(localStorage.getItem('currentUser')).id;
		this.router.navigate(['/comptecourant/details/'+id]);
	}

}
