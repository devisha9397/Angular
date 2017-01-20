import { Pipe, PipeTransform } from '@angular/core';
import { OrderModel1 } from '../shared/order-model1';
@Pipe({
  name: 'orderfilter'
})
export class OrderfilterPipe implements PipeTransform {

rnmae:any[]=[];
uname:any[]=[];
itemname:any[]=[];
deliveryarea:any[]=[];
  transform(value: any, args?: any): any {
    
    if(args!='')
    {
      this.rnmae=value.filter(res=>res.rest_name.toLowerCase().startsWith(args.toLowerCase()));
      this.uname=value.filter(res=>res.fk_user_email.toLowerCase().startsWith(args.toLowerCase()));
       this.deliveryarea=value.filter(res=>res.delivery_area.toLowerCase().startsWith(args.toLowerCase()));
      return this.rnmae.concat(this.uname.concat(this.deliveryarea));
    }
    else{
      return value;
    }
  }

}
