import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { RestaurantModel } from '../shared/restaurant-model';
import { RestaurantdataService } from '../shared/restaurantdata.service';
import { RestaurantModel1 } from '../shared/restaurant-model1';
import { ReviewModel } from '../shared/review-model';
import { ReviewdataService } from '../shared/reviewdata.service';
import { ReviewModel1 } from '../shared/review-model1';

@Component({
  selector: 'app-reviewlink',
  templateUrl: './reviewlink.component.html',
  styleUrls: ['./reviewlink.component.css']
})
export class ReviewlinkComponent implements OnInit {

allreviewbyid:ReviewModel1[]=[];
private _subscription:Subscription;

rest_add:string;
rest_id:number;
rest_name:string;
user_name:string;
pro_pic:string;
review_message:string;
review_id:number;
fk_user_email:string;
review_date:string;
//fk_rest_id:number;

  constructor(public _rest_data:RestaurantdataService,public _review_data:ReviewdataService,public _router:Router,public _acroute:ActivatedRoute) { }

  ngOnInit() {


     this._subscription=this._acroute.params.subscribe(

      (params:any)=>{
       // this.fk_rest_id=params["rest_id"];
       this.rest_id =params["rest_id"];
      
        console.log(this.rest_name);
      }
    );

    this._rest_data.getRestaurantbyid(this.rest_id).subscribe(

        (data:RestaurantModel1[])=>{
          
            this.rest_add=data[0].rest_add,
            this.rest_name=data[0].rest_name,
          console.log(this.rest_id);
        }
      );


    /*this._ansdata.getAnswerByQueId(this.faq_id).subscribe(

        (data:AnswerjoinModel[])=>{
         this.allansbyid=data;
          console.log(this.faq_id);
        }
      );*/

      this._review_data.getReviewByRestId(this.rest_id).subscribe(

      (data:ReviewModel1[])=>{
        this.allreviewbyid=data;
        console.log(data);
      },
      function(error){
        alert(error);
      },
      function(){
        console.log('review aai gai');
      }
      
    );


  
  }

  deleteReview(item:ReviewModel1){

  this._review_data.deleteReview(item.review_id).subscribe(
 
    (data:any)=>{
      this.allreviewbyid.splice(this.allreviewbyid.indexOf(item),1);
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

}
