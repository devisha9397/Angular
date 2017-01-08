import { Component, OnInit } from '@angular/core';
import { FavModels } from '../shared/fav-models';
import { FavdataService } from '../shared/favdata.service';
import { RestaurantModel } from '../shared/restaurant-model';
import { RestaurantdataService } from '../shared/restaurantdata.service';
import { Router,ActivatedRoute } from '@angular/router';
import {Subscription} from 'rxjs/Rx';

@Component({
  selector: 'app-addfav',
  templateUrl: './addfav.component.html',
  styleUrls: ['./addfav.component.css']
})
export class AddfavComponent implements OnInit {
allRest:RestaurantModel[]=[];
private fav_id:number;
private fk_rest_id:number;
private fk_user_email:string;
private _subscription:Subscription;//aa bdha ma rakhvu j

public fav:FavModels[]=[];


  constructor(public _fav_data:FavdataService,public _rest_data:RestaurantdataService ,public _router:Router,public _acrouter:ActivatedRoute) { }


  ngOnInit() {

     this._subscription=this._acrouter.params.subscribe(

      (params:any)=>{
        this.fav_id=params["fav_id"];
      }
    );

    this._rest_data.getAllRestaurant().subscribe(
      (data:RestaurantModel[])=>{
        this.allRest=data;
      }
    );
  if(this.fav_id!=0)
  {
  this._fav_data.getFavbyid(this.fav_id).subscribe(
(data:FavModels[])=>{

  this.fav=data;
  
  this.fk_rest_id=this.fav[0].fk_rest_id;
  this.fk_user_email=this.fav[0].fk_user_email;
  //this.cost=this.category[0].cost;
  //this.hours=this.category[0].hours;
 // this.known_for=this.category[0].known_for;
  //this.spotlight=this.category[0].spotlight;

}

  );
  }
  }
  addFav(){

  if(this.fav_id==0) 
    {
  this._fav_data.addFav(new FavModels(this.fav_id,this.fk_rest_id,this.fk_user_email)).subscribe(
    (data:any)=>{
      alert('added');
    
      this._router.navigate(['/favs']);
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

  this._fav_data.updateFav(new FavModels(this.fav_id,this.fk_rest_id,this.fk_user_email))
    .subscribe(
      (data:any)=>{

         console.log(data); 
         this._router.navigate(['/favs']); 
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
