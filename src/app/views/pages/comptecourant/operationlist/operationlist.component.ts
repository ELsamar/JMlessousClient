import { Component, OnInit } from '@angular/core';
import {ComptecourantService} from '../comptecourant.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {Comptecourant} from '../../../../model/Comptecourant';

@Component({
  selector: 'kt-operationlist',
  templateUrl: './operationlist.component.html',
  styleUrls: ['./operationlist.component.scss']
})
export class OperationlistComponent implements OnInit {

	//private Float taux ;
	displayedColumns: string[] = ['datevaleur','libele', 'reference' ,'dateoperation','montant','devise','statut','interBank'];
	dataTable: any;
	operations: string[];
	selectedRow;
	idCpt : number;
	cpt: Comptecourant = new Comptecourant();
	submitted = false;
	constructor(private CptService: ComptecourantService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
	  this.idCpt= this.route.snapshot.params['id'];
	  this.CptService.getCpt(this.idCpt).subscribe(data => {
		  console.log(data)
		  this.cpt = data;
	  }, error => console.log(error));
		this.reloadData();
  }
	reloadData() {
		this.CptService.findOpByCpt(this.idCpt).subscribe(
			(response) => {
				this.operations = response as string[];
				this.dataTable = new MatTableDataSource(this.operations);
				console.log(this.dataTable, this.operations);
			}
		)
	}
	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataTable.filter = filterValue.trim().toLowerCase();
	}
	highlightRow(row) {
		this.selectedRow = row;
	}
	onSubmit() {
		this.submitted = true;
	}
}
