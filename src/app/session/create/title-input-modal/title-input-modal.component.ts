import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '../../../../../node_modules/@ionic/angular';
import { Session } from '../../session';
import { CreateSessionService } from '../create-session.service';

@Component({
  selector: 'app-title-input-modal',
  templateUrl: './title-input-modal.component.html',
  styleUrls: ['./title-input-modal.component.scss'],
})
export class TitleInputModalComponent implements OnInit {

  constructor(private createSessionService:CreateSessionService) { }

  @Input()
  session:Session = new Session();

  ngOnInit() {}

  register() {
    this.createSessionService.create(this.session).subscribe((res)=>{
      console.log(res);
    });
  }

}
