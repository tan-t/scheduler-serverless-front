import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { ApiService } from '../../api/api.service';
import { EndPoint } from '../../api/end-point.enum';
import { TypeaheadResult } from '../../common/typeahead-result';
import { TypeaheadService } from '../../common/typeahead.service';
import { CreateSessionService } from './create-session.service';
import { Session } from '../session';
import * as _ from 'lodash';
import { TitleInputModalComponent } from './title-input-modal/title-input-modal.component';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.page.html',
  styleUrls: ['./create-session.page.scss'],
})
export class CreateSessionPage implements OnInit {

  input:string;
  session:Session = {title:'',dtls:[]};

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
        this.typeaheadService.typeahead(elem.value).subscribe((res)=>{
          this.session.dtls = (<Array<TypeaheadResult>>_
          .uniqWith(
            this.session.dtls.concat(res),_.isEqual))
          .sort((a,b)=>{
            return a.value.diff(b.value);
          });

        });
      }
    },5);
  }

  deleteItem(index:number) {
    this.session.dtls.splice(index,1);
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
