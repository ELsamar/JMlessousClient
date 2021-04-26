import {Comptecourant} from './Comptecourant';

export class Operation{
	id: number;
	datevaleur: Date;
	dateoperation: Date;
	libele: string;
	reference: string;
	montant:number;
	statut: string;
	devise: string;
	taux:number;
	compteCourant: Comptecourant;
	comptecourantdestinataire: Comptecourant;
	interBank:Boolean;
}
