import { Component, OnInit } from '@angular/core';
import {Comptecourant} from '../../../../model/Comptecourant';
import {ComptecourantService} from '../comptecourant.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Comptecourantcategorie} from '../../../../model/Comptecourantcategorie';

@Component({
  selector: 'kt-comptecourantdetails',
  templateUrl: './comptecourantdetails.component.html',
  styleUrls: ['./comptecourantdetails.component.scss']
})
export class ComptecourantdetailsComponent implements OnInit {
	id: number;
	cpt : Comptecourant;
	cptcateg: Observable<Comptecourantcategorie[]>;

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
}
