import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComptetitreComponent } from './comptetitre/comptetitre.component';
import {PartialsModule} from '../../partials/partials.module';
import {CoreModule} from '../../../core/core.module';
import {RouterModule} from '@angular/router';




@NgModule({
  declarations: [ComptetitreComponent],
	imports: [
		CommonModule,
		PartialsModule,
		CoreModule,
		RouterModule.forChild([
			{
				path: '',
				component: ComptetitreComponent
			},
		]),
	]
})
export class ComptetitreModule { }
