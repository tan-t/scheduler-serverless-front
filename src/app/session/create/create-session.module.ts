import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CreateSessionPage } from './create-session.page';
import { TitleInputModalComponent } from './title-input-modal/title-input-modal.component';

const routes: Routes = [
  {
    path: '',
    component: CreateSessionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CreateSessionPage,TitleInputModalComponent],
  entryComponents: [ TitleInputModalComponent ]
})
export class CreateSessionPageModule {}
