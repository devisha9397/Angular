import { Injectable } from '@angular/core';
import { DiscountModel } from './discount-model';
import { DiscountModel1 } from './discount-model1';
import { Http,Response,RequestOptions,Headers } from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class DiscountdataService {
private url:string="http://localhost:3000/discounts/";
private url1:string="http://localhost:3000/getdiscountjoins/";

  constructor(public _http:Http) { }

  getAllDiscount(){
 
return this._http.get(this.url).map((res:Response)=>res.json());
}

getDiscountjoin()
{
    return this._http.get(this.url1).map((res:Response)=>res.json());
}

getDiscountbyid(id:number){


return this._http.get(this.url+id).map((res:Response)=>res.json());
}

addDiscount(item:DiscountModel){

let body=JSON.stringify(item);
let header=new Headers({'Content-Type':'application/json'});
let req=new RequestOptions({headers:header});
return this._http.post(this.url,body,req).map((res:Response)=>res.json());
}

deleteDiscount(id:number){

let header=new Headers({'Content-Type':'application/json'});
let req=new RequestOptions({headers:header});
return this._http.delete(this.url+id,req).map((res:Response)=>res.json());
}

updateDiscount(item:DiscountModel){

let body=JSON.stringify(item);
let header=new Headers({'Content-Type':'application/json'});
let req=new RequestOptions({headers:header});
return this._http.put(this.url+item.discount_id,body,req).map((res:Response)=>res.json());
}






}
