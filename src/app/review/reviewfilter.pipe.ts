import { Pipe, PipeTransform } from '@angular/core';
import { ReviewModel1 } from '../shared/review-model1';
@Pipe({
  name: 'reviewfilter'
})
export class ReviewfilterPipe implements PipeTransform {

restname:any[]=[];
uemail:any[]=[];
  transform(value: any, args?: any): any {
     if(args!='')
    {
      this.restname=value.filter(res=>res.rest_name.toLowerCase().startsWith(args.toLowerCase()));
      this.uemail=value.filter(res=>res.fk_user_email.toLowerCase().startsWith(args.toLowerCase()));
      

      return this.restname.concat(this.uemail);
    }
    else{
      return value;
    }
  }


  }


