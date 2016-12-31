import { Injectable } from '@angular/core';
import { RestownerModel } from './restowner-model';
import { Http,Response,RequestOptions,Headers } from '@angular/http';
import 'rxjs/Rx'; 

@Injectable()
export class RestownerdataService {

  private url:string="http://localhost:3000/restowners/";


  constructor(public _http:Http) { }

getAllRestowner(){

return this._http.get(this.url).map((res:Response)=>res.json());
}

getRestownerbyid(id:string){

return this._http.get(this.url+id).map((res:Response)=>res.json());
}

addRestowner(item:RestownerModel){

let body=JSON.stringify(item);
let header=new Headers({'Content-Type':'application/json'});
let req=new RequestOptions({headers:header});
return this._http.post(this.url,body,req).map((res:Response)=>res.json());
}

deleteRestowner(id:string){

let header=new Headers({'Content-Type':'application/json'});
let req=new RequestOptions({headers:header});
return this._http.delete(this.url+id,req).map((res:Response)=>res.json());
}

updateRestowner(item:RestownerModel){

let body=JSON.stringify(item);
let header=new Headers({'Content-Type':'application/json'});
let req=new RequestOptions({headers:header});
return this._http.put(this.url+item.owner_email,body,req).map((res:Response)=>res.json());
}


}
