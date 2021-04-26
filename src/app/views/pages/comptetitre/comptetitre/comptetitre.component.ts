import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ComptetitreService} from '../comptetitre.service';
import {Observable} from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'kt-comptetitre',
  templateUrl: './comptetitre.component.html',
  styleUrls: ['./comptetitre.component.scss']
})
export class ComptetitreComponent implements OnInit {
	displayedColumns: string[] = ['numCompte', 'nombre', 'solde','devise','detail'];
	dataTable: any;
	comptes: string[];
	offre: Observable<String[]>;
	constructor(private route: ActivatedRoute,private router: Router,
				private CptService: ComptetitreService) { }

	ngOnInit() {
		this.offre=new Observable<String[]>();
		this.offre = this.CptService.getOffre();
		console.log(this.offre )
		this.reloadData();
  }
	reloadData() {
		//var id = JSON.parse(localStorage.getItem('currentUser')).id;
		var id= 12345
		console.log(localStorage.getItem('currentUser'));
		console.log(id);
		this.CptService.getCpt(id).subscribe(
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

	}
	onRowClicked(row) {

	}
}
