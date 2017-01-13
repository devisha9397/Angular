import { Pipe, PipeTransform } from '@angular/core';
import { BooktableModel1 } from '../shared/booktable-model1';

@Pipe({
  name: 'booktablefilter'
})
export class BooktablefilterPipe implements PipeTransform {
rname:any[]=[];
uname:any[]=[];
  transform(value: any, args?: any): any {
    if(args!='')
    {
      this.rname=value.filter(res=>res.rest_name.toLowerCase().startsWith(args.toLowerCase()));
      this.uname=value.filter(res=>res.fk_user_email.toLowerCase().startsWith(args.toLowerCase()));
      return this.rname.concat(this.uname);
    }
    else{
      return value;
    }
  }

}
