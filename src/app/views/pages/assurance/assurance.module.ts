import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContratComponent } from './contrat/contrat.component';
import {PartialsModule} from '../../partials/partials.module';
import {CoreModule} from '../../../core/core.module';
import {RouterModule} from '@angular/router';




@NgModule({
  declarations: [ContratComponent],
  imports: [
    CommonModule,
	  PartialsModule,
	  CoreModule,
	  RouterModule.forChild([
		  {
			  path: 'contrat',
			  component: ContratComponent
		  },
	  ]),
  ]
})
export class AssuranceModule { }
