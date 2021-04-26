import {Component, Input, OnInit} from '@angular/core';
import {ComptecourantService} from '../comptecourant.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Comptecourant} from '../../../../model/Comptecourant';
import {Observable} from 'rxjs';
import {Operation} from '../../../../model/Operation';
import html2canvas from 'html2canvas';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'kt-extraitbancaire',
  templateUrl: './extraitbancaire.component.html',
  styleUrls: ['./extraitbancaire.component.scss']
})
export class ExtraitbancaireComponent implements OnInit {
	@Input()idCpt : number;

	cpt: Comptecourant = new Comptecourant();
	operations: Observable<Operation[]>;
	statut:string;
	constructor(private CptService: ComptecourantService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {

	//  this.idCpt= this.route.snapshot.params['id'];
	  this.CptService.getCpt(this.idCpt).subscribe(data => {
		  console.log(data)
		  this.cpt = data;
	  }, error => console.log(error));
	  this.statut = 'réussite';
	  this.operations = this.CptService.findOpByCptStatut(this.idCpt,this.statut);
  }
	captureScreen(): void {
		console.log('Success');
		const data = document.getElementById('contentToConvert');  // Id of the table
		html2canvas(data).then(canvas => {
			// Few necessary setting options
			const imgWidth = 208;
			const pageHeight = 295;
			const imgHeight = canvas.height * imgWidth / canvas.width;
			const heightLeft = imgHeight;

			const contentDataURL = canvas.toDataURL('./../../../assets/logo.jpg');
			const pdf = new jsPDF.jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
			const position = 0;
			pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
			pdf.output();
			pdf.save('MYPdf.pdf'); // Generated PDF
		});
	}

}
