import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../shared/user-model';
import { UserdataService } from '../shared/userdata.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  allUser:UserModel[]=[];

  constructor(public _user_data:UserdataService,public _router:Router) { }

  ngOnInit() {

    this._user_data.getAllUser().subscribe(

      (data:UserModel[])=>{
        this.allUser=data;
      },
      function(error){
        alert('vaat lagshe');
      },
      function(){
        console.log('badhu patyu');
      }
    );  
  }

  deleteUser(item:UserModel){

  this._user_data.deleteUser(item.user_email).subscribe(

    (data:any)=>{
      this.allUser.splice(this.allUser.indexOf(item),1);
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
  addUser()
  {
    this._router.navigate(['/addusers',0]);/////
  }

/*addUser(item:UserModel)
  {
    this._router.navigate(['/addbooktables',0]);////
  }*/
}
