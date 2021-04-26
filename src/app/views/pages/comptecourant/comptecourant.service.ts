import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Operation} from '../../../model/Operation';
@Injectable({
  providedIn: 'root'
})
export class ComptecourantService {

	private baseUrl = 'http://localhost:9080/springboot-jmlessous-rest/api/comptecourant';
	private categUrl ='http://localhost:9080/springboot-jmlessous-rest/api/comptecourantcategorie'
	private carteUrl ='http://localhost:9080/springboot-jmlessous-rest/api/carte'
	private operationUrl ='http://localhost:9080/springboot-jmlessous-rest/api/operation'
	private CarnetchequeUrl ='http://localhost:9080/springboot-jmlessous-rest/api/carnetcheque'
	constructor(private http: HttpClient) { }

	getCptclient(id: number): Observable<any> {
		return this.http.get(`${this.baseUrl+'/client'}/${id}`);
	}
	getCpt(id: number): Observable<any> {
		return this.http.get(`${this.baseUrl}/${id}`);
	}

	createCpt(cpt: Object): Observable<Object> {
		return this.http.post(`${this.baseUrl+'/add'}`, cpt);
	}

	updateCpt(id: number, value: any): Observable<Object> {
		return this.http.put(`${this.baseUrl+'/update'}/${id}`, value);
	}

	deleteCpt(id: number): Observable<any> {
		return this.http.delete(`${this.baseUrl+'/dell'}/${id}`, { responseType: 'text' });
	}

	getCptList(): Observable<any> {
		return this.http.get(`${this.baseUrl+'/all'}`);
	}
	//*****Cptcategorie******//

	getCptcategList(): Observable<any> {
		return this.http.get(`${this.categUrl+'/all'}`);
	}
	getCptcateg(id: number): Observable<any> {
		return this.http.get(`${this.categUrl}/${id}`);
	}

	//*****Carte******//
	createCarte(carte: Object,id: number): Observable<Object> {
		return this.http.post(`${this.carteUrl+'/add'}/${id}`, carte);
	}
	getCarte(id: number): Observable<any> {
		return this.http.get(`${this.carteUrl}/${id}`);
	}
	updateCarte(id: number, value: any): Observable<Object> {
		return this.http.put(`${this.carteUrl+'/update'}/${id}`, value);
	}
	renouvelleCarte(id: number, montant: any): Observable<Object> {
		return this.http.put(`${this.carteUrl+'/renouvelle'}/${id}`, montant);
	}
	traiteStatutCarte(id: number, value: any): Observable<Object> {
		return this.http.put(`${this.carteUrl+'/traiteStatut'}/${id}`, value);
	}
	//*****Operation******//
	findOpByCptStatut(id: number,statut: string): Observable<any> {
		return this.http.get(`${this.operationUrl+'/byCptstatut'}/${statut}/${id}`);
	}

	findOpByCpt(id: number): Observable<any> {
		return this.http.get(`${this.operationUrl+'/bycpt'}/${id}`);
	}
	findOpByStatut(statut: string): Observable<any> {
		return this.http.get(`${this.operationUrl+'/bystatut'}/${statut}`);
	}

	createOperation(op: Object,id: number): Observable<Object> {
		return this.http.post(`${this.operationUrl+'/add'}/${id}`, op);
	}
	virement(op: Object,id: number,rip: number): Observable<Operation> {
		 // @ts-ignore
		return this.http.post(`${this.operationUrl+'/virement'}/${id}/${rip}`, op);
	}
	//**********Carnetcheque***********//
	createCarnetcheque(carnetcheque: Object,id: number): Observable<Object> {
		return this.http.post(`${this.CarnetchequeUrl+'/add'}/${id}`, carnetcheque);
	}
}
