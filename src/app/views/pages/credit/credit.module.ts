import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CreditComponent} from './credit/credit.component';
import {PartialsModule} from '../../partials/partials.module';
import {CoreModule} from '../../../core/core.module';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [CreditComponent],
  imports: [
    CommonModule,
	  PartialsModule,
	  CoreModule,
	  RouterModule.forChild([
		  {
			  path: '',
			  component: CreditComponent
		  },
	  ]),
  ]
})
export class CreditModule { }
