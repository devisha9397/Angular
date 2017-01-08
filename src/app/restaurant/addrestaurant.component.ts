import { Component, OnInit } from '@angular/core';
import { RestaurantModel } from '../shared/restaurant-model'; 
import { CategoryModel } from '../shared/category-model';
import { CategorydataService } from '../shared/categorydata.service'; 
import { RestaurantdataService } from '../shared/restaurantdata.service';
import { Router,ActivatedRoute } from '@angular/router';
import {Subscription} from 'rxjs/Rx';
 

@Component({
  selector: 'app-addrestaurant', 
  templateUrl: './addrestaurant.component.html',
  styleUrls: ['./addrestaurant.component.css']
})
export class AddrestaurantComponent implements OnInit {

allCat:CategoryModel[]=[];

private rest_id:number;
private fk_owner_email:string;
private fk_cat_id:number;
private rest_name:string;
private rest_add:string;
private _subscription:Subscription;
private pincode:number;
private rest_number:string;
private rest_email:string;
private opening_status:string;

public restaurant:RestaurantModel[]=[];

  constructor(public _restaurant_data:RestaurantdataService,public _cat_data:CategorydataService,public _router:Router,public _acrouter:ActivatedRoute) { }


  ngOnInit() {

     this._subscription=this._acrouter.params.subscribe(

      (params:any)=>{
        this.rest_id=params["rest_id"];
      }
    ); 

     this._cat_data.getAllCategory().subscribe(
      (data:CategoryModel[])=>{
        this.allCat=data;
      }
    );

 
  if(this.rest_id!=0) 
  {
  this._restaurant_data.getRestaurantbyid(this.rest_id).subscribe(
(data:RestaurantModel[])=>{

  this.restaurant=data;
  
  this.rest_id=this.restaurant[0].rest_id;
  this.fk_owner_email=this.restaurant[0].fk_owner_email;
  this.fk_cat_id=this.restaurant[0].fk_cat_id;
  this.rest_name=this.restaurant[0].rest_name;
  this.rest_add=this.restaurant[0].rest_add;
  this.pincode=this.restaurant[0].pincode;
  this.rest_number=this.restaurant[0].rest_number;
  this.rest_email=this.restaurant[0].rest_email;
  this.opening_status=this.restaurant[0].opening_status;
}

  );

  }
  }

   addRestaurant(){
     if(this.rest_id==0)
     {

  this._restaurant_data.addRestaurant(new RestaurantModel(this.rest_id,this.fk_owner_email,this.fk_cat_id,this.rest_name,this.rest_add,this.pincode,this.rest_number,this.rest_email,this.opening_status)).subscribe(
    (data:any)=>{
     alert('added');
    
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
     else
     {

         this._restaurant_data.updateRestaurant(new RestaurantModel(this.rest_id,this.fk_owner_email,this.fk_cat_id,this.rest_name,this.rest_add,this.pincode,this.rest_number,this.rest_email,this.opening_status))
    .subscribe(
      (data:any)=>{

         console.log(data); 
         this._router.navigate(['/restaurants']); 
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
