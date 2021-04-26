import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Comptecourant} from '../../../../model/Comptecourant';
import {MatTableDataSource} from '@angular/material/table';
import {ComptecourantService} from '../comptecourant.service';
import {Router} from '@angular/router';
import {Operation} from '../../../../model/Operation';
import {ServicesharingService} from '../servicesharing.service';
import {Carte} from '../../../../model/Carte';

@Component({
  selector: 'kt-virement',
  templateUrl: './virement.component.html',
  styleUrls: ['./virement.component.scss']
})
export class VirementComponent implements OnInit {
	cpts: Observable<Comptecourant[]>;
	submitted = false;
	rip: number;
	operation: Operation= new Operation();
	allcpts: any[];
	interbank: any[] = [
		{value: 'true ', viewValue: 'interbanque'},
		{value: 'false ', viewValue: 'Exterbanque'}
	];
	devise: any[] = [
		{value: 'TND', viewValue: 'TND'},
		{value: 'EUR', viewValue: 'EUR'},
		{value: 'USD', viewValue: 'USD'}
	];
	constructor(private cptService: ComptecourantService,public serviceSharing: ServicesharingService,
				private router: Router) { }

  ngOnInit() {
	 this.allcpts = [
		  {value: '', viewValue: ''}
	  ];
	  var id = JSON.parse(localStorage.getItem('currentUser')).id;
	  console.log(localStorage.getItem('currentUser'));
	  console.log(id);
	 // this.cpts=this.cptService.getCptclient(id);
	  this.cptService.getCptclient(id).subscribe(d => {
		  // tslint:disable-next-line: prefer-for-of
		  for (let index = 0 ; index < d.length; index++) {
			  this.allcpts.push( { value : d[index],   viewValue : d[index].rip } );
			  this.serviceSharing.newMenuLvl1(this.allcpts);
			  this.serviceSharing.currentVisionMenuLvl1.subscribe(data => this.allcpts = data);
		  }
		  this.allcpts.splice(0, 1);
	  });

  }
	newoperation(): void {
		this.submitted = false;
		this.operation= new Operation();
		this.ngOnInit();

	}
	save() {
		console.log(this.operation)
		this.cptService
			.virement(this.operation,this.operation.compteCourant.id,this.rip).subscribe(data => {
				console.log(data)
				this.operation = data;
				this.submitted = true;
				//	this.gotoList();
			},
			error => console.log(error));
	}
	onSubmit() {

		this.save();
	}

}
