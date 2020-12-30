import {Comptecourant} from './Comptecourant';

export class Carte{
	id: number;
	numeroCarte:number;
	plafond:number;
	dateExpiration: Date;
	statut: string;
	montant:number;
	codeSecret:number;
	compteCourant: Comptecourant;
	libelle: string;
	prepayee:Boolean;
}
