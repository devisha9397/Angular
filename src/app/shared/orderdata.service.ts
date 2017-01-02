import { Injectable } from '@angular/core';
import { OrderModel } from './order-model';
import { Http,Response,RequestOptions,Headers } from '@angular/http';
import 'rxjs/Rx'; 

@Injectable()
export class OrderdataService {

 private url:string="http://localhost:3000/orders/";    
 private url1:string="http://localhost:3000/getorderjoins/";     


  constructor(public _http:Http) { }

getAllOrder(){

return this._http.get(this.url).map((res:Response)=>res.json());
}

getOrderjoin()
{
    return this._http.get(this.url1).map((res:Response)=>res.json());
}
getOrderbyid(id:number){

return this._http.get(this.url+id).map((res:Response)=>res.json());
}

addOrder(item:OrderModel){

let body=JSON.stringify(item);
let header=new Headers({'Content-Type':'application/json'});
let req=new RequestOptions({headers:header});
return this._http.post(this.url,body,req).map((res:Response)=>res.json());
}

deleteOrder(id:number){

let header=new Headers({'Content-Type':'application/json'});
let req=new RequestOptions({headers:header});
return this._http.delete(this.url+id,req).map((res:Response)=>res.json());
}

updateOrder(item:OrderModel){

let body=JSON.stringify(item);
let header=new Headers({'Content-Type':'application/json'});
let req=new RequestOptions({headers:header});
return this._http.put(this.url+item.order_id,body,req).map((res:Response)=>res.json());
}


}
