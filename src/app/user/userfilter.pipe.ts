import { Pipe, PipeTransform } from '@angular/core';
import { UserModel } from '../shared/user-model';

@Pipe({
  name: 'userfilter'
})
export class UserfilterPipe implements PipeTransform {
uname:any[]=[];
ucity:any[]=[];
  transform(value: any, args?: any): any {
    
     if(args!='')
    {
      this.ucity=value.filter(res=>res.city.toLowerCase().startsWith(args.toLowerCase()));
      this.uname=value.filter(res=>res.user_name.toLowerCase().startsWith(args.toLowerCase()));
      return this.uname.concat(this.ucity);
    }
    else{
      return value;
    }
  }

}
