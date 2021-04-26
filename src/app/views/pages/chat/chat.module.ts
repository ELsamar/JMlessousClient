import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import {PartialsModule} from '../../partials/partials.module';
import {CoreModule} from '../../../core/core.module';
import {RouterModule} from '@angular/router';




@NgModule({
  declarations: [ChatComponent],
	imports: [
		CommonModule,
		PartialsModule,
		CoreModule,
		RouterModule.forChild([
			{
				path: '',
				component: ChatComponent
			},
		]),
	]
})
export class ChatModule { }
