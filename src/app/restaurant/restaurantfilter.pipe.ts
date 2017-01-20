import { Pipe, PipeTransform } from '@angular/core';
import { RestaurantModel1 } from '../shared/restaurant-model1';
@Pipe({
  name: 'restaurantfilter'
})
export class RestaurantfilterPipe implements PipeTransform {
owner:any[]=[];
rname:any[]=[];
raddress:any[]=[];
  transform(value: any, args?: any): any {
      if(args!='')
    {
      this.owner=value.filter(res=>res.fk_owner_email.toLowerCase().startsWith(args.toLowerCase()));
      this.rname=value.filter(res=>res.rest_name.toLowerCase().startsWith(args.toLowerCase()));
      this.raddress=value.filter(res=>res.rest_add.toLowerCase().startsWith(args.toLowerCase()));
      return this.owner.concat(this.rname.concat(this.raddress));
    }
    else{
      return value;
    }
  }
 
}
