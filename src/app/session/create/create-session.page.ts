import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { ApiService } from '../../api/api.service';
import { EndPoint } from '../../api/end-point.enum';
import { TypeaheadResult } from '../../common/typeahead-result';
import { TypeaheadService } from '../../common/typeahead.service';
import { CreateSessionService } from './create-session.service';
import { Session } from '../session';
import { TitleInputModalComponent } from './title-input-modal/title-input-modal.component';
import * as _ from 'lodash';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.page.html',
  styleUrls: ['./create-session.page.scss'],
})
export class CreateSessionPage implements OnInit {

  input:string;
  session:Session = new Session();
  loading:boolean = false;

  constructor(public actionSheetController: ActionSheetController,private modalController: ModalController,private typeaheadService:TypeaheadService, private createSessionService:CreateSessionService) {}

  ngOnInit() {
  }

  deleteAll():void {
    this.session.dtls = [];
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      buttons: [{
        text: 'すべて削除',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.deleteAll();
        }
      },{
        text: 'キャンセル',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  typeahead(elem:HTMLInputElement) {
    
    setTimeout(()=>{
      if(!_.isEmpty(elem.value)) {
        this.loading = true;
        this.typeaheadService.typeahead(elem.value).subscribe((res)=>{
          this.session.acceptNewDtls(res);
          this.loading = false;
        });
      }
    },5);
  }

  deleteItem(index:number) {
    this.session.deleteDtl(index);
  }

  async startTitleInput() {
    const modal = await this.modalController.create({
      component: TitleInputModalComponent,
      componentProps: {
        session:this.session
      },
      cssClass: 'title-input-modal'
    });
    await modal.present();
  }
}
