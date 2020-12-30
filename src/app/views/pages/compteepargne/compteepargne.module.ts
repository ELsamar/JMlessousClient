import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompteepargneComponent } from './compteepargne/compteepargne.component';
import {PartialsModule} from '../../partials/partials.module';
import {CoreModule} from '../../../core/core.module';
import {RouterModule} from '@angular/router';




@NgModule({
  declarations: [CompteepargneComponent],
	imports: [
		CommonModule,
		PartialsModule,
		CoreModule,
		RouterModule.forChild([
			{
				path: '',
				component: CompteepargneComponent
			},
		]),
	]
})
export class CompteepargneModule { }
