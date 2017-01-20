import { Injectable } from '@angular/core';
import { UserModel } from './user-model';
import { Http,Response,RequestOptions,Headers } from '@angular/http';
import 'rxjs/Rx'; 
 

@Injectable()
export class UserdataService {

  private url:string="http://localhost:3000/users/";


  constructor(public _http:Http) { }

getAllUser(){

return this._http.get(this.url).map((res:Response)=>res.json());
}
 
getUserbyid(id:string){

return this._http.get(this.url+id).map((res:Response)=>res.json());
}

addUser(item:UserModel){

let body=JSON.stringify(item);
let header=new Headers({'Content-Type':'application/json'});
let req=new RequestOptions({headers:header});
return this._http.post(this.url,body,req).map((res:Response)=>res.json());
} 


deleteUser(id:string){

let header=new Headers({'Content-Type':'application/json'});
let req=new RequestOptions({headers:header});
return this._http.delete(this.url+id,req).map((res:Response)=>res.json());
}

updateUser(item:UserModel){

let body=JSON.stringify(item);
let header=new Headers({'Content-Type':'application/json'});
let req=new RequestOptions({headers:header});
return this._http.put(this.url+item.user_email,body,req).map((res:Response)=>res.json());
}

}
