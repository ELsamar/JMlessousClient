import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComptetitreService {


	private baseUrl ='http://localhost:9080/springboot-jmlessous-rest/api/produitD'
	private compteTitre ='http://localhost:9080/springboot-jmlessous-rest/api/compteTitre'
	constructor(private http: HttpClient) { }

	getOffre(): Observable<any> {
		return this.http.get(`${this.baseUrl+'/offre'}`);
	}
	getCpt(id: number): Observable<any> {
		return this.http.get(`${this.compteTitre}/${id}`);
	}
}
