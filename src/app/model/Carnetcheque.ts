import {Comptecourant} from './Comptecourant';

export class Carnetcheque{
	id: number;
	nb:number;
	datedemande: Date;
	datelivre: Date;
	statut: string;
	compteCourant: Comptecourant;
	barre:Boolean;

}
