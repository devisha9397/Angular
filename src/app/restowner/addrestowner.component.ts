import { Component, OnInit } from '@angular/core';
import { RestownerModel } from '../shared/restowner-model';
import { RestownerdataService } from '../shared/restownerdata.service';
import { Router,ActivatedRoute } from '@angular/router';
import {Subscription} from 'rxjs/Rx'; 
@Component({
  selector: 'app-addrestowner',
  templateUrl: './addrestowner.component.html',
  styleUrls: ['./addrestowner.component.css']
})
export class AddrestownerComponent implements OnInit {

private owner_email:string;
private fk_rest_id:number;
private rest_owner_name:string;
private owner_mob_no:string;
private _subscription:Subscription;

public restowner:RestownerModel[]=[];
  constructor(public _restowner_data:RestownerdataService,public _router:Router,public _acrouter:ActivatedRoute) { }

  ngOnInit() {

     this._subscription=this._acrouter.params.subscribe(

      (params:any)=>{
        this.owner_email=params["owner_email"];
      }
    );
  if(this.owner_email="")
  {
  this._restowner_data.getRestownerbyid(this.owner_email).subscribe(
(data:RestownerModel[])=>{

  this.restowner=data;
  
  this.owner_email=this.restowner[0].owner_email;
  this.fk_rest_id=this.restowner[0].fk_rest_id;
  this.rest_owner_name=this.restowner[0].rest_owner_name;
  this.owner_mob_no=this.restowner[0].owner_mob_no;

}

  );
  }
  }

   addRestowner(){

  this._restowner_data.addRestowner(new RestownerModel(this.owner_email,this.fk_rest_id,this.rest_owner_name,this.owner_mob_no)).subscribe(
    (data:any)=>{
    alert('added');
    
      this._router.navigate(['/restowners']);///////
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
