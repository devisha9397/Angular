import { Component, OnInit } from '@angular/core';
import { RestaurantModel } from '../shared/restaurant-model';
import { RestaurantdataService } from '../shared/restaurantdata.service';
import { Router,ActivatedRoute } from '@angular/router';
import {Subscription} from 'rxjs/Rx';


@Component({
  selector: 'app-addrestaurant',
  templateUrl: './addrestaurant.component.html',
  styleUrls: ['./addrestaurant.component.css']
})
export class AddrestaurantComponent implements OnInit {

private rest_id:number;
private fk_owner_email:string;
private fk_cat_id:number;
private fk_review_id:number;
private rest_name:string;
private rest_add:string;
private _subscription:Subscription;
private pincode:number;
private rest_number:string;
private rest_email:string;
private opening_status:string;
private main_photo:string;
private menu_photo:string;
private other_photos:string;

public restaurant:RestaurantModel[]=[];

  constructor(public _restaurant_data:RestaurantdataService,public _router:Router,public _acrouter:ActivatedRoute) { }


  ngOnInit() {

     this._subscription=this._acrouter.params.subscribe(

      (params:any)=>{
        this.rest_id=params["rest_id"];
      }
    );
  if(this.rest_id==0)
  {
  this._restaurant_data.getRestaurantbyid(this.rest_id).subscribe(
(data:RestaurantModel[])=>{

  this.restaurant=data;
  
  this.rest_id=this.restaurant[0].rest_id;
  this.fk_owner_email=this.restaurant[0].fk_owner_email;
  this.fk_cat_id=this.restaurant[0].fk_cat_id;
  this.fk_review_id=this.restaurant[0].fk_review_id;
  this.rest_name=this.restaurant[0].rest_name;
  this.rest_add=this._restaurant_data[0].rest_add;
  this.pincode=this._restaurant_data[0].pincode;
  this.rest_number=this.restaurant[0].rest_number;
  this.rest_email=this.restaurant[0].rest_email;
  this.opening_status=this.restaurant[0].opening_status;
  this.main_photo=this.restaurant[0].main_photo;
  this.menu_photo=this.restaurant[0].menu_photo; 
  this.other_photos=this.restaurant[0].other_photos;

}

  );
  }
  }

   addRestaurant(){

  this._restaurant_data.addRestaurant(new RestaurantModel(this.rest_id,this.fk_owner_email,this.fk_cat_id,this.fk_review_id,this.rest_name,this.rest_add,this.pincode,this.rest_number,this.rest_email,this.opening_status,this.main_photo,this.menu_photo,this.other_photos)).subscribe(
    (data:any)=>{
    //  alert('added');
    
      this._router.navigate(['/restaurants']);////
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

}
