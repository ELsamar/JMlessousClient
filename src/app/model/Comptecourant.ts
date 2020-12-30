import {User} from '../core/auth';
import {Comptecourantcategorie} from './Comptecourantcategorie';

export class Comptecourant{
	id: number;
	client: User;
    solde: number;
    dateOuverture: Date;
    dateFermeture : Date;
	devise : string;
	rip : number;
	carte : any;
	carnetCheque :any;
	categorie : Comptecourantcategorie;
	Operations: any;


}
