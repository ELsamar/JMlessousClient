
import {Data} from '../../../model/Data';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServicesharingService {

	visionMPCMMenuLvl1Init: any ;
	visionMPCMMenuLvl2Init: any ;

	private visionMenuLvl1 = new BehaviorSubject<any>(this.visionMPCMMenuLvl1Init);

	currentVisionMenuLvl1 = this.visionMenuLvl1.asObservable();
	private visionMenuLvl2 = new BehaviorSubject<any>(this.visionMPCMMenuLvl2Init);

	currentVisionMenuLvl2 = this.visionMenuLvl2.asObservable();
	constructor() { }
	newMenuLvl1(visionMenuLvl1: any[]) {

		this.visionMenuLvl1.next(visionMenuLvl1);

	}
	newMenuLvl2(visionMenuLvl2: any[]) {

		this.visionMenuLvl2.next(visionMenuLvl2);

	}
}
