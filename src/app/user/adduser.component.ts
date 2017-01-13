import { Component, OnInit } from '@angular/core';
import { UserModel } from '../shared/user-model';
import { UserdataService } from '../shared/userdata.service';
import { Router,ActivatedRoute } from '@angular/router';
import {Subscription} from 'rxjs/Rx';
//import { RestaurantModel } from '../shared/restaurant-model';
//import { RestaurantdataService } from '../shared/restaurantdata.service';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']

})
export class AdduserComponent implements OnInit {

  constructor(public _user_data:UserdataService,public _router:Router,public _acrouter:ActivatedRoute) { }

private user_email:string;
private user_name:string;
private password:string;
private address:string;
private mobile_no:number;
private gender:string;
private _subscription:Subscription;
private city:string;
private pro_pic:string;
private DOB:string;

 public book:UserModel[]=[];


  ngOnInit() {
     this._subscription=this._acrouter.params.subscribe(

      (params:any)=>{
        this.user_email=params["user_email"];
      }
    );

   /*  this._rest_data.getAllRestaurant().subscribe(
      (data:RestaurantModel[])=>{
        this.allRest=data;
      }
    );*////aa bdha ma add krvu
  
  if(this.user_email!='0'){

    this._user_data.getUserbyid(this.user_email).subscribe(
(data:UserModel[])=>{

  this.book=data;
  
  this.user_email=this.book[0].user_email;
  this.user_name=this.book[0].user_name;
  this.address=this.book[0].address;
  this.mobile_no=this.book[0].mobile_no;
  this.time=this.book[0].time;
  this.additional_request=this.book[0].additional_request;

}

  );

  }
  }

}
