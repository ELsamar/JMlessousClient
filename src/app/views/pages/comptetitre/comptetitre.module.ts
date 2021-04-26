import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComptetitreComponent } from './comptetitre/comptetitre.component';
import {PartialsModule} from '../../partials/partials.module';
import {CoreModule} from '../../../core/core.module';
import {RouterModule} from '@angular/router';
import {MatFormFieldModule, MatIconModule, MatSelectModule} from '@angular/material';
import {PortletModule} from '../../partials/content/general/portlet/portlet.module';
import {FormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';




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
		MatFormFieldModule,
		MatTableModule,
		MatInputModule,
	]
})
export class ComptetitreModule { }
