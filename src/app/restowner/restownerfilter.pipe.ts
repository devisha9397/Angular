import { Pipe, PipeTransform } from '@angular/core';
import { RestownerModel } from '../shared/restowner-model';
@Pipe({
  name: 'restownerfilter'
})
export class RestownerfilterPipe implements PipeTransform {
restowner:any[]=[];
  transform(value: any, args?: any): any {
    
     if(args!='')
    {
      this.restowner=value.filter(res=>res.rest_owner_name.toLowerCase().includes(args.toLowerCase()));
      
      return this.restowner;
    }
    else{
      return value;
    }
  }

}
