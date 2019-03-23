import { Injectable } from '@angular/core';
import { DatabaseService } from '../../database/database.service';
import { Observable } from '../../../../node_modules/rxjs';
import { Session } from '../session';

@Injectable({
  providedIn: 'root'
})
export class CreateSessionService {

  constructor(private database:DatabaseService) { }

  create(session:Session):Observable<Session> {
    return this.database.save<Session>(session);
  }
}
