import { Component, OnInit } from '@angular/core';
import {Comptecourant} from '../../../../model/Comptecourant';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {ComptecourantService} from '../comptecourant.service';
import {User} from '../../../../core/auth';
import {MatTableDataSource} from '@angular/material/table';
import {Timeline2Data} from '../../../partials/content/widgets/timeline2/timeline2.component';
import {ServicesharingService} from '../servicesharing.service';

@Component({
  selector: 'kt-comptecourant',
  templateUrl: './comptecourant.component.html',
  styleUrls: ['./comptecourant.component.scss']
})
export class ComptecourantComponent implements OnInit {
	compteCourant:any;
	allcpts: any[] = [
		{value: '', viewValue: ''}
	];
	allOp: Timeline2Data[]  ;

	cpts: Observable<Comptecourant[]>;
	cpt: Comptecourant = new Comptecourant();
	client : User;
	submitted = false;
	displayedColumns: string[] = ['rip', 'categorie',  'solde','devise','detail'];
	dataTable: any;
	comptes: string[];
	selectedRow;
  constructor(private CptService: ComptecourantService,private serviceSharing:ServicesharingService,
			  private router: Router) { }
reloadOp(id :number ){

	this.allOp = [
		{time: '', icon: '',text : '',attachment:''}
	];
	this.CptService.findOpByCpt(id).subscribe(d => {
		// tslint:disable-next-line: prefer-for-of

		for (let index = 0 ; index < d.length; index++) {
			this.allOp.push( { time : d[index].datevaleur, icon: 'fa fa-genderless kt-font-brand',  text : d[index].libele } );
			this.serviceSharing.newMenuLvl1(this.allOp);
			this.serviceSharing.currentVisionMenuLvl1.subscribe(data => this.allOp = data);
		}
		this.allOp.splice(0, 1);
	});
	//this.ngOnInit()
}
reloadCpt(){
	var id = JSON.parse(localStorage.getItem('currentUser')).id;
	console.log(localStorage.getItem('currentUser'));
	console.log(id);
	// this.cpts=this.cptService.getCptclient(id);
	this.CptService.getCptclient(id).subscribe(d => {
		// tslint:disable-next-line: prefer-for-of
		for (let index = 0 ; index < d.length; index++) {
			this.allcpts.push( { value : d[index],   viewValue : d[index].rip } );
			this.serviceSharing.newMenuLvl2(this.allcpts);
			this.serviceSharing.currentVisionMenuLvl2.subscribe(data => this.allcpts = data);
		}
		this.allcpts.splice(0, 1);
	});
}
ngOnInit() {
  	this.reloadCpt();
	this.reloadOp(1);
	this.reloadData();
	this.submitted = false;

	}
	reloadData() {
		var id = JSON.parse(localStorage.getItem('currentUser')).id;
		console.log(localStorage.getItem('currentUser'));
		console.log(id);
		 this.CptService.getCptclient(id).subscribe(
			 (response) => {
				 this.comptes = response as string[];
				 this.dataTable = new MatTableDataSource(this.comptes);

				 console.log(this.dataTable, this.comptes);

			 }
		 )
  }
	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataTable.filter = filterValue.trim().toLowerCase();
	}
	getRecord(uid) {
		alert(uid);
		this.router.navigate(['/comptecourant/details/' + uid]);
	}
	highlightRow(row) {
		this.selectedRow = row;
	}
	onRowClicked(row) {
		this.selectedRow = row;
		this.cpt.id = this.selectedRow.id;
		this.cpt.rip = this.selectedRow.rip;
		this.cpt.devise = this.selectedRow.devise;
		this.cpt.dateOuverture = this.selectedRow.dateOuverture;
	//	this.cpt.categorie = this.;
//    console.log(this.idau);
		// this.getSessions();
	}

	gotolistOp(uid) {
		this.router.navigate(['/comptecourant/oplist/' + uid]);
	}
	virement(){
		this.router.navigate(['/comptecourant/virement' ]);
	}
}
