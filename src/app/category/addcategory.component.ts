import { Component, OnInit } from '@angular/core';
import { CategoryModel } from '../shared/category-model';
import { CategorydataService } from '../shared/categorydata.service';
import { RestaurantModel } from '../shared/restaurant-model';
import { RestaurantdataService } from '../shared/restaurantdata.service';
import { Router,ActivatedRoute } from '@angular/router';
import {Subscription} from 'rxjs/Rx';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {

allRest:RestaurantModel[]=[];
private cat_id:number;
private fk_rest_id:number;
private cusines:string;
private cost:number;
private hours:string;
private known_for:string;
private _subscription:Subscription;//aa bdha ma rakhvu j
private spotlight:string;

public category:CategoryModel[]=[];
  constructor(public _category_data:CategorydataService,public _rest_data:RestaurantdataService ,public _router:Router,public _acrouter:ActivatedRoute) { }

  ngOnInit() {
    this._subscription=this._acrouter.params.subscribe(

      (params:any)=>{
        this.cat_id=params["cat_id"];
      }
    );

    this._rest_data.getAllRestaurant().subscribe(
      (data:RestaurantModel[])=>{
        this.allRest=data;
      }
    );
  if(this.cat_id!=0)
  {
  this._category_data.getCategorybyid(this.cat_id).subscribe(
(data:CategoryModel[])=>{

  this.category=data;
  
  this.fk_rest_id=this.category[0].fk_rest_id;
  this.cusines=this.category[0].cusines;
  this.cost=this.category[0].cost;
  this.hours=this.category[0].hours;
  this.known_for=this.category[0].known_for;
  this.spotlight=this.category[0].spotlight;

}

  );
  }
  } 

  addCategory(){

  if(this.cat_id==0) 
    {
  this._category_data.addCategory(new CategoryModel(this.cat_id,this.fk_rest_id,this.cusines,this.cost,this.hours,this.known_for,this.spotlight)).subscribe(
    (data:any)=>{
      alert('added');
    
      this._router.navigate(['/categories']);
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

  this._category_data.updateCategory(new CategoryModel(this.cat_id,this.fk_rest_id,this.cusines,this.cost,this.hours,this.known_for,this.spotlight))
    .subscribe(
      (data:any)=>{

         console.log(data); 
         this._router.navigate(['/categories']); 
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
