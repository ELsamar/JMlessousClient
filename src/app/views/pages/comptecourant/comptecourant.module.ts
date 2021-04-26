import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComptecourantComponent } from './comptecourant/comptecourant.component';
import {PartialsModule} from '../../partials/partials.module';
import {CoreModule} from '../../../core/core.module';
import {RouterModule} from '@angular/router';
import {MatFormFieldModule, MatIconModule, MatSelectModule} from '@angular/material';
import {PortletModule} from '../../partials/content/general/portlet/portlet.module';
import {FormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import { ComptecourantdetailsComponent } from './comptecourantdetails/comptecourantdetails.component';
import { CreatecarteComponent } from './createcarte/createcarte.component';
import { UpdatecarteComponent } from './updatecarte/updatecarte.component';
import { VirementComponent } from './virement/virement.component';
import { OperationlistComponent } from './operationlist/operationlist.component';
import { ExtraitbancaireComponent } from './extraitbancaire/extraitbancaire.component';
import { CarnetchequeCreateComponent } from './carnetcheque-create/carnetcheque-create.component';
import { PrduitbancaireComponent } from './prduitbancaire/prduitbancaire.component';
import { SouscrireComponent } from './souscrire/souscrire.component';






@NgModule({
  declarations: [ComptecourantComponent, ComptecourantdetailsComponent,
	  CreatecarteComponent, UpdatecarteComponent, VirementComponent, OperationlistComponent,
	  ExtraitbancaireComponent, CarnetchequeCreateComponent, PrduitbancaireComponent, SouscrireComponent],
	imports: [
		CommonModule,
		PartialsModule,
		CoreModule,
		RouterModule.forChild([
			{
				path: '',
				component: ComptecourantComponent
			}, {
				path: 'details/:id',
				component: ComptecourantdetailsComponent
			}, {
				path: 'createcarte/:id',
				component: CreatecarteComponent
			}, {
				path: 'updatecarte/:id',
				component: UpdatecarteComponent
			}, {
				path: 'virement',
				component: VirementComponent
			}, {
				path: 'oplist/:id',
				component: OperationlistComponent
			}, {
				path: 'extrait',
				component: ExtraitbancaireComponent
			},{
				path: 'carnetchequecarte/:id',
				component: CarnetchequeCreateComponent
			},{
				path: 'prduitbancaire',
				component: PrduitbancaireComponent
			},{
				path: 'souscrire/:id',
				component: SouscrireComponent
			},
		]),
		PortletModule,
		PartialsModule,
		FormsModule,
		MatTableModule,
		MatFormFieldModule,
		MatInputModule,
		MatSelectModule,
		MatIconModule,

	],
	providers: [],

})
export class ComptecourantModule { }
