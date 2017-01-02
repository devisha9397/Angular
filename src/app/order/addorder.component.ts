import { Component, OnInit } from '@angular/core';
import { OrderModel } from '../shared/order-model';
import { RestaurantModel } from '../shared/restaurant-model';
import { RestaurantdataService } from '../shared/restaurantdata.service';
import { MenuitemModel } from '../shared/menuitem-model';
import { MenuitemdataService } from '../shared/menuitemdata.service';
import { OrderdataService } from '../shared/orderdata.service';
import { Router,ActivatedRoute } from '@angular/router';
import {Subscription} from 'rxjs/Rx';
 
@Component({
  selector: 'app-addorder',
  templateUrl: './addorder.component.html',
  styleUrls: ['./addorder.component.css']
})
export class AddorderComponent implements OnInit {
allRest:RestaurantModel[]=[];
allItem:MenuitemModel[]=[];
private order_id:number;
private fk_rest_id:number;
private fk_user_email:string;
private fk_item_id:number;
private item_name:string;
private quantity:number;
private _subscription:Subscription;
private total_amount:number;
private flag:number;
private date_of_order:string;
private delivery_area:string;


public order:OrderModel[]=[];
  constructor(public _order_data:OrderdataService,public _rest_data:RestaurantdataService,public _menuitem_data:MenuitemdataService,public _router:Router,public _acrouter:ActivatedRoute) { }

  ngOnInit() {

    this._subscription=this._acrouter.params.subscribe(
 
      (params:any)=>{
        this.order_id=params["order_id"];
      }
    );

    this._rest_data.getAllRestaurant().subscribe(
      (data:RestaurantModel[])=>{
        this.allRest=data;
      }
    );

    this._menuitem_data.getAllMenuitem().subscribe(
      (data:MenuitemModel[])=>{
        this.allItem=data;
      }
    );
  if(this.order_id==0)
  {
  this._order_data.getOrderbyid(this.order_id).subscribe(
(data:OrderModel[])=>{

  this.order=data;

  
  
  this.order_id=this.order[0].order_id;
  this.fk_rest_id=this.order[0].fk_rest_id;
  this.fk_user_email=this.order[0].fk_user_email;
  this.fk_item_id=this.order[0].fk_item_id;
  this.item_name=this.order[0].item_name;
  this.quantity=this.order[0].quantity;
  this.total_amount=this.order[0].total_amount;
  this.flag=this.order[0].flag;
  this.date_of_order=this.order[0].date_of_order;
  this.delivery_area=this.order[0].delivery_area;

}

  );
  } 
  }

addOrder(){

  this._order_data.addOrder(new OrderModel(this.order_id,this.fk_rest_id,this.fk_user_email,this.fk_item_id,this.item_name,this.quantity,this.total_amount,this.flag,this.date_of_order,this.delivery_area)).subscribe(
    (data:any)=>{
      alert('added');
    
      this._router.navigate(['/orders']);
    },
    function(error)
    {
      console.log(error);
    },
    function()
    {
      console.log("order add");
    }
  );

}
}
