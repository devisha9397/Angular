import { Component, OnInit } from '@angular/core';
import {ReviewModel } from '../shared/review-model';
import {RestaurantModel } from '../shared/restaurant-model';
import { RestaurantdataService } from '../shared/restaurantdata.service';
import { ReviewdataService } from '../shared/reviewdata.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx'; 

@Component({
  selector: 'app-addreview',
  templateUrl: './addreview.component.html',
  styleUrls: ['./addreview.component.css']
})
export class AddreviewComponent implements OnInit {

private review_id:number;
private fk_user_email:string;
private fk_rest_id:number;
private review_message:string;
private review_date:string;
private _subscription:Subscription;

public review:ReviewModel[]=[];
public allRest:RestaurantModel[]=[];
  constructor( public _review_data:ReviewdataService,public _rest_data:RestaurantdataService ,public _router:Router,public _acrouter:ActivatedRoute) { }

  ngOnInit() {

     this._subscription=this._acrouter.params.subscribe(

      (params:any)=>{
        this.review_id=params["review_id"];
      }
    );

    this._rest_data.getAllRestaurant().subscribe(
      (data:RestaurantModel[])=>{
        this.allRest=data;
      }
    );

  if(this.review_id!=0){

    this._review_data.getReviewbyid(this.review_id).subscribe(
(data:ReviewModel[])=>{

  this.review=data; 
   
  this.review_id=this.review[0].review_id;
  this.fk_user_email=this.review[0].fk_user_email;
   this.fk_rest_id=this.review[0].fk_rest_id;
  this.review_message=this.review[0].review_message;
  this.review_date=this.review[0].review_date;

}

  );

  } 
  }

  addReview(){
    if(this.review_id==0) 
    {

  this._review_data.addReview(new ReviewModel(this.review_id,this.fk_user_email,this.fk_rest_id,this.review_message,this.review_date)).subscribe(
    (data:any)=>{
    alert('added');
    
      this._router.navigate(['/reviews']);
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

  this._review_data.updateReview(new ReviewModel(this.review_id,this.fk_user_email,this.fk_rest_id,this.review_message,this.review_date))
    .subscribe(
      (data:any)=>{

         console.log(data); 
         this._router.navigate(['/reviews']); 
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
