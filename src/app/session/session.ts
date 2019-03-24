import { TypeaheadResult } from '../common/typeahead-result';
import * as _ from 'lodash';

export class Session {
    title:string;
    dtls:Array<TypeaheadResult> = [];

    public acceptNewDtls(dtls:Array<TypeaheadResult>){
        this.dtls = (<Array<TypeaheadResult>>_
            .uniqWith(
              this.dtls.concat(dtls),_.isEqual))
            .sort((a,b)=>{
              return a.value.diff(b.value);
        });
    }

    public deleteDtl(index:number) {
        this.dtls.splice(index,1);
    }
}
