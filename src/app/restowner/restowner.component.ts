import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestownerModel } from '../shared/restowner-model';
import { RestownerdataService } from '../shared/restownerdata.service';
@Component({
  selector: 'app-restowner',
  templateUrl: './restowner.component.html',
  styleUrls: ['./restowner.component.css']
})
export class RestownerComponent implements OnInit {
  
  allRestowner:RestownerModel[]=[];


  constructor(public _restowner_data:RestownerdataService,public _router:Router) { }

  ngOnInit() {

    this._restowner_data.getAllRestowner().subscribe(

      (data:RestownerModel[])=>{
        this.allRestowner=data;
      },
      function(error){
        alert('vaat lagshe');
      },
      function(){
        console.log('badhu patyu');
      }
    );  
  }

  deleteRestowner(item:RestownerModel){

  this._restowner_data.deleteRestowner(item.owner_email).subscribe(

    (data:any)=>{
      this.allRestowner.splice(this.allRestowner.indexOf(item),1);
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
   addRestowner(item:RestownerModel)
  {
    this._router.navigate(['/addrestowners','0']);
  }
 
 updateRestowner(item:RestownerModel)
  {
       this._router.navigate(['/addrestowners',item.owner_email]);
  }

}
