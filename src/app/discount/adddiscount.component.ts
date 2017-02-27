import { Component, OnInit } from '@angular/core';
import { DiscountModel } from '../shared/discount-model';
import { DiscountdataService } from '../shared/discountdata.service';
import { RestaurantModel } from '../shared/restaurant-model';
import { RestaurantdataService } from '../shared/restaurantdata.service';
import { Router,ActivatedRoute } from '@angular/router';
import {Subscription} from 'rxjs/Rx';

@Component({
  selector: 'app-adddiscount',
  templateUrl: './adddiscount.component.html',
  styleUrls: ['./adddiscount.component.css']
})
export class AdddiscountComponent implements OnInit {
allRest:RestaurantModel[]=[];

private discount_id:number;
private fk_rest_id:number;
private discount_desc:string;
private _subscription:Subscription;//aa bdha ma rakhvu j

public discount:DiscountModel[]=[];

  constructor(public _discount_data:DiscountdataService,public _rest_data:RestaurantdataService ,public _router:Router,public _acrouter:ActivatedRoute) { }

  ngOnInit() {


     this._subscription=this._acrouter.params.subscribe(

      (params:any)=>{
        this.discount_id=params["discount_id"];
      }
    );

    this._rest_data.getAllRestaurant().subscribe(
      (data:RestaurantModel[])=>{
        this.allRest=data;
      }
    );
  if(this.discount_id!=0)
  {
  this._discount_data.getDiscountbyid(this.discount_id).subscribe(
(data:DiscountModel[])=>{

  this.discount=data;
  
  this.fk_rest_id=this.discount[0].fk_rest_id;
  this.discount_desc=this.discount[0].discount_desc;
  //this.cost=this.category[0].cost;
  //this.hours=this.category[0].hours;
 // this.known_for=this.category[0].known_for;
  //this.spotlight=this.category[0].spotlight;

}

  );
  }
  }

addDiscount(){

  if(this.discount_id==0) 
    {
  this._discount_data.addDiscount(new DiscountModel(this.discount_id,this.fk_rest_id,this.discount_desc)).subscribe(
    (data:any)=>{
      alert('added');
    
      this._router.navigate(['/discounts']);
    },
    function(error) 
    {
      console.log(error);
    },
    function()
    {
      console.log("menuitem add");
    }
  );
}
else{
  //edit

  this._discount_data.updateDiscount(new DiscountModel(this.discount_id,this.fk_rest_id,this.discount_desc))
    .subscribe(
      (data:any)=>{

         console.log(data); 
         this._router.navigate(['/discounts']); 
    },
    function(error){

      alert(error);
    },
    function(){
      alert('Updated');
      }
    );
}
  }
}
