import { Session } from './session';
import * as moment from '../../../node_modules/moment';

describe('Session', () => {
  it('should create an instance', () => {
    expect(new Session()).toBeTruthy();
  });

  it('should uniqify and sort when added items',() => {
    const session = new Session();
    session.acceptNewDtls([{label:'20190102',value:moment('2019-01-02')},{label:'20190102',value:moment('2019-01-02')},{label:'20190101',value:moment('2019-01-01')}]);
    expect(session.dtls).toEqual([{label:'20190101',value:moment('2019-01-01')},{label:'20190102',value:moment('2019-01-02')}]);
  });

  it('should delete passed index',() => {
    const session = new Session();
    session.acceptNewDtls([{label:'20190102',value:moment('2019-01-02')},{label:'20190102',value:moment('2019-01-02')},{label:'20190101',value:moment('2019-01-01')}]);
    session.deleteDtl(1);
    expect(session.dtls).toEqual([{label:'20190101',value:moment('2019-01-01')}]);
  });
});
