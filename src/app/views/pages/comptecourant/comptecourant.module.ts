import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComptecourantComponent } from './comptecourant/comptecourant.component';
import {PartialsModule} from '../../partials/partials.module';
import {CoreModule} from '../../../core/core.module';
import {RouterModule} from '@angular/router';
import {MatFormFieldModule, MatSelectModule} from '@angular/material';
import {PortletModule} from '../../partials/content/general/portlet/portlet.module';
import {FormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import { ComptecourantdetailsComponent } from './comptecourantdetails/comptecourantdetails.component';
import { CreatecarteComponent } from './createcarte/createcarte.component';
import { UpdatecarteComponent } from './updatecarte/updatecarte.component';





@NgModule({
  declarations: [ComptecourantComponent, ComptecourantdetailsComponent, CreatecarteComponent, UpdatecarteComponent],
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
            },
        ]),
        PortletModule,
        PartialsModule,
        FormsModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,

    ],
	providers: [],

})
export class ComptecourantModule { }
