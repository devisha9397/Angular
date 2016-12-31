import { Component, OnInit } from '@angular/core';
import { MenuitemModel } from '../shared/menuitem-model';
import { RestaurantModel } from '../shared/restaurant-model';
import { RestaurantdataService } from '../shared/restaurantdata.service';
import { MenuitemdataService } from '../shared/menuitemdata.service';
import { Router,ActivatedRoute } from '@angular/router';
import {Subscription} from 'rxjs/Rx';

@Component({
  selector: 'app-addmenuitem',
  templateUrl: './addmenuitem.component.html',
  styleUrls: ['./addmenuitem.component.css']
})
export class AddmenuitemComponent implements OnInit {

allRest:RestaurantModel[]=[];
private item_id:number;
private fk_rest_id:number;
private item_name:string;
private item_price:number;
private _subscription:Subscription;//aa bdha ma rakhvu j

public menuitem:MenuitemModel[]=[];

  constructor(public _menuitem_data:MenuitemdataService,public _rest_data:RestaurantdataService,public _router:Router,public _acrouter:ActivatedRoute) { }

  ngOnInit() { 

     this._subscription=this._acrouter.params.subscribe(

      (params:any)=>{
        this.item_id=params["item_id"];
      }
    );

    this._rest_data.getAllRestaurant().subscribe(
      (data:RestaurantModel[])=>{
        this.allRest=data;
      }
    );
  if(this.item_id==0)
  {
  this._menuitem_data.getMenuitembyid(this.item_id).subscribe(
(data:MenuitemModel[])=>{

  this.menuitem=data;
  
  this.item_id=this.menuitem[0].item_id;
  this.fk_rest_id=this.menuitem[0].fk_rest_id;
  this.item_name=this.menuitem[0].item_name;
  this.item_price=this.menuitem[0].item_price;
  

}

  );
  }
  }

   addMenuitem(){

    if(this.item_id==0)
    {
  this._menuitem_data.addMenuitem(new MenuitemModel(this.item_id,this.fk_rest_id,this.item_name,this.item_price)).subscribe(
    (data:any)=>{
    //  alert('added');
    
      this._router.navigate(['/menuitems']);
    },
    function(error)
    {
      console.log(error);
    },
    function()
    {
      console.log("book add");
    }
  );
    }
    else
    {
      //edit
    }
   }
  
 }
