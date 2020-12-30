import { Component, OnInit } from '@angular/core';
import {Comptecourant} from '../../../../model/Comptecourant';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {ComptecourantService} from '../comptecourant.service';
import {User} from '../../../../core/auth';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'kt-comptecourant',
  templateUrl: './comptecourant.component.html',
  styleUrls: ['./comptecourant.component.scss']
})
export class ComptecourantComponent implements OnInit {

	cpts: Observable<Comptecourant[]>;
	cpt: Comptecourant = new Comptecourant();
	client : User;
	submitted = false;
	displayedColumns: string[] = ['rip', 'categorie',  'solde','devise','detail'];
	dataTable: any;
	comptes: string[];
	selectedRow;
  constructor(private CptService: ComptecourantService,
			  private router: Router) { }

  ngOnInit() {
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
}
