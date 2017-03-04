import { Injectable } from '@angular/core';
import { RestaurantModel } from './restaurant-model';
import { Http,Response,RequestOptions,Headers } from '@angular/http';
import 'rxjs/Rx'; 
@Injectable()
export class RestaurantdataService {

  private url:string="http://localhost:3000/restaurants/";
   private url1:string="http://localhost:3000/getrestaurantjoins/";

  constructor(public _http:Http) { }

getAllRestaurant(){

return this._http.get(this.url).map((res:Response)=>res.json());
}

getRestaurantbyid(id:number){

return this._http.get(this.url+id).map((res:Response)=>res.json());
}


addRestaurant(item:RestaurantModel){

let body=JSON.stringify(item);
let header=new Headers({'Content-Type':'application/json'});
let req=new RequestOptions({headers:header});
return this._http.post(this.url,body,req).map((res:Response)=>res.json());
} 

deleteRestaurant(id:number){

let header=new Headers({'Content-Type':'application/json'});
let req=new RequestOptions({headers:header});
return this._http.delete(this.url+id,req).map((res:Response)=>res.json());
}

updateRestaurant(item:RestaurantModel){

let body=JSON.stringify(item);
let header=new Headers({'Content-Type':'application/json'});
let req=new RequestOptions({headers:header});
return this._http.put(this.url+item.rest_id,body,req).map((res:Response)=>res.json());
}

getRestaurantjoin()
{
return this._http.get(this.url1).map((res:Response)=>res.json());
}



 getRestaurantjoinById(rest_id:number){
  return this._http.get(this.url1+rest_id).map((res:Response)=>res.json());
  }
}
