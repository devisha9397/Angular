import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { RestaurantModel } from '../shared/restaurant-model';
import { RestaurantdataService } from '../shared/restaurantdata.service';
import { RestaurantModel1 } from '../shared/restaurant-model1';
import { OtherphotoModel } from '../shared/otherphoto-model';
import { OtherphotodataService } from '../shared/otherphotodata.service';
import { Otherphotomodel1 } from '../shared/otherphotomodel1';




@Component({
  selector: 'app-otherphotolink',
  templateUrl: './otherphotolink.component.html',
  styleUrls: ['./otherphotolink.component.css']
})
export class OtherphotolinkComponent implements OnInit {

allotherphotoid:Otherphotomodel1[]=[];
private _subscription:Subscription;

other_id:number;
otherpic_path:string;
fk_rest_id:number;
rest_name:string;
rest_id:number;



  constructor(public _rest_data:RestaurantdataService,public _other_data:OtherphotodataService,public _router:Router,public _acroute:ActivatedRoute) { }

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

      this._other_data.getOtherphotojoinById(this.rest_id).subscribe(

      (data:Otherphotomodel1[])=>{
        this.allotherphotoid=data;
        console.log(data);
      },
      function(error){
        alert(error);
      },
      function(){
        console.log('photo aai gai');
      }
      
    );

  }

}
