import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DiscountModel } from '../shared/discount-model';
import { DiscountModel1 } from '../shared/discount-model1';
import { DiscountdataService } from '../shared/discountdata.service';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {

allDiscount:DiscountModel1[]=[];
  constructor(public _discount_data:DiscountdataService,public _router:Router) { }

  ngOnInit() {

   this._discount_data.getDiscountjoin().subscribe(

      (data:DiscountModel1[])=>{
        this.allDiscount=data;
      },
      function(error){
        alert('vaat lagshe');
      },
      function(){
        console.log('badhu patyu');
      }
    ); 
  }

deleteDiscount(item:DiscountModel1){

  this._discount_data.deleteDiscount(item.discount_id).subscribe(

    (data:any)=>{
      this.allDiscount.splice(this.allDiscount.indexOf(item),1);
      alert('udi gayu');
    },
      function(error){
        alert('vaat lagshe');
      },
      function(){
        console.log('badhu patyu');
      }
      
  );

  }
  addDiscount(item:DiscountModel1)
  {
    this._router.navigate(['/adddiscounts',0]);///
  }
  
 updateDiscount(item:DiscountModel1)
  {
       this._router.navigate(['/adddiscounts',item.discount_id]);////
  }

}
