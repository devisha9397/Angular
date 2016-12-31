import { Component, OnInit } from '@angular/core';
import { BooktableModel } from '../shared/booktable-model';
import { BooktabledataService } from '../shared/booktabledata.service';
import { Router,ActivatedRoute } from '@angular/router';
import {Subscription} from 'rxjs/Rx';
import { RestaurantModel } from '../shared/restaurant-model';
import { RestaurantdataService } from '../shared/restaurantdata.service';
//import { UserModel } from '../shared/user-model';
//import { UserdataService } from '../shared/userdata.service';

@Component({
  selector: 'app-addbooktable',
  templateUrl: './addbooktable.component.html',
  styleUrls: ['./addbooktable.component.css']
})
export class AddbooktableComponent implements OnInit {

//alluse:CategoryModel[]=[];
allRest:RestaurantModel[]=[];

private table_id:number;
private fk_user_email:string;
private fk_rest_id:number;
private date:string;
private no_of_people:number;
private time:string;
private _subscription:Subscription;
private additional_request:string;


 public book:BooktableModel[]=[];

  constructor(public _rest_data:RestaurantdataService,public _book_data:BooktabledataService,public _router:Router,public _acrouter:ActivatedRoute) { }

  ngOnInit() {
 
    this._subscription=this._acrouter.params.subscribe(

      (params:any)=>{
        this.table_id=params["table_id"];
      }
    );

     this._rest_data.getAllRestaurant().subscribe(
      (data:RestaurantModel[])=>{
        this.allRest=data;
      }
    );////aa bdha ma add krvu
  if(this.table_id==0)
  {
  this._book_data.getBooktablebyid(this.table_id).subscribe(
(data:BooktableModel[])=>{

  this.book=data;
  
  this.fk_user_email=this.book[0].fk_user_email;
  this.fk_rest_id=this.book[0].fk_rest_id;
  this.date=this.book[0].date;
  this.no_of_people=this.book[0].no_of_people;
  this.time=this.book[0].time;
  this.additional_request=this.book[0].additional_request;

}

  );
  }
  }

  addBooktable(){
    if(this.table_id==0) 
    {

  this._book_data.addBooktable(new BooktableModel(this.table_id,this.fk_user_email,this.fk_rest_id,this.date,this.no_of_people,this.time,this.additional_request)).subscribe(
    (data:any)=>{
    alert('added');
    
      this._router.navigate(['/booktables']);
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
