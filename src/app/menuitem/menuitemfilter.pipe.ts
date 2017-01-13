import { Pipe, PipeTransform } from '@angular/core';
import { MenuitemModel1 } from '../shared/menuitem-model1';
@Pipe({
  name: 'menuitemfilter'
})
export class MenuitemfilterPipe implements PipeTransform {
iname:any[]=[];
rname:any[]=[];
  transform(value: any, args?: any): any {
    if(args!='')
    {
      this.iname=value.filter(res=>res.item_name.toLowerCase().includes(args.toLowerCase()));
      this.rname=value.filter(res=>res.rest_name.toLowerCase().includes(args.toLowerCase()));
      //this.ddesc=value.filter(res=>res.d_desc.toLowerCase().includes(args.toLowerCase()));
     // this.uname=value.filter(res=>res.u_name.toLowerCase().includes(args.toLowerCase()));

      return this.iname.concat(this.rname);
    }
    else{
      return value;
    }
  }

}

